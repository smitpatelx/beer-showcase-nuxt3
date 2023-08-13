import { Unit } from '@/interfaces/beers';
import type { BoilVolume } from '@/interfaces/beers';

export const randomAlpha = (): string => {
  const length = 9;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  let result = '';

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const UnitMap = {
  [Unit.Litres]: 'L',
  [Unit.Celsius]: '°C',
  [Unit.Grams]: 'gm',
  [Unit.Kilograms]: 'Kg',
} as Record<Unit, string>;

export const formatVolume = (data: BoilVolume) => {
  const { value, unit } = data;
  return `${value} ${UnitMap[unit]}`;
};
