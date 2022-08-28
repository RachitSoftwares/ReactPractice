import Logo from "../Images/whatsapp.png";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <a class="navbar-brand" href="#">
        <img
          src={Logo}
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
        />
      </a>
    </nav>
  );
};
export default Header
