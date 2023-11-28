const Affichage = (props) => {
    return ( 
        <h2 style={{color: props.age < 35 ? 'dodgerblue':'crimson'}}>Membre :  {props.nom.toUpperCase()} age: {props.age} ans</h2>
     );
}
 
export default Affichage;