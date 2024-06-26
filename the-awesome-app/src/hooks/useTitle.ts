import { useEffect } from "react";

export function useTitle(title: string){


    useEffect(() => {

        const currentTitle = document.title;
        document.title = title;
        return () => {
            document.title = currentTitle;
        }

    }, [])

}