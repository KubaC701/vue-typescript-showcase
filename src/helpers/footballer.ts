import { Footballer, FootballerPosition } from '@/types/Footballer';

export const printFootballerData = (footballer: Footballer): void => {
  console.log(`${footballer.name} ${footballer.club.name} ${footballer.goals}`);
};

export const changePosition = (
  footballer: Footballer,
  position: FootballerPosition,
): Footballer => {
  if (position === 'goalkeeper') {
    return { ...footballer, position, cleanSheets: 0 };
  }
  return { ...footballer, position };
};
