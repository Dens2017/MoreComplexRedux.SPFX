import * as React from 'react';
import styles from './Redux.module.scss';
import { IReduxDetailProps } from './IReduxProps';
import { IApplicationState } from '../reducers/IApplicationState';

export default class ReduxDetail1 extends React.Component<IReduxDetailProps, {}> {
  public render(): React.ReactElement<IReduxDetailProps> {
    // this.props.store.subscribe(this.render);
    // const appState: IApplicationState = this.props.store.getState();
    return (
      <div>
        test subcompnent 1
      </div>
    );
  }
}