import { createContext, useCallback, useState } from "react";
import { IContext, IProviderProps } from "./types";

export const AppContext = createContext<IContext>({} as IContext);
const totalImages = 6;

export default function AppProvider({ children }: IProviderProps) {
  // counter
  const [imagesCounter, setImagesCounter] = useState<number>(0);
  const incrementImages = useCallback(() => {
    setImagesCounter((e) => e + 1);
  }, []);

  return (
    <AppContext.Provider value={{ incrementImages }}>
      {children}
      {imagesCounter < totalImages && <div>loading</div>}
    </AppContext.Provider>
  );
}
