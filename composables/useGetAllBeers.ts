import { useQuery } from '@tanstack/vue-query';
import { getBeers } from '@/api/beers';

const useGetAllBeers = () => {
  const getAllBeersQ = useQuery({
    queryKey: ['get-all-user'],
    queryFn: async () => {
      const res = await getBeers({
        brewed_after: '11-2012',
      });
      return res;
    },
    select: (res) => res.data,
    enabled: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    retry: 0,
    refetchOnMount: true,
  });

  return getAllBeersQ;
};

export default useGetAllBeers;
