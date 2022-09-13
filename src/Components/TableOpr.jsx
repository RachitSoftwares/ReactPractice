import { useState } from "react"

const TableOpr=()=>{

  const userObj=[{
    name:"Abhi",
    mob:12345
  },{
  name:"Ashwini",
  mob:67890}
  ,{
    name:"Bhushan",
    mob:123456}]

    const [user,setUser]=useState(userObj)
    const handleChange=(event)=>{
       user[event.target.name]=event.target.value;
       setUser({...user})
       console.log(user)
    }
return(
<>

<form>
  <div class="form-group">
    <label for="inputUserName">User Name</label>
    <input type="text" className="form-control" id="inputUserName" onChange={(e)=>handleChange(e)} placeholder="Enter User Name"/>
  </div>
  <div class="form-group">
    <label for="inputMobileNumber">Mobile Number</label>
    <input type="text" className="form-control" id="inputMobileNumber"onChane={(e)=>handleChange(e)} placeholder="enter Mobile Number"/>
  </div>
  <button type="button" class="btn btn-success" >Add User</button>
</form>

</>)
} 
export default TableOpr;