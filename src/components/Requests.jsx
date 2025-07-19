import { useEffect } from "react";
import useUserRequest from "../hooks/useUserRequest";

const Requests = () => {
  const { getRequests, handleReview, requests, loading, error } = useUserRequest();

  useEffect(() => {
    getRequests();
  }, []);

  if (loading) return <h1 className="text-center my-10">Loading...</h1>;
  if (error) return <h1 className="text-center text-red-500 my-10">{error}</h1>;
  if (!requests || requests.length === 0)
    return <h1 className="flex justify-center my-10">No Requests Found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">Connection Requests</h1>

      {requests.map((request) => {
        const {
          _id: requestId,
          fromUserId: { _id, firstName, lastName, photoUrl, age, gender, about },
        } = request;

        return (
          <div
            key={requestId}
            className="flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 mx-auto"
          >
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full object-cover"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
            <div>
              <button
                className="btn btn-primary mx-2"
                onClick={() => handleReview("rejected", requestId)}
              >
                Reject
              </button>
              <button
                className="btn btn-secondary mx-2"
                onClick={() => handleReview("accepted", requestId)}
              >
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
