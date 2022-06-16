import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import Tooltip from "react-simple-tooltip"

const AddCart = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        let getCardItems = JSON.parse(localStorage.getItem('selectedItems'))
        setData(getCardItems);

    }, [])

    const handleDelete = (index) => {
        let deleted = data.filter(e => data.indexOf(e) !== index);
        setData(deleted);
        localStorage.setItem('selectedItems', JSON.stringify(deleted))
    }

    return (
        <>
            <section class="h-100 h-custom bg-light-grey" >
                <div class="container py-5 mb-3 ">
                    <div class="row d-flex justify-content-center align-items-center h-100 mx-md-5">
                        <div class="col">
                            <div class="card rounded-corners-2">
                                <div class="card-body p-4">

                                    <div class="row">

                                        <div class="col-lg-8 overflow-modified">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h5 class="mb-3"><i
                                                    class="fas fa-long-arrow-alt-left me-2"></i>Add Cart</h5>
                                                <p class="mb-0">You have {data && data.length} items in your cart</p>
                                            </div>
                                            <hr />
                                            {
                                                data && data.length ?
                                                    <>
                                                        {
                                                            data.map((e, index) => {
                                                                return (
                                                                    <div class="card mb-3">
                                                                        <div class="card-body">
                                                                            <div class="row text-center">
                                                                                
                                                                                        <div className="col">
                                                                                            <img src={e.image} width="75" alt="product image" />
                                                                                        </div>
                                                                                        <div className="col">
                                                                                            <h5 className="text-capitalize">{e.productName}</h5>
                                                                                        </div>
                                                                                        <div className="col">
                                                                                            <h5 class="mb-0"> ${e.price}</h5>
                                                                                        </div>
                                                                                        <div className="col">
                                                                                            <Tooltip content="Delete" padding="5">
                                                                                                <AiFillDelete className="text-danger h4 deleteIcon" title="delete" onClick={() => handleDelete(index)} />
                                                                                            </Tooltip>
                                                                                        </div>
                                                                                 
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </>
                                                    : <div className="text-center">
                                                        No products added yet .
                                                    </div>
                                            }



                                        </div>
                                        <div class="col-lg-4">
                                            <div class="card bg-light-grey  rounded-3">
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between align-items-center mb-4">
                                                        <h5 class="mb-0">Card details</h5>

                                                    </div>
                                                    <p class="small">Card type</p>
                                                    <form class="mt-1">
                                                        <div class="form-outline form-white mb-3">
                                                            <input type="text" id="typeName" class="form-control"
                                                                placeholder="Cardholder's Name" />
                                                        </div>

                                                        <div class="form-outline form-white mb-1">
                                                            <input type="text" id="typeText" class="form-control "
                                                                placeholder="Card Number" minlength="19" maxlength="19" />
                                                        </div>
                                                    </form>

                                                    <hr class="my-4" />

                                                    <div class="d-flex justify-content-between mb-2">
                                                        <p class="mb-2">Subtotal</p>
                                                        <p class="mb-2">$4798.00</p>
                                                    </div>

                                                    <div class="d-flex justify-content-between mb-2">
                                                        <p class="mb-2">Shipping</p>
                                                        <p class="mb-2">$20.00</p>
                                                    </div>

                                                    <div class="d-flex justify-content-between mb-5">
                                                        <p class="mb-2">Total(Incl. taxes)</p>
                                                        <p class="mb-2">$4818.00</p>
                                                    </div>

                                                    <button type="button" class="btn btn-primary btn-block btn-lg mb-3">
                                                        <div class="d-flex justify-content-between">
                                                            <span></span>
                                                            <span>Checkout <i class="fas fa-long-arrow-alt-right ms-2"></i></span>
                                                        </div>
                                                    </button>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AddCart