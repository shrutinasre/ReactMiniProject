import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartProductCard from "./CartProductCard";

const prodArray = [
  {
    productName: "Samsung - Galaxy S6 4G LTE",
    productQty: 2,
    productPrize: 5000,
    productImage: "https://picsum.photos/200/300",
  },
  {
    productName: "Samsung - Galaxy S7 4G LTE",
    productQty: 1,
    productPrize: 7000,
    productImage: "https://picsum.photos/200/300",
  },
  {
    productName: "Samsung - Galaxy S9 4G LTE",
    productQty: 3,
    productPrize: 2000,
    productImage: "https://picsum.photos/200/300",
  },
  {
    productName: "Samsung - Galaxy Note 4G LTE",
    productQty: 5,
    productPrize: 4000,
    productImage: "https://picsum.photos/200/300",
  },
];

function CartOffCanvas({ ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a className="iconSet p-2 position-relative" onClick={handleShow}>
        <FeatherIcon icon="shopping-cart" size="24" fill="#ccc" />
        <span className="h6 ms-2">Rs. 10000000.00</span>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
          99+
          <span className="visually-hidden">unread messages</span>
        </span>
      </a>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        {/* or we can direct write property ex.placement="end" */}
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {prodArray.map((prod, idx) => (
            <CartProductCard key={idx} product={prod}></CartProductCard>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default CartOffCanvas;
