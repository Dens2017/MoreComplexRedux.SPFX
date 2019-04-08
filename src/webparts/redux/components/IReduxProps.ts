import { Store } from 'redux';
import {
  IApplicationState
} from '../reducers/IApplicationState';

export interface IReduxProps {
  description: string;
  store: Store<IApplicationState>;
}

export interface IReduxState {
  checkers: number;
  chess: number;
  fish: number;
}
