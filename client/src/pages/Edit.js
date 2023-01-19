import { Container } from "react-bootstrap";
import HeaderEdit from "../components/screens/HeaderEdit";
import EditBox from "../components/screens/EditBox";

const Edit = () => {
  document.title = `Edit Kendaraan`;
  return (
    <div className="mx-5">
      <div className="mx-5">
        <div className="mx-5 mt-5">
          <Container fluid style={{maxWidth: "800px"}}>
            <HeaderEdit />
            <EditBox />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Edit;
