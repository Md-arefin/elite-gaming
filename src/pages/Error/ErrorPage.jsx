import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const ErrorPage = () => {
    useTitle('Error')
    return (
        <div className='relative my-10'>
            <Player
                autoplay
                loop
                src="https://assets4.lottiefiles.com/packages/lf20_sfscasda.json"
                className='lg:w-full lg:h-[650px] md:w-3/4 md:h-[550px]'
            >
                <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
            <div className=" mt-10  btn btn-primary absolute lg:left-[350px] md:left-[350px] mx-[90px] md:mx-0 lg:mx-0">
                <Link to='/' >Back to Home</Link>
            </div>

        </div>
    );
};

export default ErrorPage;