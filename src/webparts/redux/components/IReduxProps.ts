import { Store } from 'redux';
import {
  IApplicationState
} from '../reducers/IApplicationState';
import {IVoteDetails} from '../actions/IAction';

export interface IReduxProps {
  description: string;
  store: Store<IApplicationState>;
}

export interface IReduxDetailProps {
  store?: Store<IApplicationState>;
}
