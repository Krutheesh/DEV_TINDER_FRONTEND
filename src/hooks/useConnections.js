import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  connectionsStart,
  addConnections,
  connectionsFailure,
} from "../store/conectionSlice";
import { fetchUserConnections } from "../services/connectionService";

const useConnections = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.connections);

  useEffect(() => {
    const getConnections = async () => {
      if (data) return;
      try {
        dispatch(connectionsStart());
        const connections = await fetchUserConnections();
        dispatch(addConnections(connections)); // only using this
      } catch (err) {
        const msg = err?.response?.data || "Failed to load connections";
        dispatch(connectionsFailure(msg));
      }
    };

    getConnections();
  }, [data, dispatch]);

  return { data, loading, error };
};

export default useConnections;
