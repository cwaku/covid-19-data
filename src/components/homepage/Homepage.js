import Container from '@mui/material/Container';
import Countries from './Country';
import './Homepage.css';

const Homepage = () => {
  return (
    <Container>
      <h1>Homepage</h1>
      <Countries />
    </Container>
  );
};

export default Homepage;