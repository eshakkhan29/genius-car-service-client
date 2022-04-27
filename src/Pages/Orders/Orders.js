import { async } from '@firebase/util';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Orders = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const getOrders = async () => {
            const email = user?.email
            const url = `https://polar-gorge-98194.herokuapp.com/bookService?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('Token')}`
                    }
                });
                setOrders(data);
            }
            catch (error) {
                if (error.response.status === 403 || error.response.status === 401) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getOrders();
    }, [user])

    return (
        <div className='text-center mt-5'>
            <h1>Your Orders</h1>
            <h2>orders = : {orders.length}</h2>
            <div>
                {
                    orders.map(order => <h2 key={order._id}>Order Name: {order?.serviceName}</h2>)
                }
            </div>
        </div>
    );
};

export default Orders;