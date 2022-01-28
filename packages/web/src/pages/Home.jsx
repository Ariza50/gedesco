import {AccountMenu} from '@ariz/components/src';
import MainTable from '../components/MainTable';
import {PRODUCT_TABLE_COLUMNS} from '../components/tableComponents/columnsDefinition';
import {useGetAllProductsQuery} from '../redux/apiEcommerce';

const Home = () => {
  const { data, isLoading } = useGetAllProductsQuery();

  return (
    <>
      <AccountMenu/>
      {
        !isLoading
          ? <MainTable columns={PRODUCT_TABLE_COLUMNS} listData={data}/>
          : null
      }
    </>
  );
};

export default Home;
