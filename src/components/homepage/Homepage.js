import Container from '@mui/material/Container';
import Countries from './Country';
import './Homepage.css';
import Banner from './Banner';
import Navbar from '../navbar/Navbar';

const Homepage = () => (
  <Container className="main-container">
    <Navbar />
    <Banner />
    <Countries />
  </Container>
);

export default Homepage;
