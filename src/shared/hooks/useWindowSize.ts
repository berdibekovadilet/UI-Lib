import {useEffect, useState} from 'react';

type WindowSize = {
    innerWidth: number | null;
    innerHeight: number | null;
};

const useWindowSize = (): WindowSize => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        innerWidth: null,
        innerHeight: null,
    })

    function handleResize() {
        setWindowSize({
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
        })
    }

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return windowSize;
}

export default useWindowSize