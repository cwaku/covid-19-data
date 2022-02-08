import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// set axios default url
axios.defaults.baseURL = "https://api.covid19tracking.narrativa.com/api/";

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    loading: false,
    error: null,
  },
  reducers: {
    getCountries: (state) => {
      state.loading = true;
      state.error = null;
    },
    getCountriesSuccess: (state, action) => {
      state.countries = action.payload;
      state.loading = false;
      state.error = null;
    },
    getCountriesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default countriesSlice.reducer;

// Actions

const { getCountries, getCountriesSuccess, getCountriesFailure } = countriesSlice.actions;

export const fetchCountries = () => async (dispatch) => {
  dispatch(getCountries());
  try {
    const response = await axios.get("/countries");
    dispatch(getCountriesSuccess(response.data));
  } catch (error) {
    dispatch(getCountriesFailure(error.message));
  }
}

