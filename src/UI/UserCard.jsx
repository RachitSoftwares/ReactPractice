const UserCard = (props) => {
  const { id, email, first_name, last_name, avatar } = props.user;
  return (
    <div
      style={{
        width: "30%",
        borderRadius: "10px",
        textAlign: "center",
        backgroundColor: "lightgoldenrodyellow",
        padding: "5px",
      }}
    >
      <div>
        <img src={avatar} style={{ borderRadius: "15px" }} />
      </div>
      <div>{first_name + " " + last_name}</div>
      <div>{email}</div>
    </div>
  );
};
export default UserCard;
