"use client"
import React, { useEffect, useState } from "react"


export default function test(){
    const [user, setUser]=useState([]);
     
    const getApi = async () => {
        const rawData = await fetch("http://localhost:3000/api/users");
        const data = await rawData.json();
         setUser(data.data);
    }

    const deleteApi = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/api/users/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                // Remove the deleted user from the state
                setUser((prevUsers) => prevUsers.filter((user) => user._id !== id));
            } else {
                console.error("Failed to delete user:", response.statusText);
            }
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    useEffect(() => { getApi(); }, []);

    
    return(
        <div className="text-white">
        <h1 className="">test</h1>
       <div className="flex justify-between flex-wrap gap-4">
       {user && user.map((item, index) => (
            <div key={index} className="bg-green-400 w-60">
                <p>{item.name}</p> 
                <p>{item.age}</p>
                <button className="btn bg-red-400" onClick={() => deleteApi(item._id)}> delete</button>
            </div>
        ))}
       </div>
    </div>
    )
}
