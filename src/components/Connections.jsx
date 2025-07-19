import useConnections from "../hooks/useConnections";
import { Link } from "react-router-dom";

const Connections = () => {
  const { data: connections, loading, error } = useConnections();

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
  if (!connections || connections.length === 0)
    return <h1 className="text-center my-10">No Connections Found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">Connections</h1>

      {connections.map(({ _id, firstName, lastName, photoUrl, age, gender, about }) => (
        <div
          key={_id}
          className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto items-center justify-between"
        >
          <div className="flex items-center">
            <img
              alt="photo"
              className="w-20 h-20 rounded-full object-cover"
              src={photoUrl}
            />
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
          </div>
          {/* <Link to={"/chat/" + _id}>
            <button className="btn btn-primary">Chat</button>
          </Link> */}
        </div>
      ))}
    </div>
  );
};

export default Connections;
