function Wrapper({children, color="white"})
{
    return(
    <div style={{backgroundColor:color ,height:"200px",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"}}>

        {children}

    </div>
    )
}

export default Wrapper;