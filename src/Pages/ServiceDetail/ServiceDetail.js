import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useBookService from '../../hook/useBookService';

const ServiceDetail = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { serviceId } = useParams();
    const [service] = useBookService(serviceId);

    const handelService = event => {
        event.preventDefault();
        const order = {
            name: user.displayName,
            email: user.email,
            serviceId: serviceId,
            serviceName: service.name,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://polar-gorge-98194.herokuapp.com/bookService', order)
            .then(function (response) {
                if (response?.data?.insertedId) {
                    toast.success('your order successfully placed')
                    event.target.reset();
                }
            })

    }


    return (
        <div>
            <div className='w-25 mx-auto mt-5'>
                <h2>please make your order</h2>
                <Form onSubmit={handelService}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Service Name</Form.Label>
                        <Form.Control name='service' value={service?.name} type="text" placeholder="service" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control name='name' value={user?.displayName} type="text" placeholder="Your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Your email</Form.Label>
                        <Form.Control name='email' value={user?.email} type="text" placeholder="Your email" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Your Address</Form.Label>
                        <Form.Control name='address' type="text" placeholder="Address" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Phone</Form.Label>
                        <Form.Control name='phone' type="text" placeholder="Phone" />
                    </Form.Group>

                    <Button className='me-4' variant="primary" type="submit">
                        Submit
                    </Button>
                    <Button onClick={() => navigate('/orders')} variant="primary" type="submit">
                        got to orders
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default ServiceDetail;