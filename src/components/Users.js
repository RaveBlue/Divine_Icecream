 /* import { useState, useEffect } from "react";

import { useNavigate, useLocation} from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState();
    //const axiosPrivate = userAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/users', {
                    signal: controller.signal
                });
                console.log(response.data);
                isMounted && setUsers(response.data);
            } catch (err) {
                console.error(err);
                navigate('/Login', { state: { from: location }, replace: true });
            }
        }

        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

    return (
        <article>
            <h2>Users List</h2>
            {users?.length
                ? (
                    <ul>
                        {users.map((user, i) => <li key={i}>{user?.username}</li>)}
                    </ul>
                ) : <p>No users to display</p>
            }
        </article>
    );
};

export default Users;









 */


 




















/* const client = require("./client");
const bcrypt = require('bcrypt')
const SALT_COUNT = 10;
//database functions

//user functions 
async function createUser({username, password}){
  try{
    const hashedPassword = await bcrypt.hash(password,SALT_COUNT)
    const {rows:user} = await client.query(`
      INSERT
      INTO 
      users(username,password)
      VALUES($1,$2) 
      ON CONFLICT (username) DO NOTHING
      RETURNING *;`,
      [username,hashedPassword]);

      delete user.password;

      return user;
    } catch(error){
      throw new Error('cannot create user')}
}

async function getUser({ username, password }) {
  try{
    const {rows:[userWeGetting]} = await client.query(`
    SELECT *
    FROM users
    WHERE username=${username};`,[username]);
    const hashedPassword = userWeGetting.password
    const comparePasswords = await bcrypt.compare(password,hashedPassword);
    if(comparePasswords){
      delete userWeGetting.password
      return userWeGetting
    } else{
      throw new Error('sorry that didnt work')
    }
  } catch(error){
    throw new Error('cannot get single user')
  }
}

async function getUserById(userId) {
  try{
    const{rows:[userId]} = await client.query(`
    SELECT *
    FROM users
    WHERE id=${userId};`);
    delete user.password

    return user;
  } catch(error) {
    throw new Error('cannot get user by the id')
  }

}

async function getUserByUsername(userName) {
  try{
    const {rows:[user]} = await client.query(`
    SELECT *
    FROM users
    WHERE username=$1;`,
    [userName]); 

    return user;
  } catch (error){
    throw new Error('cannot get user by username');
  }

}

module.exports = {
  createUser,
  getUser,
  getUserById,
  getUserByUsername,
}
 */