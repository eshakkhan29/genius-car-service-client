import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {
    const [user]= useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const getOrders = async () => {
            const email = user?.email
            const url = `https://polar-gorge-98194.herokuapp.com/bookService?email=${email}`;
            const { data } = await axios.get(url);
            setOrders(data);
        }
        getOrders();

    }, [user])

    return (
        <div>
            <h1>orders</h1>
            <h2>orders = : {orders.length}</h2>
        </div>
    );
};

export default Orders;