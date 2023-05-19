import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Loader = () => {
    return (

        <div>
            <Player
                autoplay
                loop
                src="https://assets10.lottiefiles.com/packages/lf20_kxsd2ytq.json"
                className='lg:w-[75%]'
            >
                <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
        </div>

    );
};

export default Loader;