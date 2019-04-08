export enum actionTypes {
  vote,
  getVote
}

export enum gameTypes {
  checkers,
  chess,
  fish
}

export interface IVoteData {
  gameType: gameTypes;
}

export interface IAction {
  type: actionTypes;
  data: IVoteData;
}