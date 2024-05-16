import { useEffect, useState } from "react"

export function useLocalStorage<T>(key : string , initialValue : T){
    const [ value , setValue] = useState<T>(() => {
        let LocalCart = localStorage.getItem('CartItems')
        if(LocalCart != null)
            return JSON.parse(LocalCart)
        else{
            return initialValue
        }
    })
    useEffect(()=>{
        localStorage.setItem(key , JSON.stringify(value))
    },[key , value]);

    return [value , setValue] as [typeof value , typeof setValue]
}
