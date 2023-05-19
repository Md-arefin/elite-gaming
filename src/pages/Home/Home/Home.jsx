import Carousal from "../Carousal/Carousal";


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
            <div className="my-10 text-center font-semibold text-4xl px-3">
                <h3>Introducing the Ultimate Console Experience</h3>
            </div>
            <Carousal></Carousal>
        </div>
    );
};

export default Home;