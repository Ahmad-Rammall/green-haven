import { local } from "../helpers/localStorage";
import { useEffect, useState } from "react";

export const useLogin = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const localToken = local("token");

    setToken(localToken);
  }, []);

  return [token !== null && token !== undefined, token];
};
