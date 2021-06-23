import { Footballer } from '@/types/Footballer';

export default (): Footballer[] => [
  {
    assists: 8,
    club: { name: 'Real Madrid', country: 'Spain', stadium: 'Santiago Bernabeu' },
    goals: 12,
    name: 'Karim Benzema',
    nationality: 'France',
    position: 'striker',
  },
  {
    assists: 0,
    cleanSheets: 12,
    club: { name: 'Juventus F.C.', country: 'Italy', stadium: 'Allianz Stadium' },
    goals: 0,
    name: 'Wojciech Szczęsny',
    nationality: 'Poland',
    position: 'goalkeeper',
  },
  {
    assists: 14,
    club: { name: 'Manchester City', country: 'England', stadium: 'Etihad Stadium' },
    goals: 8,
    name: 'Kevin De Bruyne',
    nationality: 'Belgium',
    position: 'midfielder',
  },
];
