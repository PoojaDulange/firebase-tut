import React from 'react'
import { db } from '../fibrebase-config'
import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { async } from '@firebase/util';
import { useEffect, useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';


const Home = () => {
  const history = useNavigate();

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'users');

  const updateUser = async (id, age) => {
    console.log(id, age);
    const userDoc = doc(db, "users", id);
    console.log(userDoc);
    const updateData = { age: age + 1 };
    console.log(updateData);
    try {
      await updateDoc(userDoc, updateData);
      window.location.reload();
    }
    catch (e) {
      console.error(e);
    }
  }
  const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
    window.location.reload();

  }
  

  useEffect(() => {

    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();

  }, []);
  return (
    <div className='container text-center mt-3'>
      <h1>Crud Operations Using React + Firebase</h1>
      <NavLink className='btn btn-primary mt-3' to='/createuser'>Create User</NavLink>
      <table className='table table-bordered mt-3'>
        <thead>
          <tr className='bg-dark text-white'>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>

        {users.map((user, index) => {
          return (
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td> <button className='btn btn-warning mx-3' onClick={() => { updateUser(user.id, user.age) }}>Increase Age</button>
                  <button className='btn btn-danger mx-3' onClick={() => { deleteUser(user.id) }}>Delete User</button></td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  );
}

export default Home;