import React from 'react'
import {Link}  from "react-router-dom";
import { toast } from 'react-toastify';
import { MdOutlineDeleteOutline, MdOutlineEdit } from "react-icons/md";





const Dashboard = () => {
    return (
        <>
            <table className="table table-bordered table-hover table-striped text-center table_container">
                <thead className="bg-success text-white">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Gender</th>
                        <th>City</th>
                        <th>State</th>
                        <th>ZipCode</th>
                        <th>Country</th>
                    </tr>
                </thead>
            </table>
        </>
    )
}

export default Dashboard
