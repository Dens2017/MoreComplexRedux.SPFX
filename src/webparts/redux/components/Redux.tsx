import * as React from 'react';
import styles from './Redux.module.scss';
import { IReduxProps, IReduxState } from './IReduxProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Store } from 'redux';
import {
  DefaultButton,
  ProgressIndicator,
  autobind
} from 'office-ui-fabric-react';
import {
  voteChess, 
  voteCheckers, 
  voteFish
} from '../actions';
import { IApplicationState } from '../reducers/IApplicationState';

export default class Redux extends React.Component<IReduxProps, IReduxState> {

  constructor(props: IReduxProps) {
    super(props);
    this.state = {
      checkers: 0,
      chess: 0,
      fish: 0
    };
  }

  public async componentDidMount() {
    // const appState: Store = this.props.store;
    // const appStateData: IApplicationState = appState.getState();
    // this.setState({ 
    //   checkers: appStateData.checkers,
    //   chess: appStateData.chess,
    //   fish: appStateData.fish
    //  });
  }

  public render(): React.ReactElement<IReduxProps> {
    this.props.store.subscribe(this.render);
    const appState: IApplicationState = this.props.store.getState();
    const percentCompleteCheckers: number = appState.checkers/100;
    const percentCompleteChess: number = appState.chess/100;
    const percentCompleteFish: number = appState.fish/100;
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
              </div>
              <div>
                <ProgressIndicator
                  label="Chess"
                  description={"Count (" + appState.chess + ")"}
                  percentComplete={percentCompleteChess}
                />
              </div>
              <div>
                <ProgressIndicator
                  label="Go Fish"
                  description={"Count (" + appState.fish + ")"}
                  percentComplete={percentCompleteFish}
                />
              </div>
            </div>
          </div>
        </div>
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
}
