import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { clearTheCart } from '../../utilities/fakedb';
import './Shipping.css';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const {user} = useAuth();
    const onSubmit = data =>{
        history.push("/placeorder");
        clearTheCart();

         console.log(data);
    }

    return (
        <div className='shipping-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className='error'>This field is required</span>}
                <input placeholder='Phone' {...register("phone",{ required: true })} />
                {errors.phone && <span className='error'>This field is required</span>}
                <input placeholder='Address' {...register("address",{ required: true })} />
                {errors.address && <span className='error'>This field is required</span>}
                <input placeholder='City' {...register("city",{ required: true })} />
                {errors.city && <span className='error'>This field is required</span>}

                <input type="submit"  className='btn-regular' value="Place Your Order"/>
            </form>
        </div>
    );
};

export default Shipping;