import React from 'react'
import '../styles/form.css';

import { MdOutlineHome } from "react-icons/md";


const AddAddressForm = () => {
    return (
        <div class="form-container">
            <div class="form-content">
                <form action="result.html" method="get">
                    <div class="user-detail">
                        <div class="input-box">
                            <label for="Fname">Full Name : </label>
                            <input type="text" id="Fname" placeholder="Enter Full Name" required />
                        </div>
                        <div class="input-box">
                            <label for="email">Email : </label>
                            <input type="email" id="email" placeholder="Enter Email Id" required />
                        </div>
                        <div class="input-box">
                            <label for="gender">Gender : </label>
                            <input type="text" id="gender" placeholder="Enter Gender" required />
                        </div>
                        <div class="input-box">
                            <label for="pass">Password : </label>
                            <input type="password" id="pass" placeholder="Enter Password" required />
                        </div>
                        <div class="input-box">
                            <label for="phone">Mobile Number : </label>
                            <input type="tel" id="phone" placeholder="Enter Mobile No." required />
                        </div>
                        <div class="input-box">
                            <label for="landmark_name">Landmark : </label>
                            <input type="text" id="landmark_name" placeholder="Enter landmark Name" required />
                        </div>
                        <div class="input-box">
                            <label for="city">City : </label>
                            <input type="text" id="city" placeholder="Enter City Name" required />
                        </div>
                        <div class="input-box">
                            <label for="state">State : </label>
                            <input type="text" id="state" placeholder="Enter State Name" required />
                        </div>
                        <div class="input-box">
                            <label for="country">Country : </label>
                            <input type="text" id="country" placeholder="Enter Country Name" required />
                        </div>
                        <div class="input-box">
                            <label for="zipcode">ZipCode : </label>
                            <input type="text" id="zipcode" placeholder="Enter ZipCode" required />
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddAddressForm
