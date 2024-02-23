import axios from 'axios';
import data from '../data';

export interface Pokes {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

export interface PokeInfo {
  name: string;
  size: number;
  firmness: {
    name: string;
  };
  natural_gift_type: {
    name: string;
  };
  natural_gift_power: number;
  growth_time: number;
  smoothness: number;
  max_harvest: number;
}

export const getPokes = async (
  api: string,
  offset = 0,
  limit = data.defaultLimitPages
): Promise<Pokes> => {
  const result = (
    await axios.get(api, {
      params: {
        offset,
        limit,
      },
    })
  ).data;

  return result;
};

export const getPokeInfo = async (api: string): Promise<PokeInfo> => {
  const result = (
    await axios.get(api, {
      params: {},
    })
  ).data;
  return result;
};
