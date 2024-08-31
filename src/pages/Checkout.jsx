import { CartTotals } from "../components";
import ShippingInfo from "../components/ShippingInfo";
import SectionTitle from "../components/SectionTitle";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch, formatPrice } from "../utils";
import { clearCart } from "../features/cart/cartSlice";

export const loader = (store) => () => {
  const user = store.getState().user.user;
  if (!user) {
    toast.warn("you must login to checkout");
    return redirect("/login");
  }
  return null;
};
export const checkoutAction =
  (store, queryClient) =>
  async ({ request }) => {
    const { cartItems, numItemsInCart, orderTotal } = store.getState().cart;
    const token = store.getState().user.user.token;
    const formData = await request.formData();
    const info = Object.fromEntries(formData);
    const data = {
      ...info,
      cartItems,
      numItemsInCart,
      orderTotal: formatPrice(orderTotal),
      chargeTotal: orderTotal,
    };
    try {
      const resp = await customFetch.post(
        "/orders",
        { data },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      queryClient.removeQueries(["orders"]);
      store.dispatch(clearCart());
      toast.success("order placed ");
      return redirect("/orders");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error placing your order";

      toast.error(errorMessage);
      return null;
    }
  };
const Checkout = () => {
  const { address } = useSelector((store) => store.user);
  const { cartTotal } = useSelector((state) => state.cart);
  if (cartTotal === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <section className="h-screen">
      <SectionTitle text="place your order" />
      <div className="pt-6 grid gap-8 grid-cols-1   ">
        <CartTotals className="" />
        <ShippingInfo />
      </div>
    </section>
  );
};

export default Checkout;
