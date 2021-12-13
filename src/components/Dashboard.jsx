import React from 'react'
import {Link}  from "react-router-dom";
import { toast } from 'react-toastify';
import { MdOutlineDeleteOutline, MdOutlineEdit } from "react-icons/md";
import Navbar from './Navbar';
import AddressBookServices from '../services/AddressBookServices';
import {useState,useEffect} from "react";
import axios from "axios";



const Dashboard = ({loginToken}) => {

    const [address,setAddressList] =useState([]);

    const getAllAddressList =()=>{
        axios.get(`http://localhost:8882/addressbook/getall/`,{
            headers:{
                loginToken:loginToken
            }
        }).then(
            (response)=>{
                setAddressList(response.data.data);
                console.log(response.data.data);
            },
            (error)=>{
                console.log(error);
                toast.error("Something went wrong, while getting records ", { position: "top-center" });
            }
        );
    };

    useEffect(()=>{
        document.title = "DashBoard";
        getAllAddressList();
    },[]);

    const [order ,setorder] = useState("ASC");
    const sorting =(column_name)=>{
        if(order === "ASC"){
            const sorted =[...address].sort((a,b) =>
                a[column_name] > b[column_name] ? 1 : -1 );
                setAddressList(sorted);
            setorder("DSC");
        }
        if(order === "DSC"){
            const sorted =[...address].sort((a,b) =>
                a[column_name] < b[column_name] ? 1 : -1 );
                setAddressList(sorted);
            setorder("ASC");
        }
    }

    const deleteAddress =(id)=>{
        console.log(id);
        axios.delete(`http://localhost:8882/addressbook/delete/${id}`,{
            headers:{
                loginToken:loginToken
            }
        }).then(
            (response)=>{
                toast.dark("Record Deleted Successfully", { position: "top-center" });
                console.log(response);
                const newList = address.filter((addr) => addr.user_id !== id);
                setAddressList([...newList]);

            },
            (error)=>{
                console.log(error)
                toast.error("Something went wrong, while deleting record ", { position: "top-center" });
            }
        )
            
    };


    return (
        <>
            <Navbar title="Address Book" to="/add" button_name="+Add Address" />
            <table className="table table-bordered table-hover table-striped text-center table_container">
                <thead className="bg-secondary text-white">
                    <tr>
                        <th onClick={()=>sorting("name")}>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Gender</th>
                        <th>City</th>
                        <th>State</th>
                        <th>PinCode</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            address.length > 0 &&
                            address.map((address, index) => {
                                    return <tr key={`${index}`}>
                                        <td>{address.name}</td>
                                        <td>{address.email}</td>
                                        <td>{address.mobileNo}</td>
                                        <td>{address.gender}</td>
                                        <td>{address.address.city}</td>
                                        <td>{address.address.state}</td>
                                        <td>{address.address.pinCode}</td>
                                    <td>
                                        <Link to={`edit/${address.user_id}`}><MdOutlineEdit /></Link>
                                        <MdOutlineDeleteOutline onClick={()=>deleteAddress(address.user_id)}/>
                                    </td>
                                    </tr>
                                })
                        }
                    </tbody>
            </table>
        </>
    )
}

export default Dashboard
