import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const { img, name, description, price } = service;

    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <h2>Welcome to detail: {name}</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
                <div className="w-25 m-auto mt-5">
                    <img className='w-100' src={img} alt="" />
                    <h2>{name}</h2>
                    <p>Price: {price}</p>
                    <p><small>{description}</small></p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;