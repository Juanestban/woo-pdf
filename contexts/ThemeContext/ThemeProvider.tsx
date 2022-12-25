import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from 'react';
import { storage } from 'config/keystorage';
import { noop } from 'utils/mock';

type Theme = 'light' | 'dark';

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'dark',
  toggleTheme: noop,
});

const { local: lStorage } = storage;

function ThemeProvider({ children }: ThemeProviderProps) {
  const isDarkModeSO = window.matchMedia('(prefers-color-scheme:dark)').matches;
  const [theme, setTheme] = useState<Theme>(() => {
    const item = window.localStorage.getItem(lStorage.theme);

    if (item === null) return isDarkModeSO ? 'dark' : 'light';

    return item !== 'dark' ? 'light' : 'dark';
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      window.localStorage.setItem(lStorage.theme, newTheme);

      return newTheme;
    });
  };

  useEffect(() => {
    const body = window.document.querySelector('body');

    if (body) {
      body.dataset.theme = theme;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

const useTheme = () => useContext(ThemeContext);

export { useTheme };
export type { Theme };
export default ThemeProvider;
