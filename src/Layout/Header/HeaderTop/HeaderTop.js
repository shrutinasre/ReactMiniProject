import React from "react";
import ReactDOM from "react-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";
function HeaderTop() {
  return (
    <>
      <div className="container headerTop">
        <div className="d-flex justify-content-between">
          <div className="">
            <div className="d-inline-flex">
              <a className="p-1">Support</a>
              <div className="mx-2 p-1 seperator">|</div>
              <a className="p-1">Store Locator</a>
              <div className="mx-2 p-1 seperator">|</div>
              <a className="me-2 p-1">Track Order</a>
            </div>
          </div>
          <div className="">
            <div className="p-1">
              <span className="text-warning"> Call us: </span>
              <a href="#">(888) 1234 56789</a>
            </div>
          </div>
          <div className="">
            <div className="d-inline-flex">
              <a className="p-1">Sign in</a>
              <div className="mx-2 p-1 seperator">|</div>
              <a className="p-1">Sign up</a>
              <div className="mx-2 p-1 seperator">|</div>

              <DropdownButton size="sm" title="English" variant="default">
                <Dropdown.Item as="button">English</Dropdown.Item>
                <Dropdown.Item as="button">Marathi</Dropdown.Item>
                <Dropdown.Item as="button">Hindi</Dropdown.Item>
              </DropdownButton>
            </div>  
          </div>
        </div>
      </div>
    </>
  );
}
export default HeaderTop;
