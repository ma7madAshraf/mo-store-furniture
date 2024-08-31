import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar } from "../components";
import Loading from "../components/Loading";

const HomeLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <Navbar />
      <div className="my-align py-10">
        {navigation.state === "loading" ? <Loading /> : <Outlet />}
      </div>
    </>
  );
};

export default HomeLayout;
