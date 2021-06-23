import Club from './Club';

export type FootballerPosition = 'goalkeeper' | 'defender' | 'midfielder' | 'striker';

export interface CommonFootballer {
  assists: number;
  club: Club;
  goals: number;
  name: string;
  nationality: string;
  position: FootballerPosition;
}

export interface Goalkeeper extends CommonFootballer {
  position: 'goalkeeper';
  cleanSheets: number
}

export interface FieldPlayer extends CommonFootballer {
  position: Exclude<FootballerPosition, 'goalkeeper'>;
}

export type Footballer = Goalkeeper | FieldPlayer;
