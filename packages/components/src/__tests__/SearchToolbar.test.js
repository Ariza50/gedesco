import {store} from '@ariz/web/src/redux/store';
import {render, screen} from '@testing-library/react';
import {Provider as ReduxProvider} from 'react-redux';
import SearchToolbar from '../components/SearchToolbar';

test("renders SearchToolbar", () => {
  render(
    <ReduxProvider store={store}>
      <SearchToolbar filterName="filter" />
    </ReduxProvider>
  );
  const MainTableComponent = screen.getByRole(
    "search-toolbar"
  );

  expect(MainTableComponent).toBeInTheDocument();
});
