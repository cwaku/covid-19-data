import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  function goBack() {
    navigate('/');
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <ArrowBackIosOutlinedIcon onClick={() => goBack()} className="navbar-icon" />
          </div>
          <h3>Global cases</h3>
          <div className="navbar-menu">
            <MicOutlinedIcon className="" />
            <SettingsOutlinedIcon className="" />
            </div>
      </div>
    </nav>
  );
};

export default Navbar;