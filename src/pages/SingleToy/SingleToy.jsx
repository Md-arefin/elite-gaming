import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const SingleToy = () => {

    const singleToy = useLoaderData();

    const { Photo, Price, ProductName, Quantity, rating, Select, SellerEmail, SellerName, description } = singleToy;

    console.log(singleToy, "single")

    return (
        <div>
            <div className="card card-compact w-full bg-white text-black shadow-xl">
                <figure>
                    <img className="w-1/2" src={Photo} alt="Shoes" />
                </figure>
                <div className="card-body space-y-5 ">
                    <h2 className=" text-center font-semibold text-2xl lg:text-7xl">{ProductName}</h2>
                    <div className="space-y-5">
                        <p><span className="lg:text-3xl font-semibold px-5">Seller Name:</span> <span className="lg:text-2xl">{SellerName}</span></p>
                        <p><span className="lg:text-3xl font-semibold px-5">Seller Email:</span> <span className="lg:text-2xl">{SellerEmail}</span></p>
                        <p><span className="lg:text-3xl font-semibold px-5">Sub-category:</span> <span className="lg:text-2xl">{Select}</span></p>
                        <p><span className="lg:text-3xl font-semibold px-5">Available Quantity:</span> <span className="lg:text-2xl">{Quantity}</span></p>
                        <p><span className="lg:text-3xl font-semibold px-5">Price:</span> <span className="lg:text-2xl"><span className="font-serif font-semibold px-1">$</span>{Price}</span></p>
                        <p className="flex items-center gap-2"><span className="lg:text-3xl font-semibold   px-5">Rating:</span> <span className="lg:text-2xl">{rating}</span> <Rating style={{ maxWidth: 100 }} value={rating} readOnly /> 
                        </p>
                        <p><span className="lg:text-3xl font-semibold   px-5">Description:</span> <span className="lg:text-2xl">{description}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;