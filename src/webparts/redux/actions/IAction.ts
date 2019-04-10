export enum actionTypes {
  vote,
  openDetails,
  closeDetails
}

export enum gameTypes {
  checkers,
  chess,
  fish,
}

export interface IVoteDetails {
  order: number;
  voter: string;
  votetime: string;
}

export interface IVoteData {
  gameType?: gameTypes;
  openDetails?: boolean;
  choiceToOpen?: number;
  voteDetails?: IVoteDetails[];
}

export interface IAction {
  type: actionTypes;
  data: IVoteData;
}