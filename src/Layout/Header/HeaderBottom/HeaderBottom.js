import React from "react";
import {
  Nav,
  Container,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  NavbarCollapse,
  Dropdown,
} from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import MenuArray from "./Menu";
import { Menu } from "semantic-ui-react";
function HeaderBottom() {
  function getMenuNavLink(menu, idx) {
    return (
      <>
        <Nav.Link href="#">{menu.menuName}</Nav.Link>
        {idx < 6 ? <div className="mx-2 p-1 seperator">|</div> : ""}
      </>
    );
  }

  return (
    <>
      <Navbar
        bg="warning "
        expand="lg"
        variant="light"
        className="headerBottom"
      >
        <Navbar.Collapse id="wish-navbar-nav">
          <Container>
            <div className="d-flex justify-content-between w-100p">
              <div className="start">
                <div className="catIcon"></div>
                {/* <NavDropdown
                  title="ALL CATEGORIES"
                  id="basic-nav-dropdown"
                  menuVariant="dark"
                  className="bottomHeaderDiv"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
                <Dropdown className="d-inline mx-2" variant="dark">
                  <Dropdown.Toggle id="dropdown-autoclose-true" variant="dark">
                    <FeatherIcon
                      icon="menu"
                      size="24"
                      fill="#fff"
                      className="me-3"
                    />{" "}
                    ALL CATEGORIES
                  </Dropdown.Toggle>

                  <Dropdown.Menu variant="dark">
                    {MenuArray.map((menu, idx) => (
                      <Dropdown.Item href="#">{menu.menuName}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="mid">
                <Nav className="">
                  {MenuArray.map((menu, idx) =>
                    idx < 7 ? getMenuNavLink(menu, idx) : ""
                  )}
                  {/* <Nav.Link href="#shop">Shop</Nav.Link>
                  <div className="mx-2 p-1 seperator">|</div>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <div className="mx-2 p-1 seperator">|</div>
                  <Nav.Link href="#electronic">Electronic</Nav.Link>
                  <div className="mx-2 p-1 seperator">|</div>
                  <Nav.Link href="#pages">Pages</Nav.Link>
                  <div className="mx-2 p-1 seperator">|</div>
                  <Nav.Link href="blog">Blog</Nav.Link>
                  <div className="mx-2 p-1 seperator">|</div>
                  <Nav.Link href="#contact">Contact</Nav.Link> */}
                </Nav>
              </div>
              {/* <div className="end">
                <div className="todayDeals">
                  <Nav.Link href="#todayDeals">TODAY DEALS</Nav.Link>
                </div>
              </div> */}
            </div>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default HeaderBottom;
