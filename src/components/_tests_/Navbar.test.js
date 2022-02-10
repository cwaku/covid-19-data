import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../../redux/store/configureStore';
import Navbar from '../navbar/Navbar';

describe('Test Navbar component', () => {
  it('should render the Navbar component correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
