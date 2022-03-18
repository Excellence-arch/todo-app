import Input from "./Input";
import { useState } from 'react';
import Button from "./Button";


const Form = ({knowEdit, changeName, name, seeName, clearName}) => {

    // const [name, setName] = useState("");


    return (
        <>
            <Input placeholder="Set Activity here..." handleChange={e => seeName(e.target.value)} val={name}/>
            {!knowEdit ? 
            <Button name={`Add Activity`} color="success" handle={clearName}/>
            :
            <Button name={`Update Activity`} color="success" handle={changeName}/>
            }
        </>
    )
}

export default Form;