import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useLoaderData } from 'react-router-dom';
import ToyTable from '../ToyTable/ToyTable';


const AllToys = () => {

    const toys = useLoaderData();

    return (
        <div>
            <div>
                <h3 className="text-center my-10 text-2xl font-semibold text-white lg:text-3xl">Enhance Your Gaming Setup: Elite Accessories for the Ultimate Experience</h3>

                {/*  */}

                <div>
                    <Player
                        autoplay
                        loop
                        src="https://assets10.lottiefiles.com/packages/lf20_o5dfcnmb.json"
                        className='lg:w-[75%]'
                    >
                        <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </div>

            </div>
            {/*  */}

            <div>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr className='text-center'>
                                <th>Picture</th>
                                <th>Product Name</th>
                                <th>Seller Name</th>
                                <th>Seller Email</th>
                                <th>Sub-category</th>
                                <th>Available Quantity</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                toys.map(toy => <ToyTable
                                    key={toy._id}
                                    toy={toy}
                                ></ToyTable>
                                )
                            }
                            {/* row 2 */}
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
};

export default AllToys;