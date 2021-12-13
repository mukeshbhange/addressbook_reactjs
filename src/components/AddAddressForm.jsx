
import '../styles/form.css';
import {useState,useEffect } from "react";
import {useNavigate,useParams,Link}  from "react-router-dom";

import {toast,ToastContainer} from "react-toastify";
import { MdOutlineHome } from "react-icons/md";
import Navbar from './Navbar';
import axios from 'axios';



const AddAddressForm = ({loginToken}) => {

    const {id} =useParams();
    const navigate = useNavigate();

    const [person,setPersonAddress] = useState({
        name:"",
        email:"",
        gender:"",
        password:"",
        mobileNo:"",
        address:{
            landmark:"",
            city:"",
            state:"",
            country:"",
            pinCode:""
        }
    });

    useEffect(()=>{
        document.title ="Add Address Form";
        if (id) {
            axios.get(`http://localhost:8882/addressbook/get/${id}`,{
                headers:{
                    loginToken:loginToken
                }
            })
                .then((res) => {
                    console.log(res.data);
                    setPersonAddress({
                        name:res.data.data.name,
                        email:res.data.data.email,
                        gender:res.data.data.gender,
                        password:res.data.data.password,
                        mobileNo:res.data.data.mobileNo,
                        address:{
                            landmark:res.data.data.address.landmark,
                            city:res.data.data.address.city,
                            state:res.data.data.address.state,
                            pinCode:res.data.data.address.pinCode,
                            country:res.data.data.address.country,
                        }
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        }
    },[]);

    const updateAddress = (loginToken,addressData)=>{
        axios.put(`http://localhost:8882/addressbook/edit/${id}`,addressData,{
            headers:{
                loginToken:loginToken,
            }
        })
        .then((res) => {
            toast.dark("Record Updated Successfully");
        })
        .catch(err => {
            console.log(err);
            toast.dark("Error While Updating Records");
        })
    };


    const addAddress =(loginToken,addressData)=>{
        console.log(addressData);
        axios.post(`http://localhost:8882/addressbook/add`,addressData,{
           headers:{
               loginToken:loginToken
           }
        }).then(
            (response) =>{
                console.log(response);
                
            }
        ).catch(
            (error)=>{
                console.log(error);
                toast.dark("Error While Adding Records");
            }
        )
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        if (id) {
            updateAddress(loginToken,person); 
        } else {
            addAddress(loginToken,person);
        }
        setTimeout(()=>{resetForm(); navigate("/");},3000);        
    }


    const resetForm=()=>{
        setPersonAddress({
            name:"",
            email:"",
            gender:"",
            password:"",
            mobileNo:"",
            address:{
                landmark:"",
                city:"",
                state:"",
                country:"",
                pinCode:""
            }
        })
        document.getElementById("addr_add_form").reset();
    }



    return (
    <>
    <Navbar to="/" title="Add Address Form" button_name="Go DashBord" >Go DashBoard</Navbar>
    <div className="form-container">
            <div className="form-content">
                <form action="#" onSubmit={(e)=>handleSubmit(e)} id="addr_add_form">
                    <input type="hidden" id="person_id" name="person_id" />
                    <div className="user-detail">
                        <div className="input-box">
                            
                            <input type="text" id="Fname" placeholder="Enter Full Name" value={person.name} onChange={(e) => { setPersonAddress({ ...person, name: e.target.value }) }} />
                        </div>
                        <div className="input-box">
                            
                            <input type="email" id="email" placeholder="Enter Email Id" value={person.email} onChange={(e) => { setPersonAddress({ ...person, email: e.target.value }) }}  />
                        </div>
                        <div className="input-box">
                            
                            <select name="gender" value={person.gender} onChange={(e) => { setPersonAddress({ ...person, gender: e.target.value }) }}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="input-box">
                            
                            <input type="password" id="pass" placeholder="Enter Password"  value={person.password} onChange={(e) => { setPersonAddress({ ...person, password: e.target.value }) }}/>
                        </div>
                        <div className="input-box">
                            
                            <input type="tel" id="phone" placeholder="Enter Mobile No." value={person.mobileNo} onChange={(e) => { setPersonAddress({ ...person, mobileNo: e.target.value }) }} />
                        </div>
                        <div className="input-box">
                            
                            <input type="text" id="landmark_name" placeholder="Enter landmark Name"  value={person.address.landmark}
                             onChange={(e) => { setPersonAddress(previousPersonAddress=>({
                                 ...previousPersonAddress,address:{
                                     ...previousPersonAddress.address,
                                     landmark:e.target.value
                                 }
                             })) }}/>
                        </div>
                        <div className="input-box">
                            
                            <input type="text" id="city" placeholder="Enter City Name" value={person.address.city}
                             onChange={(e) => { setPersonAddress(previousPersonAddress=>({
                                 ...previousPersonAddress,address:{
                                     ...previousPersonAddress.address,
                                     city:e.target.value
                                 }
                             })) }}/>
                        </div>
                        <div className="input-box">
                            
                            <input type="text" id="state" placeholder="Enter State Name" value={person.address.state}
                             onChange={(e) => { setPersonAddress(previousPersonAddress=>({
                                 ...previousPersonAddress,address:{
                                     ...previousPersonAddress.state,
                                     state:e.target.value
                                 }
                             })) }}/>
                        </div>
                        <div className="input-box">
                            
                            <input type="text" id="country" placeholder="Enter Country Name" value={person.address.country}
                             onChange={(e) => { setPersonAddress(previousPersonAddress=>({
                                 ...previousPersonAddress,address:{
                                     ...previousPersonAddress.address,
                                     country:e.target.value
                                 }
                             })) }}/>
                        </div>
                        <div className="input-box">
                            
                            <input type="text" id="zipcode" placeholder="Enter ZipCode" value={person.address.pinCode}
                             onChange={(e) => { setPersonAddress(previousPersonAddress=>({
                                 ...previousPersonAddress,address:{
                                     ...previousPersonAddress.address,
                                     pinCode:e.target.value
                                 }
                             })) }} />
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </>
        
    )
}

export default AddAddressForm
