import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserListRequest } from "../store/slice/user";
import UserCard from "../UI/UserCard";

const Users = () => {
  const dispatch = useDispatch();
  const usetList = useSelector((state) => state.user.users.data);
  useEffect(() => {
    dispatch(getUserListRequest());
  }, []);

  return (
    <div>
      {usetList && usetList.length > 0 && (
        <div className="alert alert-primary m-4" role="alert">
          This is a primary alert—check it out!
        </div>
      )}

      <div style={{ float: "right", padding: "10px" }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            dispatch(getUserListRequest());
          }}
        >
          Get List
        </button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap",gap:'30px'}}>
        {usetList && usetList.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    </div>
  );
};
export default Users;
