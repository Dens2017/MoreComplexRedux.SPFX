import {
  IApplicationState,
  initialState
} from './IApplicationState';
import {
  IAction,
  actionTypes,
  gameTypes
} from '../actions/IAction';
import { clone } from 'lodash';
import { Reducer } from 'redux';

const voteAction: Reducer<IApplicationState> = (state: IApplicationState = initialState, action: IAction): IApplicationState => {
  switch (action.type) {
    case actionTypes.vote:

      var newState: IApplicationState = clone(state);

      if (action.data.gameType == gameTypes.checkers) {
        newState.checkers++;
      }
      if (action.data.gameType == gameTypes.chess) {
        newState.chess++;
      }
      if (action.data.gameType == gameTypes.fish) {
        newState.fish++;
      }

      return newState;

    default:
      return state;
  }
};

export default voteAction;
