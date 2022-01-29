import {useGetProductsByCategoryQuery} from '../redux/apiEcommerceApp';

export const usePredefinedCategories = () => {

  const { data: jeweleryData } = useGetProductsByCategoryQuery('jewelery');
  const { data: electronicsData, isLoading  } = useGetProductsByCategoryQuery('electronics');

  return { jeweleryData, electronicsData, isLoading };
}

export default usePredefinedCategories;
