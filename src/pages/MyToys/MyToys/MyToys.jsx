import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useTitle from "../../../Hooks/useTitle";
import { AuthContext } from "../../../Provider/AuthProvider";
import MyToy from "../MyToy/MyToy";


const MyToys = () => {

    useTitle('MyToys')

    const { user } = useContext(AuthContext);
    const [myToys, SetMyToys] = useState([]);

    const url = `https://video-games-world-server-md-arefin.vercel.app/eliteGames?email=${user?.email}`;

    console.log(myToys)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                SetMyToys(data);
            })
    }, []);

    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://video-games-world-server-md-arefin.vercel.app/eliteGear/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const remaining = myToys.filter(toys => toys._id !== id);
                            SetMyToys(remaining);
                        }
                    })


            }
        })
    }

    return (
        <div>

            <div>
                <h1 className="text-2xl font-semibold text-center my-10">My Products</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>

                        <tr className="text-center">
                            <th>Picture</th>
                            <th>Product Name</th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Sub-category</th>
                            <th>Available Quantity</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>

                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            myToys.map(toy =>
                                <MyToy key={toy._id}
                                    toy={toy}
                                    handleDelete={handleDelete}
                                ></MyToy>)
                        }

                        {/* row 2 */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;