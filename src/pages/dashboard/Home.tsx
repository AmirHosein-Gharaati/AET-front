import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { whoami } from "@/store/reducers/authReducer";
import { homeService } from "@/services/homeService";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state: RootState) => state.auth.token);
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }

    homeService.whoami(token).then((res) => {
      const userResponse = res.data;
      if (userResponse) {
        dispatch(whoami(userResponse));
      }
    });
  }, [token, navigate, dispatch]);

  return (
    <>
      <div>Home</div>
      <div>username: {user.username}</div>
    </>
  );
}
