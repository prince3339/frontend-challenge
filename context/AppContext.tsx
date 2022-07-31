import { createContext, useEffect, useState } from 'react';

// types
import type { Theme } from 'types/theme';

export interface Context {
  theme: Theme;
  setTheme: (theme: Theme)=> void;
}

interface Props {
  children: React.ReactElement;
}

export const AppContext = createContext<Context | null>(null);

const ContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>("DARK");
  const setAppTheme = ()=> {
    setTheme(theme === 'DARK' ? 'LIGHT': 'DARK');
    if (theme === 'DARK') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add('dark');
    }
  }

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      // setTheme("DARK");
    } else {
      document.documentElement.classList.remove('dark');
      // setTheme("LIGHT");
    }
  }, []);
  
  return (
    <AppContext.Provider value={{
      theme,
      setTheme: setAppTheme
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
