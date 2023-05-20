import { Player, Controls } from '@lottiefiles/react-lottie-player';

const AllToys = () => {
    return (
        <div>
            <div>
                <h3 className="text-center my-10 text-2xl font-semibold text-white lg:text-3xl">Enhance Your Gaming Setup: Elite Accessories for the Ultimate Experience</h3>

                {/*  */}

                <div>
                    <Player
                        autoplay
                        loop
                        src="https://assets10.lottiefiles.com/packages/lf20_o5dfcnmb.json"
                        className='lg:w-[75%]'
                    >
                        <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </div>

            </div>

        </div>
    );
};

export default AllToys;