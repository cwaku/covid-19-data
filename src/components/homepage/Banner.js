import * as React from 'react';
import Box from '@mui/material/Box';

import './Banner.css';
import { useSelector } from 'react-redux';

const Banner = () => {
  const total = useSelector(state => state.countries.countries.totalConfirmedCases);

  return (
    <Box sx={{ width: '100%' }}
      className="banner">
      <h1>COVID-19</h1>
      <h2>Coronavirus disease (COVID-19)</h2>
      <h2 className="cases">Total confirmed cases: {total}</h2>
      <h3 className="no-margin">Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</h3>
      <h3 className="no-margin">Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.</h3>
      <h3 className="no-margin">The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).</h3>
      <h3 className="no-margin">At this time, there are no specific vaccines or treatments for COVID-19.</h3>
      <h3 className="no-margin">However, there are many ongoing clinical trials evaluating potential treatments. WHO will continue to provide updated information as soon as clinical findings become available.</h3>
      <h3 className="no-margin">The World Health Organization (WHO) is the authority on the COVID-19 pandemic.</h3>
      <h3 className="no-margin">Read more about the COVID-19 pandemic at <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">https://www.who.int/emergencies/diseases/novel-coronavirus-2019</a></h3>
    </Box>
  );
}

export default Banner;