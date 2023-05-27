import {useLocation, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleAddToCart = (item) => {
        console.log(item);
        if (user && user.email) {
            // menuItemId: _id,
            const cartItem = {  name, image, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        //refetch(); // refetch cart to update the number of items in the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }



    }
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <p className="absolute right-0 mr-10 mt-10 px-4 bg-slate-900 text-white rounded">{price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 text-[#BB8506]">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;