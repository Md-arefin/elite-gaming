

const Gallery = () => {
    return (
        <div className="my-10">
            <h3 className="text-center text-lg lg:text-6xl font-bold">Explore a World of Elite Gaming Gear</h3>
            <div className="grid  grid-cols-2 lg:grid-cols-4 md:grid-cols-3 lg:gap-5 my-10" >
                <div className="h-[400px]">
                    <div>
                        <img className="lg:w-[220px] h-[270px] rounded-lg" src="https://i.ibb.co/wY575CD/Valhala-removebg-preview.png" alt="" />
                    </div>
                    <h2 className=" text-lg"> Assassins Creed Valhalla</h2>
                </div>
                <div className="h-[400px]">
                    <div>
                        <img className="w-[250px] h-[290px] rounded-lg" src="https://i.ibb.co/bLP0xtn/uncharted-removebg-preview.png" alt="" />
                    </div>
                    <h2 className=" text-lg">UNCHARTED: Legacy of Thieves Collection</h2>
                </div>

                <div className="h-[400px]">
                    <div>
                        <img className=" rounded-lg" src="https://i.ibb.co/MZZ91Pz/ragnarok-removebg-preview.png" alt="" />
                    </div>
                    <h2 className=" text-lg">God of War Ragnarök</h2>
                </div>
                <div className="h-[400px]">
                    <div>
                        <img className=" rounded-lg" src="https://i.ibb.co/WnsGfcs/download-removebg-preview.png" alt="" />
                    </div>
                    <h2 className=" text-lg">Call of Duty Black Ops Cold War</h2>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1">
                <div>
                    <img className="" src="https://i.ibb.co/kH2W7wk/maxresdefault-2.webp" alt="" />
                </div>
                <div>
                    <img className="lg:h-[333px]" src="https://i.ibb.co/syFJ5SX/86d1c617-8be4-4b3a-990d-46b9fb97fc7e.jpg" alt="" />
                </div>
                <div>
                    <img className="" src="https://i.ibb.co/7j15S75/nik-b-bn-M85-Z35o-unsplash.jpg" alt="" />
                </div>
                <div>
                   <div>
                   <img className="lg:h-[445px]" src="https://i.ibb.co/bKTtHM6/fabian-albert-e-PJUCF48vgo-unsplash.jpg" alt="" />
                   </div>
                   <div>
                   <img className="lg:h-[440px]" src="https://i.ibb.co/qFmWZbT/xbox-series-x-vs-series-s-main.webp" alt="" />
                   </div>
                </div>
                <div>
                    <img className="" src="https://i.ibb.co/cth5tTP/portrait-woman-with-virtual-reality-headset.jpg" alt="" />
                </div>
                <div>
                    <img className="lg:h-[440px]" src="https://i.ibb.co/0J81C0f/gamers-having-fun-while-playing-videogames.jpg" alt="" />
                </div>
                <div>
                    <img className="" src="https://i.ibb.co/3TBvYHx/louis-philippe-poitras-Oit-YIb-HSy-WU-unsplash.jpg" alt="" />
                </div>
                <div>
                    <img className="lg:h-[790px] lg:w-[600px]" src="https://i.ibb.co/B4Pzxxh/nikita-kachanovsky-FJFPu-E1-MAOM-unsplash.jpg" alt="" />
                </div>

            </div>

        </div>
    );
};

export default Gallery;