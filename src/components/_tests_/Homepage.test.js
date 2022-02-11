import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../../redux/store/configureStore';
import Homepage from '../homepage/Homepage';

describe('Test Homepage component', () => {
  it('should render the Homepage component correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Homepage />
        </Provider>
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
