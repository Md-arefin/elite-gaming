

const AddToy = () => {
    return (
        <div>
            <div className="hero min-h-screen  ">
                <div className="hero-content flex-col">
                    <div className="text-center mb-10">

                        <h1 className="lg:text-5xl text-2xl font-bold">Add your Toys in our arsenal</h1>
                    </div>
                    <div className="card  w-full border-4 shadow-2xl bg-base-100">
                        <div className="card-body lg:w-[800px]">
                            <h1 className="text-3xl font-bold text-center">Please Add Your Toy Carefully!</h1>
                            <form>
                                {/* Product name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <input type="text" placeholder="Product name"
                                        name='productName'
                                        className="input input-bordered" />
                                </div>
                                {/* photo url */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Photo</span>
                                    </label>
                                    <input type="text"
                                        name='photo' placeholder="Enter product photo url" className="input input-bordered" />

                                </div>
                                {/* Seller Name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter your  name"
                                        name='sellerName'
                                        className="input input-bordered" />
                                </div>
                                {/* seller email */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input type="email"
                                        name="sellerEmail"
                                        placeholder="Enter your email" className="input input-bordered" />
                                </div>
                                {/* Sub-category */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Sub-category</span>
                                    </label>
                                    <select className="select input-bordered w-full">
                                        <option disabled selected>Pick your Product Category</option>
                                        <option>Console</option>
                                        <option>Controller</option>
                                        <option>Games</option>
                                        <option>Gaming Accessory</option>
                                    </select>
                                </div>
                                {/* Price */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number"
                                        name="price"
                                        placeholder="Enter product price" className="input input-bordered" />
                                </div>
                                {/* Rating */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Ratings</span>
                                    </label>
                                    <input type="number"
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
                                        placeholder="Product quantity" className="input input-bordered" />
                                </div>
                                {/* Description */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input type="text"
                                        name='description'
                                        placeholder="Product description" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Add</button>
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