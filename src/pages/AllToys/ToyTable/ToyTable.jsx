import { Link } from "react-router-dom";


const ToyTable = ({ toy }) => {

    console.log(toy)

    const { SellerName, ProductName, Price, Select, Quantity, _id } = toy;

    const handleDetails = id => {
        console.log(id)
    }

    return (
        <>
            {/* row 1 */}
            <tr className="hover">

                <td>{ProductName}</td>
                <td>{SellerName}</td>
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