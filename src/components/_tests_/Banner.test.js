import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../../redux/store/configureStore';
import Banner from '../homepage/Banner';

describe('Header component', () => {
  it('should render the  banner correctly ', () => {
    const header = render(
      <BrowserRouter>
        <Provider store={store}>
          <Banner />
        </Provider>
      </BrowserRouter>,
    );

    expect(header).toMatchSnapshot();
  });
});
