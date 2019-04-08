export interface IApplicationState {
  checkers: number;
  chess: number;
  fish: number;
}

export const initialState: IApplicationState = {
  checkers: 0,
  chess: 0,
  fish: 0
};