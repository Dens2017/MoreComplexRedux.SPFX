import * as React from 'react';
import styles from './ReduxDetail.module.scss';
import { IReduxDetailProps } from './IReduxProps';
import { IApplicationState } from '../reducers/IApplicationState';
import {IVoteDetails} from '../actions/IAction';

import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  SelectionMode,
  IColumn,
  DefaultButton,
  autobind
} from 'office-ui-fabric-react';

import {
  closeDetails
} from '../actions';

import ReduxDetail1 from './ReduxDetail1';

const columns: IColumn[] = [
  {
    key: 'column1',
    name: 'Order',
    ariaLabel: 'Column operations for File type, Press to sort on File type',
    isRowHeader: true,
    fieldName: 'order',
    minWidth: 16,
    maxWidth: 16,
    data: 'number',
    isPadded: true,
    onRender: (item: IVoteDetails) => {
      return <span>{item.order}</span>;
    }
  },
  {
    key: 'column2',
    name: 'Voter',
    fieldName: 'voter',
    minWidth: 210,
    maxWidth: 350,
    isRowHeader: true,
    data: 'string',
    isPadded: true,
    onRender: (item: IVoteDetails) => {
      return <span>{item.voter}</span>;
    }
  },
  {
    key: 'column3',
    name: 'Date Time Voted',
    fieldName: 'dateModifiedValue',
    minWidth: 70,
    maxWidth: 90,
    isRowHeader: true,
    data: 'number',
    onRender: (item: IVoteDetails) => {
      return <span>{item.votetime}</span>;
    },
    isPadded: true
  }
];

export default class ReduxDetail extends React.Component<IReduxDetailProps, {}> {

  constructor(props: IReduxDetailProps) {
    super(props);
  }

  public render(): React.ReactElement<IReduxDetailProps> {
    this.props.store.subscribe(this.render);
    const appState: IApplicationState = this.props.store.getState();

    return (
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            {(appState.openDetails) &&
              <DetailsList
                items={appState.voteDetails}
                compact={true}
                columns={columns}
                selectionMode={SelectionMode.none}
                setKey="set"
                layoutMode={DetailsListLayoutMode.justified}
                isHeaderVisible={true}
                selectionPreservedOnEmptyClick={true}
                enterModalSelectionOnTouch={true}
                ariaLabelForSelectionColumn="Toggle selection"
                ariaLabelForSelectAllCheckbox="Toggle selection for all items"
              />
            }
          </div>
          <div className={styles.column}>
            {(appState.openDetails) &&
              <DefaultButton
                primary
                // data-automation-id="test"
                disabled={false}
                text="Hide Details"
                onClick={this.hideDetails}
                className={styles.buttonFormats}
              />
            }
          </div>
        </div>
      </div>
    );
  }

  @autobind
  private hideDetails(): void {
    this.props.store.dispatch(closeDetails());
  }
}