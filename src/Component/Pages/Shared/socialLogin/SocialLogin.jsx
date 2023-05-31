import React,{useContext} from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIN}= useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();


    let from = location.state?.from?.pathname || "/";

    const handleGoogleSignin=()=>{
        googleSignIN()
        .then(result=>{
            const loggedInUser = result.user
            console.log(loggedInUser);

                const saveUser ={name: loggedInUser.displayName, email: loggedInUser.email}
                fetch('http://localhost:5000/users', {
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(saveUser)

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            
                            navigate(from, { replace: true });
                        }
                    })


            
        })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className='w-full text-center'>
                <button className="btn btn-circle btn-outline ">
                    <FaGoogle onClick={handleGoogleSignin}></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;