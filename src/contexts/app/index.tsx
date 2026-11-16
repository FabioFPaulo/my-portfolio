import {useCallback, useState} from "react";
import {AnimatePresence} from "framer-motion";
import type {IProviderProps} from "./types";
import {AppContext} from "./context";
import LoadingComponent from "@/components/loading";
import NavbarComponent from "@/components/navbar";

export {AppContext};

export default function AppProvider({children, totalImages}: IProviderProps) {
    // counter
    const [imagesCounter, setImagesCounter] = useState<number>(0);
    const incrementImages = useCallback(() => {
        setImagesCounter((e) => e + 1);
    }, []);

    return (
        <AppContext.Provider
            value={{incrementImages, isLoading: imagesCounter < totalImages}}
        >
            <AnimatePresence>
                {imagesCounter < totalImages && <LoadingComponent key="preloader" />}
            </AnimatePresence>
            <NavbarComponent/>
            {children}
        </AppContext.Provider>
    );
}
