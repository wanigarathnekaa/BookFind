import Nav from "react-bootstrap/Nav";
// import { logo4 } from "./Images/Logo/L4.png";

function AlignmentExample() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="#">
        {/* <Nav.Item>
          <img src={logo4} alt="logo" />
        </Nav.Item> */}
        <Nav.Item>
          <Nav.Link>Logo</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Books</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Magazines</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Vendors</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">Login</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default AlignmentExample;
