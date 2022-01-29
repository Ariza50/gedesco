import {AccountMenu, SearchToolbar} from '@ariz/components/src';
import {filter} from 'lodash';
import {useState} from 'react';
import Slider from '../components/Slider';
import usePredefinedCategories from '../Hooks/usePredefinedCategories';

const HomeApp = () => {
  const { jeweleryData, electronicsData, isLoading } = usePredefinedCategories();
  const [filterName, setFilterName] = useState('');

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const filteredJeweleryList = filter(jeweleryData, (_user) => _user.title.toLowerCase().indexOf(filterName.toLowerCase()) !== -1);
  const filteredElectronicList = filter(electronicsData, (_user) => _user.title.toLowerCase().indexOf(filterName.toLowerCase()) !== -1);

  return (
    <>
      <AccountMenu/>
      <SearchToolbar placeHolder={'Search Product'} filterName={filterName} onFilterName={handleFilterByName} />
      {
        !isLoading
          ? <Slider title="Hot Deals" listData={filteredJeweleryList}/>
          : null
      }
      {
        !isLoading
          ? <Slider title="Recommended for you" listData={filteredElectronicList}/>
          : null
      }
    </>
  );
}

export default HomeApp;
