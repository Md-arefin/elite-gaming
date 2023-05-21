import { useEffect, useState } from "react";
import ConsoleCard from "./ConsoleCard";


const Console = () => {

    const [myConsole, setMyConsole] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/eliteGears?Select=Console')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setMyConsole(data)
        })
    },[])


    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-2">
                {
                    myConsole.map(console => <ConsoleCard
                    key={console._id}
                    console={console}
                    ></ConsoleCard>)
                }
            </div>
        </div>
    );
};

export default Console;