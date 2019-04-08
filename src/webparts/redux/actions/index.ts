import {
  IAction,
  actionTypes,
  gameTypes
} from './IAction';

export const voteCheckers = (): IAction => {
  return {
    type: actionTypes.vote,
    data: { gameType: gameTypes.checkers }
  };
};

export const voteChess = (): IAction => {
  return {
    type: actionTypes.vote,
    data: { gameType: gameTypes.chess }
  };
};

export const voteFish = (): IAction => {
  return {
    type: actionTypes.vote,
    data: { gameType: gameTypes.fish }
  };
};

export const getFish = (): IAction => {
  return {
    type: actionTypes.getVote,
    data: { 
      gameType: gameTypes.fish
     }
  };
};