import { Container } from "react-bootstrap";
import ButtonGroup from "../components/screens/ButtonGroup";
import InputBox from "../components/screens/InputBox";
import TableData from "../components/screens/Table";
import Header from "../components/screens/Header";

const Home = () => {
  document.title = `Aplikasi Data Kendaraan`;

  return (
    <div className="mx-5">
      <div className="mx-5">
        <div className="mx-5 mt-5">
          <Container fluid>
            <Header />
            <InputBox />
            <ButtonGroup />
            <TableData />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
