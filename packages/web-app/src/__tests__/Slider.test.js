import Slider from '../components/Slider';
import {render, screen} from '@testing-library/react';
import {Provider as ReduxProvider} from 'react-redux';
import {productsList} from '../fakeData/productsList';
import {store} from '../redux/store';

test("renders Slider", () => {
  render(
    <ReduxProvider store={store}>
      <Slider title="Test" listData={productsList} />
    </ReduxProvider>
  );
  const SliderComponent = screen.getByRole(
    "slider"
  );

  expect(SliderComponent).toBeInTheDocument();
});
