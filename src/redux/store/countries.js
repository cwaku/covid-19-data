import moment from 'moment';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// set axios default url
axios.defaults.baseURL = 'https://api.covid19tracking.narrativa.com/api/';

const date = moment(new Date()).format('YYYY-MM-DD');

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    selectedCountry: '',
    searchCountry: '',
  },
  reducers: {
    getCountriesSuccess: (state, action) => ({ ...state, countries: action.payload }),
    getSelectedCountrySuccess: (state, action) => ({ ...state, selectedCountry: action.payload }),
    getSearchedCountrySuccess: (state, action) => ({ ...state, searchCountry: action.payload }),
    getCountriesFailure: (state, action) => ({ ...state, countries: action.payload }),
  },
});

export default countriesSlice.reducer;

// Actions

export const {
  getCountriesSuccess,
  getSelectedCountrySuccess,
  getSearchedCountrySuccess,
  getCountriesFailure,
} = countriesSlice.actions;

export const fetchCountries = () => async (dispatch) => {
  try {
    const response = await axios.get(date);
    if (response) {
      const { dates, total } = response.data;
      const { countries } = dates[date];
      const countriesList = Object.values(countries);

      const singleCountry = countriesList.map((country) => (
        {
          name: country.name,
          confirmedCases: country.today_confirmed,
          deaths: country.today_deaths,
          recovered: country.today_recovered,
          active: country.today_open_cases,
          id: country.id,
        }
      ));

      const totalConfirmedCases = total.today_confirmed;
      const allData = { singleCountry, totalConfirmedCases };
      dispatch(getCountriesSuccess(allData));
    }
  } catch (error) {
    dispatch(getCountriesFailure(error));
  }
};
