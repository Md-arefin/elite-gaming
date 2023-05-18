import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
    }

    return (

        <div className="hero min-h-screen rounded bg-base-100 mx-auto">

            <div className="hero-content flex-col lg:flex-row justify-center">
                <div>
                    <Player
                        autoplay
                        loop
                        src="https://assets2.lottiefiles.com/packages/lf20_mjlh3hcy.json"
                        className='lg:w-[75%]'
                    >
                        <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </div>

                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-gray-500 lg:mr-10">
                    <div className="card-body">


                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered"
                                    name='email' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <p className='text-xs mt-5 pl-1'>Show Password</p>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    <br />
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>

                        <p>New to Elite Gamers Gear? Please
                            <Link to='/registration'> Registration</Link>
                        </p>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;