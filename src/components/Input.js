const Input = ({val, handleChange, placeholder}) => {
    return (
        <>
            <input type="text" value={val} onChange={handleChange} className={`my-2 form-control`} placeholder={placeholder}/>
        </>
    )
}

export default Input;