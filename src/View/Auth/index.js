import React from 'react';
import Login from './Login';
import Register from './Register';

const Authentication = () => {

    return (
        <>
            <section className='container-fluid fullHeight bg-theme-color'>
                <div className='row d-flex justify-content-center align-items-center h-100' >
                    <div className='col-md-4 bg-white py-4 px-5 rounded-corners'>
                        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="tab-login" data-bs-toggle="pill" href="#pills-login" role="tab"
                                    aria-controls="pills-login" aria-selected="true">Login</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="tab-register" data-bs-toggle="pill" href="#pills-register" role="tab"
                                    aria-controls="pills-register" aria-selected="false">Register</a>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                               <Login/>

                            </div>
                            <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                               <Register/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Authentication