import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import './CountryD.css';
import covidItem from '../../images/covidItem.jpg';


import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCountries } from '../../redux/store/countries';
import { useSelector } from 'react-redux';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CountryD = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCountries());
    
  }, [dispatch]);
  const countries = useSelector(state => state.countries.countries.singleCountry);
  const country = useSelector(state => state.countries.selectedCountry);


  return (
    <Box sx={{ width: '100%' }}>
      <h2>STATS BY COUNTRY:</h2>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {countries && countries.filter(item => item.name === country).map((item) => (
        console.log('item', item),
        <Grid key={item.id} item xs={6} className="grid">
          <img className="grid-img"
        src={covidItem}
        srcSet={covidItem}
        alt={item.title}
        loading="lazy"
      />
          <Item className="grid-item"><span className='item-text'>Country:</span>{item.name}</Item>
          <Item className="grid-item"><span className='item-text'>Confirmed:</span>{item.confirmedCases}</Item>
        </Grid>
      ))}
    </Grid>
    </Box>
    );
};

export default CountryD ;