import CartItem from "../components/CartItem";
import SectionTitle from "../components/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { CartTotals } from "../components/";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, numItemsInCart, cartTotal, shipping, tax, orderTotal } =
    useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);

  if (numItemsInCart < 1) {
    return (
      <section className="mt-14">
        <SectionTitle text="Your cart is empty" />
      </section>
    );
  }
  return (
    <section className="h-screen mt-16">
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid  lg:grid-cols-12 gap-8 ">
        <div className="lg:col-span-8">
          {cartItems.map((item) => {
            return <CartItem key={item.cartID} {...item} />;
          })}
        </div>
        <div className="lg:col-span-4 ">
          <CartTotals />
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-0">
            <button
              className="btn btn-secondary uppercase btn-block mt-8 "
              onClick={() => dispatch(clearCart())}
            >
              clear cart
            </button>
            {user ? (
              <Link
                to="/checkout"
                className="btn btn-primary uppercase btn-block mt-8 "
              >
                proceed to checkout
              </Link>
            ) : (
              <button className="btn btn-primary uppercase btn-block mt-8 ">
                please login{" "}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
