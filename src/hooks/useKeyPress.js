import {useCallback, useEffect, useState} from "react";

export const useKeyPress = (keyTarget) => {
    const [isKeyPressed, setIsKeyPressed] = useState(false)

    const downHandler = useCallback(({key}) => {
        if(key === keyTarget){
            setIsKeyPressed(true)
        }
    }, [keyTarget])

    const upHandler = useCallback(({key}) => {
        if(key === keyTarget){
            setIsKeyPressed(false)
        }
    },[keyTarget])

    useEffect(() => {
        window.addEventListener('keydown', downHandler)
        window.addEventListener("keyup", upHandler)

        return () => {
            window.removeEventListener('keydown', downHandler)
            window.removeEventListener('keyup', upHandler)
        }
    }, [downHandler, upHandler])

    return isKeyPressed
}