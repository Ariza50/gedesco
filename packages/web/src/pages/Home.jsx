import {AccountMenu} from '@ariz/components/src';
import MainTable from '../components/MainTable';

const Home = () => {
  /*const { data, isLoading } = useGetAllProductsQuery();
  if (isLoading){
    return null;
  }*/
  return (
    <div sx={{width: 800, display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-around'}}>
      <AccountMenu/>
      <MainTable/>
    </div>
  );
};

export default Home;
