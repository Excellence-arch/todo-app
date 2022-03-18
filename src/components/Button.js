const Button = ({color, handle, name}) => {
    return (
        <>
            <button className={`btn btn-${color}`} onClick={handle}>{name}</button>
        </>
    )
}

export default Button;