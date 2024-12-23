import React from "react";
import FeatherIcon from "feather-icons-react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import CartOffCanvas from "./CartOffCanvas/CartOffCanvas";

function HeaderMid() {
  return (
    <>
      <div className="container headerMid">
        <div className="d-flex justify-content-between h-100p py-4">
          <div className="logoWrapper">
            <h1>
              <span>Wish</span>
              <span className="ms-1">
                <FeatherIcon icon="shopping-bag" size="34" fill="#f1c40f" />
              </span>
            </h1>
          </div>
          <div className="searchBar">
            <div className="input-group p-2">
              <DropdownButton title="English" variant="default">
                <Dropdown.Item as="button">English</Dropdown.Item>
                <Dropdown.Item as="button">Marathi</Dropdown.Item>
                <Dropdown.Item as="button">Hindi</Dropdown.Item>
              </DropdownButton>
              <div className="mx-2 p-1 seperator">|</div>
              <input
                type="text"
                className="form-control"
                placeholder="search what you looking for"
                aria-label="Text input with 2 dropdown buttons"
              />

              <button
                className="btn btn-warning"
                type="button"
                id="button-addon2"
              >
                <FeatherIcon icon="search" size="24" />
              </button>
            </div>
          </div>
          <div className="cart">
            <div className="d-flex justify-content-between py-1">
              <a className="iconSet p-2 me-2">
                <FeatherIcon icon="map-pin" size="24" fill="#ccc" />
              </a>
              <a className="iconSet p-2 me-2">
                <FeatherIcon icon="heart" size="24" fill="#ccc" />
              </a>
              <CartOffCanvas placement="end"></CartOffCanvas>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeaderMid;
