function User(Props) {

    return (

        <>
            <h1>User Details</h1>
            <h2>Name :- {Props.Props.name}</h2>
            <h2>Age :- {Props.Props.age}</h2>
            <h2>MobileNo :- {Props.Props.mobile}</h2>
            <h2>Gender : - {Props.Props.gender}</h2>
            <h2>Gender : - {Props.Props.address.State}</h2>
            <h2>Pincode : - {Props.Props.address.pincode}</h2>


        </>


    )

}


export default User;