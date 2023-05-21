import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ToyTable = ({ toy }) => {

    // console.log(toy)

    const { SellerName, ProductName, Photo,Price, Select, Quantity, _id, email } = toy;

    const handleDetails = id => {
        console.log(id)
        toast("You have to log in first to view details!");
    }

    return (
        <>
            {/* row 1 */}
            <tr className="hover text-center">
            <td>
                    <div className="avatar">
                        <div className="w-16 rounded">
                            <img src={Photo}/>
                        </div>
                    </div>
                </td>
                <td>{ProductName}</td>
                <td>{SellerName}</td>
                <td>{email}</td>
                <td>{Select}</td>
                <td>{Quantity}</td>
                <td>${Price}</td>
                <td>
                    <Link to={`/toy/${_id}`}>
                        <button
                            onClick={() => handleDetails(_id)}
                            className="btn">View Details</button>
                    </Link>

                </td>
            </tr>

        </>
    );
};

export default ToyTable;