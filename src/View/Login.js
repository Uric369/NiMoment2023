import { useEffect, useState } from "react";
import { getCurrentUser } from "../apis";

const Login = ({ next_url } = { next_url: "" }) => {
  const [user, setUser] = useState(null);

  // TODO: change me to configurable
  useEffect(() => {
    getCurrentUser().then((resp) => {
      setUser(resp?.info?.name);
    });
  }, []);

  const toLoginPage = () => {
    const base_url = window.location.origin;
    const redirect_url = `${base_url}/${next_url || ""}`;
    const url = `${base_url}/kaleid/login?next=${encodeURIComponent(
      redirect_url
    )}`;
    window.location.href = url;
  };

  return (
    <div>
      <div>
        Current User: <span>{user || "(none)"}</span>
      </div>
      <button onClick={toLoginPage}>Login</button>
    </div>
  );
};

export default Login;
