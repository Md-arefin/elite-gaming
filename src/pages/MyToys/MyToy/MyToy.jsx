import { Link } from "react-router-dom";
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";

const MyToy = ({ toy, handleDelete }) => {

    const { Price, Photo, ProductName, Quantity, Select, email, SellerName, _id } = toy
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
                    <Link to=''>
                        <button
                            className="btn"><FaRegEdit /></button>
                    </Link>

                </td>
                <td>
                    <Link to=''>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn"><FaTrashAlt /></button>
                    </Link>

                </td>
            </tr>

        </>
    );
};

export default MyToy;