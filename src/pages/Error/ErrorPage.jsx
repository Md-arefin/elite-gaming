import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='relative my-10'>
            <Player
                autoplay
                loop
                src="https://assets6.lottiefiles.com/packages/lf20_mm9kznkc.json"
                className='lg:w-[1000px] lg:h-[600px] md:w-3/4 md:h-[550px]'
            >
                <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
            <div className=" mt-10  btn btn-primary absolute lg:left-[780px] md:left-[350px] mx-[90px] md:mx-0">
                <Link to='/' >Back to Home</Link>
            </div>

        </div>
    );
};

export default ErrorPage;