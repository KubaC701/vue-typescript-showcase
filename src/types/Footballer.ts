import Club from './Club';

export type FootballerPosition = 'goalkeeper' | 'defender' | 'midfielder' | 'striker';

export interface Footballer {
  assists: number;
  club: Club;
  goals: number;
  name: string;
  nationality: string;
  position: FootballerPosition;
}
