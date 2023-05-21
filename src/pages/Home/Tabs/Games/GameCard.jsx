import { Rating } from '@smastrom/react-rating'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const GameCard = ({Game}) => {

    const { Photo, Price, ProductName, rating, _id
    } = Game;

    const handleDetails =() => {
        
        toast("You have to log in first to view details!");
    }

    return (
        <div className="card w-[95%] lg:w-96  bg-base-100 shadow-xl">
        <figure><img className="h-[384px] w-full" src={Photo} alt="Shoes" /></figure>
        <div className="card-body relative">
            <h2 className="card-title">{ProductName}</h2>
            <p><span>Price:</span>{Price}</p>
            <p><span>Rating:</span>
                <span className='flex justify-center items-start gap-2 absolute left-[90px] top-[100px]'>
                    {rating} <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                </span>
            </p>
            <div className="card-actions justify-end">
                <Link to={`/toy/${_id}`}>
                    <button  onClick={handleDetails} className="btn btn-primary">Details</button>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default GameCard;