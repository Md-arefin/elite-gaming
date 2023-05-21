import Swal from 'sweetalert2'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';

const AddToy = () => {

    useTitle('AddToy')

    const {user} = useContext(AuthContext);

    console.log(user)

    const handleToy = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const photo = form.photo.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const select = form.select.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const addToy = {
            ProductName: productName,
            Photo: photo,
            Price: price,
            Select: select,
            email: sellerEmail,
            SellerName: sellerName,
            rating: rating,
            Quantity: quantity,
            description: description
        }

        // console.log(addToy)

        //  send toys to server

       fetch('https://video-games-world-server-md-arefin.vercel.app/eliteGear', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Mission Accomplished',
                        text: 'Your product successfully add in our Database',
                    })
                }
            })

    }
    return (
        <div>
            <div className="hero min-h-screen  ">
                <div className="hero-content flex-col">
                    <div className="text-center mb-10">

                        <h1 className="lg:text-5xl text-2xl font-bold">Add your weapon in our arsenal</h1>
                        <div className='mt-5'>
                            <Player
                                autoplay
                                loop
                                src="https://assets3.lottiefiles.com/packages/lf20_zvkr2yw6.json"
                                className='w-[60%] '
                            >
                                <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
                            </Player>
                        </div>
                    </div>
                    <div className="card  w-full border-4 shadow-2xl bg-base-100">
                        <div className="card-body lg:w-full">
                            <h1 className="text-lg lg:text-3xl font-bold text-center">Please Add Your Product Carefully!</h1>

                            <form onSubmit={handleToy}>

                                {/* Product name */}

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <input type="text" placeholder="Product name"
                                        name='productName'
                                        className="input input-bordered" required />
                                </div>

                                {/* photo url */}

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Photo</span>
                                    </label>
                                    <input type="text"
                                        name='photo' placeholder="Enter product photo url" className="input input-bordered" required />

                                </div>

                                {/* Seller Name */}

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter your  name"
                                        name='sellerName'
                                        className="input input-bordered" required />
                                </div>

                                {/* seller email */}

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input type="email"
                                        name="sellerEmail"
                                        defaultValue={user.email}
                                        placeholder="Enter your email" className="input input-bordered" required />
                                </div>

                                {/* Sub-category */}

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Sub-category</span>
                                    </label>
                                    <select name='select' className="select input-bordered w-full" required>
                                        <option disabled selected>Pick your Product Category</option>
                                        <option value='Console'>Console</option>
                                        <option value='Controller'>Controller</option>
                                        <option value='Games'>Games</option>
                                        <option value='Gaming Accessory'>Gaming Accessory</option>
                                    </select>
                                </div>

                                {/* Price */}

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text"
                                        name="price"
                                        placeholder="Enter product price" className="input input-bordered" required />
                                </div>

                                {/* Rating */}

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Ratings</span>
                                    </label>
                                    <input type="text"
                                        name='rating'
                                        placeholder="Product ratings" className="input input-bordered" />
                                </div>

                                {/* Available Quantity */}

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Available Quantity</span>
                                    </label>
                                    <input type="number"
                                        name='quantity'
                                        placeholder="Product quantity" className="input input-bordered" required />
                                </div>

                                {/* Description */}

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input type="text"
                                        name='description'
                                        placeholder="Product description" className="input input-bordered" required />
                                </div>

                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Add my toy" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToy;