import { useEffect, useState } from "react";
import ControllerCard from "./ControllerCard";


const Controller = () => {

    const [myController, setMyController] = useState([])

    useEffect(()=>{
       fetch('https://video-games-world-server-md-arefin.vercel.app/eliteGears?Select=Controller')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setMyController(data)
        })
    },[])


    return (
        <div>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-2">
                {
                   myController.map(controller => <ControllerCard
                    key={console._id}
                    controller={controller}
                    ></ControllerCard>
                    )
                }
            </div>
        </div>
    );
};

export default Controller;