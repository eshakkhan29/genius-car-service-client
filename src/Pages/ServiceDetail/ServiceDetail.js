import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useBookService from '../../hook/useBookService';

const ServiceDetail = () => {
    const navigate = useNavigate();
    const { serviceId } = useParams();
    const [service] = useBookService(serviceId);
    const { img, name, description, price } = service;
    

    
    return (
        <div>
            <h2>Welcome to detail: {name}</h2>
            <div className='text-center'>
                <button onClick={() => navigate('/checkout')} className='btn btn-primary'>Proceed Checkout</button>
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