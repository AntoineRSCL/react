const Button = (props) => {
    return ( 
        <button onClick={props.vieilir}>
            +{props.plus}
        </button>
     );
}
 
export default Button;