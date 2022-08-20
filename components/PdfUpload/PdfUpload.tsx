import { FC, ChangeEvent } from 'react';
import cn from 'classnames';
import { usePdfViewContext } from '@woo-pdf/contexts';
import { Pdf } from '../Pdf';

import s from './PdfUpload.module.css';

interface PdfUploadProps {
  // props from components
}

// warning => advised for delete

const PdfUpload: FC<PdfUploadProps> = (props) => {
  const { init } = usePdfViewContext();

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    console.log('handleChange');

    if (!!files && files.length > 0) {
      const file = files[0];
      init(file);
    }
  };

  return (
    <div className={cn(s.container)}>
      <input
        type="file"
        style={{
          width: 100,
          height: 40,
          backgroundColor: '#09f',
          padding: 5,
          color: 'white',
        }}
        onChange={handleChangeFile}
      />

      <Pdf />
    </div>
  );
};

export default PdfUpload;
export type { PdfUploadProps };
