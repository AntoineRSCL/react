const Membre = ({nom, children, age} ) => {
    return ( 
        <>
            <h2 style={{color: age < 35 ? 'dodgerblue':'crimson'}}>Membre : {nom.toUpperCase()}</h2>
            <h2>age : {age}</h2>
            
            { children ? <p>{children}</p> : null}
        </>
     );
}
 
export default Membre;