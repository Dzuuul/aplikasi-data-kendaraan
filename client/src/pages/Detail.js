import { Container } from "react-bootstrap";
import Header from "../components/screens/Header";
import DetailBox from "../components/screens/DetailBox";

const Detail = () => {
  document.title = `Detail Kendaraan`;
  return (
    <div className="mx-5">
      <div className="mx-5">
        <div className="mx-5 mt-5">
          <Container fluid style={{maxWidth: "800px"}}>
            <Header />
            <DetailBox />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Detail;
