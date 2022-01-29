import {store} from '@ariz/web/src/redux/store';
import {render, screen} from '@testing-library/react';
import {Provider as ReduxProvider} from 'react-redux';
import {AccountMenu} from '../index';

test("renders AccountMenu", () => {
  render(
    <ReduxProvider store={store}>
      <AccountMenu />
    </ReduxProvider>
  );
  const AccountMenuComponent = screen.getByRole(
    "account-menu"
  );

  expect(AccountMenuComponent).toBeInTheDocument();
});
