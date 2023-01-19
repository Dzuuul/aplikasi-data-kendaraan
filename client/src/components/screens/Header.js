import Logo from "../../assets/images/logo.png";

const Header = () => {
    return (
      <div className="d-flex">
        <img src={Logo} alt="" className="m-3" />
        <div className="row align-items-center">
          <p className="fw-bold fs-2 align-item-center my-auto">
            Aplikasi Data Kendaraan
          </p>
        </div>
      </div>
    );
  };
  
  export default Header;