import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Countries from '../homepage/Country';
import store from '../../redux/store/configureStore';
import { fetchCountries } from '../../redux/store/countries';

describe('Test reducers', () => {
  let state;
  beforeEach(() => {
    state = store.getState();
  });

  it('should return the initial state', () => {
    expect(state.countries.countries).toEqual([]);
  });

  it('should return the correct state after fetching countries', () => {
    store.dispatch(fetchCountries());
    state = store.getState();
    expect(state.countries.countries).toEqual([]);
  });
});

describe('Test Countries component', () => {
  it('should render the Countries component correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Countries />
        </BrowserRouter>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
