import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ToyTable = ({ toy }) => {

    // console.log(toy)

    const { SellerName, ProductName, Photo,Price, Select, Quantity, _id, email } = toy;



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
                           
                            className="btn"><FaArrowRight/></button>
                    </Link>

                </td>
            </tr>

        </>
    );
};

export default ToyTable;