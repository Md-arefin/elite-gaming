import { useEffect, useState } from "react";
import AccessoryCard from "./AccessoryCard";

const Accessory = () => {

    const [myAccessory, setMyAccessory] = useState([])

    useEffect(()=>{
       fetch('https://video-games-world-server-md-arefin.vercel.app/eliteGears?Select=Gaming%20Accessory')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setMyAccessory(data)
        })
    },[])

    return (
        <div>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-2">
                {
                    myAccessory.map(accessory => <AccessoryCard
                    key={console._id}
                    accessory={accessory}
                   ></AccessoryCard>
                    )
                }
            </div>
        </div>
    );
};

export default Accessory;