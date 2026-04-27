import { useLocation } from "react-router";
import { useEffect } from "react";

export function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) window.scrollTo(0, 0);
    }, [pathname, hash]);
    
    return null;
}