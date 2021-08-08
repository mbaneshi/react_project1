
import React, {useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button'
import classes from './AddUser.module.css';

const AddUser = (props) =>{

    const addUserHandler = (event)=>{
        event.preventDefault();
        if (enteredAge.trim().length === 0 || enteredUsername.trim().lengh === 0) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }
        console.log(enteredUsername, enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    }
    const [enteredUsername, setEnteredUsername] = useState('');

    const [enteredAge, setEnteredAge] = useState('');
    const usernameChangeHandler = (event) =>{
        setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }
    
    return (
        <Card className={classes.input}>
<form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
                <input id="username" value={ enteredUsername}type="text" onChange={usernameChangeHandler} />
            <label htmlFor="age">Age (year)</label >
                <input id="age" value={ enteredAge} type="number" onChange={ageChangeHandler}/>
            <Button type="submit" >Add User</Button>
            

        </form>
        </Card>
        
    );
}
export default AddUser;