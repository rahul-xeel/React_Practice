import { useEffect } from "react"

function Data(props)
{


   function Printlog(Arg) {
    console.log(Arg);
}



useEffect(() => {
    
    Printlog("Mount Phase Only"); 
    
}, []);




useEffect(() => {
    
    Printlog("Update Phase Only"); 
    
}, [props.dataAvalue, props.dataBvalue]);




useEffect(() => {
    
  return() =>
    {
        Printlog("Unmount Phase Only"); 
    }
    
},[]);





        
    return(

        <>
        
         <h1>Data A :- {props.dataAvalue}</h1>
         <h1>Data B :- {props.dataBvalue}</h1>


        </>
        
    )
}

export default Data