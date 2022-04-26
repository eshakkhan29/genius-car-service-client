import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const serviceId = useParams();
    const [service, setService] = useState({});
    const { img, name, description, price } = service;

    //  get service user selected
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])

    return (
        <div>
            <h2>Please Checkout your booking</h2>
        </div>
    );
};

export default Checkout;