const Membre = ({nom, children, age} ) => {
    return ( 
        <>
            <h2>Membre : {nom.toUpperCase()}</h2>
            <h2>age : {age}</h2>
            
            { children ? <p>{children}</p> : null}
        </>
     );
}
 
export default Membre;