import { BsCart3 } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks";
import ThemeController from "./ThemeController";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../utils";
import { clearCart } from "../features/cart/cartSlice";
import { logoutUser } from "../features/user/userSlice";

const Navbar = () => {
  const { numItemsInCart, cartTotal } = useSelector((store) => store.cart);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
  };
  return (
    <nav className="bg-base-200">
      <div className="navbar my-align">
        <div className="navbar-start">
          {/* logo */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary  text-3xl font-bold"
          >
            MO
          </NavLink>
          {/* dropDown menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" lg:hidden text-2xl btn btn-ghost "
            >
              <FaBarsStaggered />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* center menu */}
          <ul className="menu menu-horizontal px-1">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex-none flex place-items-center">
            {/* theme */}
            <ThemeController />
            {/* cart */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <BsCart3 className="h-6 w-6" />
                  <span className="badge badge-sm badge-primary indicator-item">
                    {numItemsInCart}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-200 z-[1] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">
                    {numItemsInCart} {numItemsInCart > 1 ? "Items" : "Item"}
                  </span>
                  <span className="text-info">
                    Subtotal: {formatPrice(cartTotal)}
                  </span>
                  <div className="card-actions">
                    <NavLink to="/cart">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            {/* user */}
            {user && (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to="/profile" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/orders">orders</Link>
                  </li>
                  <li>
                    <a onClick={handleLogout}>Logout</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
