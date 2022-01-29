import {AccountMenu, SearchToolbar} from '@ariz/components/src';
import Slider from '../components/Slider';
import usePredefinedCategories from '../Hooks/usePredefinedCategories';

const HomeApp = () => {
  const { jeweleryData, electronicsData, isLoading } = usePredefinedCategories();

  return (
    <>
      <AccountMenu/>
      <SearchToolbar placeHolder={'Search Product'} filterName={'filterName'} onFilterName={() => {}} />
      {
        !isLoading
          ? <Slider title="Hot Deals" listData={jeweleryData}/>
          : null
      }
      {
        !isLoading
          ? <Slider title="Recommended for you" listData={electronicsData}/>
          : null
      }
    </>
  );
}

export default HomeApp;
