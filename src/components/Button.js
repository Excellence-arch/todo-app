const Button = ({color, handle, name}) => {
    return (
        <>
            <button className={`btn btn-${color} mx-2`} onClick={handle}>{name}</button>
        </>
    )
}

export default Button;