import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import nodata from '../../Assests/nodata.png';
import { AiFillDelete } from "react-icons/ai";
import Tooltip from "react-simple-tooltip";

const ProductList = () => {

    const [Data, setData] = useState([])

    useEffect(() => {
        let getstoredProduct = JSON.parse(localStorage.getItem('storedProduct'));
        setData(getstoredProduct)
    }, [])

    const handleDelete = (i) => {
        let deletedData = Data.filter((e) => (Data.indexOf(e)) !== i)
        setData(deletedData);
        localStorage.setItem('storedProduct', JSON.stringify(deletedData));
        toast.success("Product deleted successfully.")
    }
    return (
        <>
            <section className='container min-height'>
                <div className='row d-flex justify-content-center mt-5'>
                    <div className='col-md-10 '>
                        <div className='card'>
                            <div className='card-header bg-color-nb'>
                                <h5 className='text-white'>Product List</h5>
                            </div>
                            <div className='card-body'>
                                <table className="table table-striped table-hover">

                                    <thead>
                                        <tr>
                                            <th scope="col">S.N</th>
                                            <th scope="col">Product Name</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Price $</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Data && Data.length ?
                                                <>
                                                    {
                                                        Data.map((e, index) => {
                                                            return (
                                                                <>
                                                                    <tr>
                                                                        <td>
                                                                            {index + 1}
                                                                        </td>
                                                                        <td>
                                                                            {e.productName}
                                                                        </td>
                                                                        <td>
                                                                            {e.quantity}
                                                                        </td>
                                                                        <td>
                                                                            {e.description}
                                                                        </td>
                                                                        <td>
                                                                            {e.price}
                                                                        </td>
                                                                        <td>
                                                                            <Tooltip content="Delete" padding="5">

                                                                                <AiFillDelete className="text-danger h4 deleteIcon" title="delete" onClick={() => handleDelete(index)} />
                                                                            </Tooltip>

                                                                        </td>
                                                                    </tr>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </>
                                                :
                                                <tr>
                                                    <td colSpan={6} className="text-center bg-white-custom">
                                                        <img src={nodata} className="no-data-img" />
                                                    </td>
                                                </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer
            />
        </>
    )
}
export default ProductList