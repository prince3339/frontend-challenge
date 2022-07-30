import { createContext, useEffect, useState } from 'react';

// types
import type { Theme } from 'types/theme';

interface Context {
  theme: Theme;
  setTheme: (theme: Theme)=> void;
}

interface Props {
  children: React.ReactElement;
}

export const AppContext = createContext<Context | null>(null);

const ContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>("DARK");
  const setAppTheme = (theme: Theme)=> {
    setTheme(theme);
  }
  
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
