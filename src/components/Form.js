import Input from "./Input";
import { useState } from 'react';
import Button from "./Button";


const Form = ({handleAdd, knowEdit, changeName}) => {

    const [name, setName] = useState("");

    const clearName = () => {
        handleAdd(name);
        setName("");
    }

    return (
        <>
            <Input placeholder="Set Activity here..." handleChange={e => setName(e.target.value)} val={name}/>
            {/* <Input placeholder="Set Activity here..." handleChange={e => setName(e.target.value)} val={name}/> */}
            <Button name={!knowEdit ? `Add Activity` : `Update Changes`} color="success" handle={clearName}/>
        </>
    )
}

export default Form;