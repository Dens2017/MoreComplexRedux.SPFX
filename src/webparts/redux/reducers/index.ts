import {
  IApplicationState,
  initialState
} from './IApplicationState';
import {
  IAction,
  actionTypes,
  gameTypes,
  IVoteDetails
} from '../actions/IAction';
import { clone } from 'lodash';
import { Reducer } from 'redux';
import * as moment from 'moment';

const voteAction: Reducer<IApplicationState> = (state: IApplicationState = initialState, action: IAction): IApplicationState => {
  let newState: IApplicationState = clone(state);
  switch (action.type) {
    case actionTypes.vote:

      if (action.data.gameType == gameTypes.checkers) {
        newState.checkers++;
        let newCheckers: IVoteDetails[] = newState.checkersDetails;
        newCheckers.push({
          order: newState.checkersDetails.length,
          voter: "Densedy Isaguirre",
          votetime: moment().format("MMMM D,YYYY h:mm:ss a"),
        });
        newState.checkersDetails = newCheckers;
      }
      if (action.data.gameType == gameTypes.chess) {
        newState.chess++;
        let newChess: IVoteDetails[] = newState.chessDetails;
        newChess.push({
          order: newState.chessDetails.length,
          voter: "Densedy Isaguirre",
          votetime: moment().format("MMMM D,YYYY h:mm:ss a"),
        });
        newState.chessDetails = newChess;
      }
      if (action.data.gameType == gameTypes.fish) {
        newState.fish++;
        let newFish: IVoteDetails[] = newState.fishDetails;
        newFish.push({
          order: newState.fishDetails.length,
          voter: "Densedy Isaguirre",
          votetime: moment().format("MMMM D,YYYY h:mm:ss a"),
        });
        newState.fishDetails = newFish;
      }

      return newState;

    case actionTypes.openDetails:
      if (action.data.choiceToOpen === gameTypes.checkers) {
        newState.openDetails = true;
        newState.voteDetails = newState.checkersDetails;
        newState.checkersOpen = true;
      }
      if (action.data.choiceToOpen === gameTypes.chess) {
        newState.openDetails = true;
        newState.voteDetails = newState.chessDetails;
        newState.chessOpen = true;
      }
      if (action.data.choiceToOpen === gameTypes.fish) {
        newState.openDetails = true;
        newState.voteDetails = newState.fishDetails;
        newState.fishOpen = true;
      }
      return newState;
  
    case actionTypes.closeDetails:
      newState.checkersOpen = false;
      newState.chessOpen = false;
      newState.fishOpen = false;
      newState.voteDetails = [];
      newState.openDetails = false;

      return newState;

    default:
      return state;
  }
};

export default voteAction;
