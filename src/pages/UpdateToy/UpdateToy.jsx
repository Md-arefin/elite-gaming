import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateToy = () => {

    const toy = useLoaderData();

    const { Price, description, Quantity, _id } = toy

    const handleEdit = event =>{
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updateToy = {
         
            Price: price,
            Quantity: quantity,
            description: description
        }

        console.log(updateToy );

        fetch(`https://video-games-world-server-md-arefin.vercel.app/eliteGear/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Success!',
                        'Your file has been updated.',
                        'success'
                    )
                }
            })
    }


    return (

        <div className="card mt-10 w-full border-4 shadow-2xl bg-base-100">
            <div className="card-body lg:w-full">
                <h1 className="text-lg lg:text-3xl font-bold text-center">Please Update Your Product </h1>

                <form onSubmit={handleEdit}>
                    {/* Price */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number"
                            name="price"
                            defaultValue={Price}
                            placeholder="Enter product price" className="input input-bordered" required />
                    </div>


                    {/* Available Quantity */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Available Quantity</span>
                        </label>
                        <input type="text"
                            name='quantity'
                            defaultValue={Quantity}
                            placeholder="Product quantity" className="input input-bordered" required />
                    </div>

                    {/* Description */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text"
                            name='description'
                            defaultValue={description}
                            placeholder="Product description" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Update my toy" />
                    </div>
                </form>
            </div>
        </div>


    );
};

export default UpdateToy;