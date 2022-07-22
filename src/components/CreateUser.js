import React from 'react'
import {NavLink, useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
import { useState } from 'react';
import { addDoc,collection } from 'firebase/firestore';
import { db } from '../fibrebase-config'


const CreateUser = () => {
    const history = useNavigate();

    const [newName, setNewName] = useState('');
    const [newAge, setNewAge] = useState(0);

    const usersCollectionRef = collection(db, 'users');
    

    const createUser = async () => {
        await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
        history('/');
    };
    return (
        <div className="container mt-3 text-center">
            <h1>Fill Details To Create New User</h1><br/>
            <input placeholder='Enter Name' onChange={(e) => { setNewName(e.target.value) }} /><br /><br />
            <input placeholder='Enter Age' onChange={(e) => { setNewAge(e.target.value) }} /><br /><br />
            <button className='btn btn-primary mx-3' onClick={createUser}>Submit</button>
            {/* <button className='btn btn-danger mx-3' onClick={}>Cancel</button> */}
            <NavLink className='btn btn-danger mx-3' to='/'>Cancel</NavLink>

        </div>
    )
}

export default CreateUser