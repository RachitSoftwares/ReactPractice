const UserCard = (props) => {
  console.log("Props:", props);
  const { id, email, first_name, last_name, avatar } = props.user;
  return (
    <div style={{ width: "30%", border: "1px solid black" ,borderRadius:'10px',alignItems:'center',justifyContent:'center'}}>
      <div>
        <img src={avatar} />
      </div>
      <div>{first_name + " " + last_name}</div>
      <div>{email}</div>
    </div>
  );
};
export default UserCard;
