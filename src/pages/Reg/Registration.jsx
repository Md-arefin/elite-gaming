import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Registration = () => {
    const [error, setError] = useState("");
    const { createUser,signInGoogle, updateUserProfile } = useContext(AuthContext);

    const handleRegistration = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;

        console.log(email, password,name, photo)

        // pass reg

        setError('')

        if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
            setError("your password should be minimum 8 characters, at least 1 letter and 1 number and 1 special character");
            return;
        }

        createUser(email, password)
        .then(result =>{
            const newUser = result.user;
            updateUserProfile({
                displayName: name, photoURL: photo
            })
            console.log( newUser);
        })
        .catch( error => console.log(error))
    }

    const handleGoogle = () => {
        signInGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
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
                        src="https://assets6.lottiefiles.com/packages/lf20_UW8DlCRljO.json"
                        className='lg:w-[75%]'
                    >
                        <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </div>

                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-gray-200 lg:mr-10">
                    <div className="card-body">

                        <h5 className='text-3xl font-semibold text-center'>Please Registration</h5>
                        <form onSubmit={handleRegistration}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter your name" className="input input-bordered"
                                    name='name' required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Enter your email" className="input input-bordered"
                                    name='email' required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                            </div>

                            <p className='text-xs mt-5 pl-1'>Show Password</p>
                            <p className='text-red-800 font-semibold'>{error}</p>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign up" />

                                <button
                                onClick={handleGoogle}
                                className="btn my-5">
                                    <img className='w-8 mx-5' src="https://i.ibb.co/XZxLpRs/png-transparent-google-logo-google-text-trademark-logo-removebg-preview.png" alt="" />
                                    Signup with
                                    Google
                                </button>
                            </div>
                        </form>

                        <p className='text-center mt-3'>Already have an account? 
                            <Link className='mx-1' to='/login'>Please Login</Link>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;