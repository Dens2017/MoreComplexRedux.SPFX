import * as React from 'react';
import styles from './Redux.module.scss';
import { IReduxProps } from './IReduxProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {
  DefaultButton,
  ProgressIndicator,
  ChoiceGroup,
  IChoiceGroupOption,
  autobind
} from 'office-ui-fabric-react';
import {
  voteChess,
  voteCheckers,
  voteFish,
  openDetails,
  closeDetails
} from '../actions';
import { gameTypes, actionTypes } from '../actions/IAction';
import { IApplicationState } from '../reducers/IApplicationState';
import ReduxDetail from './ReduxDetail';
import ReduxDetail1 from './ReduxDetail1';

export default class Redux extends React.Component<IReduxProps, {}> {
  constructor(props: IReduxProps) {
    super(props);
  }

  public componentDidMount() {

  }

  public render(): React.ReactElement<IReduxProps> {
    // this.props.store.subscribe(this.render)
    const appState: IApplicationState = this.props.store.getState();
    const percentCompleteCheckers: number = appState.checkers / 100;
    const percentCompleteChess: number = appState.chess / 100;
    const percentCompleteFish: number = appState.fish / 100;
    return (
      <div className={styles.redux}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.rowButtonFormats}>
                <DefaultButton
                  primary
                  // data-automation-id="test"
                  disabled={false}
                  text="Checkers"
                  onClick={this.clickedCheckers}
                  className={styles.buttonFormats}
                />
                <DefaultButton
                  primary
                  // data-automation-id="test"
                  disabled={false}
                  text="Chess"
                  onClick={this.clickedChess}
                  className={styles.buttonFormats}
                />
                <DefaultButton
                  primary
                  // data-automation-id="test"
                  disabled={false}
                  text="Go Fish"
                  onClick={this.clickedGoFish}
                  className={styles.buttonFormats}
                />
              </div>
              <div>
                <ProgressIndicator
                  label="Checkers"
                  description={"Count (" + appState.checkers + ")"}
                  percentComplete={percentCompleteCheckers}
                />
                <DefaultButton
                  disabled={false}
                  text={(appState.checkersOpen) ? "Hide Details" : "Show Details"}
                  onClick={this.showDetailCheckers}
                />
              </div>
              <div>
                <ProgressIndicator
                  label="Chess"
                  description={"Count (" + appState.chess + ")"}
                  percentComplete={percentCompleteChess}
                />
                <DefaultButton
                  disabled={false}
                  text={(appState.chessOpen) ? "Hide Details" : "Show Details"}
                  onClick={this.showDetailChess}
                />
              </div>
              <div>
                <ProgressIndicator
                  label="Go Fish"
                  description={"Count (" + appState.fish + ")"}
                  percentComplete={percentCompleteFish}
                />
                <DefaultButton
                  disabled={false}
                  text={(appState.fishOpen) ? "Hide Details" : "Show Details"}
                  onClick={this.showDetailFish}
                />
              </div>
            </div>
          </div>
        </div>
        <ReduxDetail store={this.props.store}></ReduxDetail>
      </div>
    );
  }

  @autobind
  private clickedCheckers() {
    this.props.store.dispatch(voteCheckers());
  }

  @autobind
  private clickedChess() {
    this.props.store.dispatch(voteChess());
  }

  @autobind
  private clickedGoFish() {
    this.props.store.dispatch(voteFish());
  }

  @autobind
  private showDetailCheckers(): void {
    this.props.store.dispatch(openDetails(gameTypes.checkers));
  }

  @autobind
  private showDetailChess(): void {
    this.props.store.dispatch(openDetails(gameTypes.chess));
  }

  @autobind
  private showDetailFish(): void {
    this.props.store.dispatch(openDetails(gameTypes.fish));
  }
}
