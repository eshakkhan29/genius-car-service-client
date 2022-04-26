import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch("http://localhost:5000/service", {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(result => {
                console.log('data added');
            })
    }

    return (
        <div className='container m-auto w-50'>
            <h2>add service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-4' placeholder='Service name' {...register("name")} />
                <input className='mb-4' placeholder='E-mail' {...register("email")} />
                <input className='mb-4' placeholder='Service price' {...register("price")} />
                <input className='mb-4' placeholder='image url' {...register("img")} />
                <textarea className='mb-4' placeholder='description' {...register("description")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;