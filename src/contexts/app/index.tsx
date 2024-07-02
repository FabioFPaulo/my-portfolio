import { createContext, useCallback, useState } from "react";
import { IContext, IProviderProps } from "./types";
import LoadingComponent from "@/components/loading";
import NavbarComponent from "@/components/navbar";

export const AppContext = createContext<IContext>({} as IContext);

export default function AppProvider({ children, totalImages }: IProviderProps) {
  // counter
  const [imagesCounter, setImagesCounter] = useState<number>(0);
  const incrementImages = useCallback(() => {
    setImagesCounter((e) => e + 1);
  }, []);

  return (
    <AppContext.Provider
      value={{ incrementImages, isLoading: imagesCounter < totalImages }}
    >
      {imagesCounter < totalImages && <LoadingComponent />}
      <NavbarComponent />
      {children}
    </AppContext.Provider>
  );
}
