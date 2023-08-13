import type { BeerRequest, BeerResponse } from '@/interfaces/beers';
import axios from '@/utils/axios';
import type { AxiosResponse } from 'axios';

export const getBeers = async (data: BeerRequest): Promise<AxiosResponse<BeerResponse, unknown>> =>
  axios.get(`v2/beers/`, {
    params: data,
  });
