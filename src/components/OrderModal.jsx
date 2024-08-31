import OrderModalItem from "./OrderModalItem";
OrderModalItem;
const OrderModal = ({ order, id }) => {
  return (
    <>
      <button
        onClick={() => document.getElementById(id).showModal()}
        className="btn btn-outline btn-sm btn-secondary"
      >
        order details
      </button>
      <dialog id={id} className="modal">
        <div className="modal-box">
          <OrderModalItem {...order} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default OrderModal;
