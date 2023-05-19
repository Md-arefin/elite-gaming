import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const { signInUser } = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        // pass reg

        signInUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch( error => console.log(error))
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

                        <h5 className='text-3xl font-semibold text-center'>Please Login</h5>
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
                            </div>
                            <p className='text-xs mt-5 pl-1'>Show Password</p>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />

                                <button className="btn my-5">
                                    <img className='w-8 mx-5' src="https://i.ibb.co/XZxLpRs/png-transparent-google-logo-google-text-trademark-logo-removebg-preview.png" alt="" />
                                    Login with
                                    Google</button>
                            </div>
                        </form>

                        <p className='text-center mt-3'>New to Elite Gamers Gear?
                            <Link className='mx-1' to='/registration'> Please Registration</Link>
                        </p>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;