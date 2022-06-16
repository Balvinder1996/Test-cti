import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import img from '../../Assests/nodatapng.png';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from 'react-loader-spinner'

const Home = () => {

    const [Data, setData] = useState([]);
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        let getstoredProduct = JSON.parse(localStorage.getItem('storedProduct'));
        setData(getstoredProduct);
        setTimeout(() => {
            setLoader(false)
        }, 500);
    }, [])

    const addCart = (index) => {
        let selectedItem = Data.filter(e => Data.indexOf(e) === index);
        let getCardItems = JSON.parse(localStorage.getItem('selectedItems'));
        if (getCardItems && getCardItems.length) {

            let temp = getCardItems;
            console.log(temp, "before")
            temp.push(selectedItem[0]);
            console.log(temp, "after")
            let addingLocale = localStorage.setItem('selectedItems', JSON.stringify(temp));
            toast.success("Product added to card successfully")
        }
        else {
            let addingLocale = localStorage.setItem('selectedItems', JSON.stringify(selectedItem));
            toast.success("Product added to card successfully")
        }
    }
    return (
        <>
            {loader ?
                <div className='min-height d-flex justify-content-center align-items-center'>
                    <TailSpin color='#0d6efd' />
                </div>
                :
                <>
                    <section className={Data && Data.length ? 'bg-light-grey min-height' : 'min-height'}>
                        <div className='container py-3'>
                            <div className='row mb-5'>
                                {
                                    Data && Data.length ?
                                        <>
                                            {
                                                Data.map((e, index) => {
                                                    return (
                                                        <>
                                                            <div className='col-md-3 mt-5'>
                                                                <div className='card modified-box-shadow'>
                                                                    <div className='card-header'>
                                                                        <img src={e.image} className="card-image" />
                                                                    </div>
                                                                    <div className='card-body'>
                                                                        <h4 className='text-capitalize'> {e.productName}</h4>
                                                                        <p className='py-2'>{e.description.slice(0, 30)}...</p>
                                                                        <div className='d-flex justify-content-between align-items-center'>
                                                                            <p className='mb-0'>Price : - $ {e.price} </p>
                                                                            <button className='btn btn-primary' onClick={() => addCart(index)}>Add cart</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </>
                                                    )
                                                })
                                            }
                                        </>
                                        :
                                        <div className='text-center min-height d-flex justify-content-center align-items-center'>
                                            <div>
                                                <img src={img} alt="no data" />
                                                <div>
                                                    No Products available from admin.
                                                </div>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    </section></>
            }
        </>
    )
}
export default Home