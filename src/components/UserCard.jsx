
import { useSelector } from "react-redux";
import useUserRequest from "../hooks/useUserRequest";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;

  const loggedInUser = useSelector((state) => state.auth.user);
  const { sendRequest } = useUserRequest(); // get from hook

  const isSelf = loggedInUser?._id === _id;

  return (
    <div className="card bg-base-300 h-[60%] w-80 shadow-xl mb-[10%]">
      <figure>
        <img
          src={photoUrl}
          alt="photo"
          className="h-[16rem] w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
        {age && gender && <p>{`${age}, ${gender}`}</p>}
        <p>{about}</p>

        {!isSelf && (
          <div className="card-actions justify-center my-4">
            <button
              className="btn btn-primary"
              onClick={() => sendRequest("ignored", _id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => sendRequest("interested", _id)}
            >
              Interested
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
