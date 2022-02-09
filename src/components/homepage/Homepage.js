import Container from '@mui/material/Container';
import Countries from './Country';
import './Homepage.css';
import Banner from './Banner';

const Homepage = () => {
  return (
    <Container>
      <h1>Homepage</h1>
      <Banner />
      <Countries />
    </Container>
  );
};

export default Homepage;