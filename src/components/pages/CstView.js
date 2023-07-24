import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import photo from "../assets/boy.png"

const CstView = () => {
    const { cstid } = useParams();

    const [cstData, setCstData] = useState({});

    const url = `https://64af87c2c60b8f941af42f32.mockapi.io/costumers/`;


    useEffect(() => {

        fetch(url + cstid).then((res) => {
            return res.json();
        }).then((resp) => {
            setCstData(resp);
        }).catch((err) => {
            console.log(err.message);
        })

        // setCstData(data.products + cstid)
        // console.log(data.products + cstid);
    }, [cstid]);

    const navigate = useNavigate;

    const handlesubmit = () => {
        navigate('/');
    }

    return (
        <>
            <div className="row col-md-12">

                <div className="row text-center">
                    <div className="col">
                        <p className="h1 fw-bold text-primary" >
                            Customer Details
                        </p>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quidem voluptas officia officiis vero quibusdam ab maiores,
                            quasi tenetur corporis sapiente veniam, ipsa expedita alias
                            amet unde eum quas laboriosam voluptate provident.
                        </p>
                    </div>
                </div>

                <div className="col-md-5 m-2 ">
                    <img className="productView-img" src={photo} alt="cstImg" />
                </div>

                <form className="form col-md-5 m-2 container " onSubmit={handlesubmit}>
                    <h1 className="mb-5"> Customer Details</h1>

                    <div className='m-3'>
                        <h3> Id : <b>{cstData.id} </b></h3>
                    </div>
                    <div className='m-3'>
                        <h2> Name : <b>{cstData.name} </b></h2>
                    </div>
                    <div className='m-3'>
                        <h2> Email  : <b>{cstData.email} </b></h2>
                    </div>
                    <div className='m-3'>
                        <h2> Phone No : <b>{cstData.phone} </b></h2>
                    </div>
                    <div className='m-3'>
                        <h2> Message : <b>{cstData.msg} </b></h2>
                    </div>


                    <div className="divbtn p-4">
                        <Link to="/service" className="btnA mt-2">Back</Link>
                    </div>

                </form>

            </div>
        </>
    )
}

export default CstView