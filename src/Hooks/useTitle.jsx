import { useEffect } from "react"

const useTitle = title =>{
    useEffect( () =>{
        document.title = `${title} | Elite Gamers Gear`
    } , [title])
}

export default useTitle;