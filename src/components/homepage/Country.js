import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

import './Country.css';
import plainBGpreview from '../../images/plainBGpreview.png';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCountries } from '../../redux/store/countries';
import { useSelector } from 'react-redux';
import { getSelectedCountrySuccess } from '../../redux/store/countries';

const Countries = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(fetchCountries());
    
  }, [dispatch]);
  const countries = useSelector(state => state.countries.countries.singleCountry);

  function selectedCountryName (country) {
    dispatch(getSelectedCountrySuccess(country));
    navigate('/country');
  }

  return (
    <Box sx={{ width: '100%' }}>
      <h2>STATS BY COUNTRY:</h2>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {countries &&  countries.map((item) => (
        <Grid key={item.id} onClick={()=>{selectedCountryName(item.name)}} item xs={6} className="grid">
          <ArrowCircleRightOutlinedIcon fontSize="large" className="grid-icon" />
          <img className="grid-img"
        src={plainBGpreview}
        srcSet={plainBGpreview}
        alt={item.title}
        loading="lazy"
      />
          <div className="grid-texts">
          <div className="grid-item bottom-left">{item.name}</div>
          <div className="grid-item bottom-right"><span className='item-text'>Confirmed:</span>{item.confirmedCases}</div>
          </div>
        </Grid>
      ))}
    </Grid>
    </Box>
    );
};

export default Countries ;
