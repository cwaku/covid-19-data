import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import './CountryD.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import plainBGpreview from '../../../images/plainBGpreview.png';
import Navbar from '../navbar/Navbar';

import { fetchCountries } from '../../../redux/store/countries';

const CountryD = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  const countries = useSelector((state) => state.countries.countries.singleCountry);
  const country = useSelector((state) => state.countries.selectedCountry);

  return (
    <Box sx={{ width: '100%' }}>
      <Navbar />
      <Grid className="dContainer" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {countries && countries.filter((item) => item.name === country).map((item) => (
          <Grid key={item.id} item xs={6} className="grid">
            <img
              className="grid-img"
              src={plainBGpreview}
              srcSet={plainBGpreview}
              alt={item.title}
              loading="lazy"
            />
            <div className="grid-texts">
              <div className="grid-item bottom-left">{item.name}</div>
              <div>
                <div className="grid-item bottom-right">
                  <span className="item-text">Confirmed:</span>
                  {item.confirmedCases}
                </div>
                <div className="grid-item bottom-right">
                  <span className="item-text">Deaths:</span>
                  {item.deaths}
                </div>
                <div className="grid-item bottom-right">
                  <span className="item-text">Recovered:</span>
                  {item.recovered}
                </div>
                <div className="grid-item bottom-right">
                  <span className="item-text">Active:</span>
                  {item.active}
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CountryD;
