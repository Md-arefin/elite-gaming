import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    useTitle('Login')

    const [showPassword, setShowPassword] = useState(false);

    const [loginError, setLoginError] = useState("");

    const { signInUser, signInGoogle } = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.form?.pathname || '/';

    const handleLogin = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        // pass Validation start

        setLoginError('')

        if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
            setLoginError("your password should be minimum 8 characters, at least 1 letter and 1 number and 1 special character");
            return;
        }

        signInUser(email, password)
            .then(result => {
                const userLogged = result.user;
                Swal.fire(
                    'Login Successful!',
                    'Good to see you',
                    'success'
                )
                navigate(from, { replace: true });
                console.log(userLogged);
            })
            .catch(error => {
                console.log(error);
                setLoginError(error.message)
            })
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleGoogle = () => {
        signInGoogle()
            .then(result => {
                const userLogged = result.user;
                navigate(from, { replace: true });
                Swal.fire(
                    'Login Successful!',
                    'Good to see you',
                    'success'
                )
                console.log(userLogged);
            })
            .catch(error => {
                console.log(error.message)
            })
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
                                <input  type={showPassword ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <p onClick={togglePasswordVisibility} className='text-xs mt-5 pl-1 cursor-pointer'>{showPassword ? 'Hide' : 'Show'} Password</p>

                            <p className='text-red-800 font-semibold'>{loginError}</p>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />

                                <button
                                    onClick={handleGoogle}
                                    className="btn my-5">
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