import {IVoteDetails} from '../actions/IAction';
export interface IApplicationState {
  checkers?: number;
  chess?: number;
  fish?: number;
  openDetails?: boolean;
  voteDetails?: IVoteDetails[];
  checkersDetails?: IVoteDetails[];
  chessDetails?: IVoteDetails[];
  fishDetails?: IVoteDetails[];
  checkersOpen?: boolean;
  chessOpen?: boolean;
  fishOpen?: boolean;
}

export const initialState: IApplicationState = {
  checkers: 0,
  chess: 0,
  fish: 0,
  openDetails: false,
  voteDetails: [],
  checkersDetails: [],
  chessDetails: [],
  fishDetails: [],
  checkersOpen: false,
  chessOpen: false,
  fishOpen: false,
};