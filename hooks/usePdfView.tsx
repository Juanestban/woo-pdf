import { useState, useMemo, useCallback, ReactElement } from 'react';

type PdfViewHook = {
  view: ReactElement;
  nextPage: () => void;
  prevPage: () => void;
  goTo: (page: number) => void;
};

type PdfViewPage = {
  currentPage: number;
  lastPage: number;
  firstPage: number;
};

export const INITIAL_STATE_PDF_VIEW = {
  currentPage: 0,
  lastPage: 0,
  firstPage: 0,
};

type FilePdf =
  | (File & {
      url: string | ArrayBuffer | null;
    })
  | undefined;

export type CustomHookPdfView = Partial<PdfViewHook> & {
  init: (file: File) => void;
  page: PdfViewPage;
  handlePage: (name: string, value: number) => void;
};

export const usePdfView = (): CustomHookPdfView => {
  const [page, setPage] = useState<PdfViewPage>(INITIAL_STATE_PDF_VIEW);
  const [pdf, setPdf] = useState<FilePdf>(undefined);

  const handleNavigation = useCallback(
    (isNextPage?: boolean) => () => {
      setPage({
        ...page,
        currentPage: isNextPage ? page.currentPage++ : page.currentPage--,
      });
    },
    [page]
  );

  const handlePage = (name: string, value: any) =>
    setPage({ ...page, [name]: value });

  const init = useCallback((file: File) => {
    if (file.type === 'application/pdf') {
      const reader = new FileReader();

      reader.onload = () => {
        setPdf({ ...file, url: reader.result });
      };

      reader.readAsDataURL(file);
      return;
    }

    throw new Error("this file wasn't a pdf file");
  }, []);

  const memo = useMemo<PdfViewHook>(
    () => ({
      view: (
        <>
          {pdf?.url && <a href={pdf.url as string}>pdf link</a>}
          {pdf?.url && (
            <embed
              src={`${pdf.url}#page=${page.currentPage}`}
              width={1000}
              height={1000}
            />
          )}
        </>
      ),
      nextPage: handleNavigation(true),
      prevPage: handleNavigation(),
      goTo: () => {},
    }),
    [pdf, page, handleNavigation]
  );

  return { init, ...memo, page, handlePage };
};
