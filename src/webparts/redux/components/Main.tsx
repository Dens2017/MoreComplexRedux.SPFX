import * as React from 'react';
import styles from './Redux.module.scss';

import { IReduxProps } from './IReduxProps';
import ReduxDetail from './ReduxDetail';
import ReduxDetail1 from './ReduxDetail1';

export default class Redux extends React.Component<IReduxProps, {}> {
  constructor(props: IReduxProps) {
    super(props);
  }

  public render(): React.ReactElement<IReduxProps> {
    return (
      <div>
        <ReduxDetail />
      </div>
    );
  }
}