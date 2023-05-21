import { useEffect, useState } from "react";
import GameCard from "./GameCard";


const Games = () => {

    const [myGames, setMyGames] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/eliteGears?Select=Games')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setMyGames(data)
        })
    },[])

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-2">
                {
                    myGames.map(Game => <GameCard
                    key={console._id}
                    Game={Game}
                    ></GameCard>
                   )
                }
            </div>
        </div>
    );
};

export default Games;