import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.config';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const navigate = useNavigate()

    const [agree, setAgree] = useState(false)
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);
    const navigate2 = () => {
        navigate('/login')
    }

    if (user) {
        console.log(user, 'hello');
    }

    const handelFormSubmit = async (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        navigate('/')
    }



    return (
        <div>
            {/* <h2>Please Register</h2> */}
            <h2 className='title pt-5 text-white title'>Register</h2>
            <div>

                <form className='form' onSubmit={handelFormSubmit}>
                    <input className='input-fild rounded ps-2' name='name' type="text" placeholder='Your Name' required />
                    <input className='input-fild rounded ps-2' name='email' type="email" placeholder='Your Email' required />
                    <input className='input-fild rounded ps-2' name='password' type="password" placeholder='Password' required />

                    <div className='text-start'>
                        <input onClick={() => setAgree(!agree)} type="checkbox" name='trams' id="trams" />
                        <label className={`ps-2 ${agree ? 'text-white' : 'text-danger'}`} htmlFor="trams">Accept  Terms and Condation</label>
                    </div>


                    <input disabled={!agree} className='submit-btn' type="submit" value='Sign Up' />

                    <ul className='form-link'>
                        <li>Already have an account?<span onClick={() => navigate2('/login')}> Sign In</span> </li>
                    </ul>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;