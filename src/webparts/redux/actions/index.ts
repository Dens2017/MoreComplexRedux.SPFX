import {
  IAction,
  actionTypes,
  gameTypes,
  IVoteDetails
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

export const openDetails = (choiceToOpen: number): IAction => {
  const voteDetailsValue: IVoteDetails[] = [];
  return {
    type: actionTypes.openDetails,
    data: { 
      openDetails: true,
      choiceToOpen: choiceToOpen,
      voteDetails: voteDetailsValue,
      
     }
  };
};

export const closeDetails = (): IAction => {
  return {
    type: actionTypes.closeDetails,
    data: { 
      openDetails: false,
      voteDetails: [],
     }
  };
};