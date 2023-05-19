import Carousal from "../Carousal/Carousal";
import Countdown from "../Countdown/Countdown";
import Gallery from "../Gallery/Gallery";


const Home = () => {
    return (
        <div className="my-10">
            <div className="relative">
                <img className="rounded-lg" src="https://i.ibb.co/3CThmr5/wepik-export-20230519125245ml-Uo.png" alt="" />
                <div className="absolute top-10 md:top-[130px] lg:top-[250px] w-[70%] ml-2 md:ml-10 text-black md:text-5xl lg:text-6xl text-lg font-semibold">
                    <h2 >Upgrade Your Arsenal</h2> <h2 className="lg:my-8 md:my-6 my-2">with High-Performance</h2>
                    <h2>Gaming Gear</h2>
                </div>
            </div>
            <div className="my-10 text-center font-semibold text-4xl ">
                <h3>Unleash the Power: Discover the Revolutionize Gaming Experience</h3>
            </div>
            <Carousal></Carousal>
            <div className="text-center">
                <Countdown></Countdown>
            </div>
            <Gallery></Gallery>
           
        </div>
    );
};

export default Home;