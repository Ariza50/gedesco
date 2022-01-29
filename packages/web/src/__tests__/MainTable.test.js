import {productsList} from '@ariz/web-app/src/fakeData/productsList';
import {render, screen} from '@testing-library/react';
import {Provider as ReduxProvider} from 'react-redux';
import MainTable from '../components/MainTable';
import {PRODUCT_TABLE_COLUMNS} from '../components/tableComponents/columnsDefinition';
import {store} from '../redux/store';

test("renders MainTable", () => {
  render(
    <ReduxProvider store={store}>
      <MainTable columns={PRODUCT_TABLE_COLUMNS} listData={productsList} />
    </ReduxProvider>
  );
  const MainTableComponent = screen.getByRole(
    "main-table"
  );

  expect(MainTableComponent).toBeInTheDocument();
});
