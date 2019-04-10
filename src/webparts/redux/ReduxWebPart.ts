import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import {
  Store,
  createStore,
  applyMiddleware
} from 'redux';

import * as strings from 'ReduxWebPartStrings';
import Redux from './components/Redux';
import Main from './components/Main';
import ReduxDetail from './components/ReduxDetail';
import { IReduxProps, IReduxDetailProps } from './components/IReduxProps';

import {
  IApplicationState
} from './reducers/IApplicationState';
import voteAction from '../redux/reducers';

export interface IReduxWebPartProps {
  description: string;
}

export default class ReduxWebPart extends BaseClientSideWebPart<IReduxWebPartProps> {

  private store: Store<IApplicationState>;

  protected onInit(): Promise<void> {
    this.store = createStore(voteAction);
    return super.onInit();
  }

  public render(): void {
    this.store.subscribe(this.render);
    const element: React.ReactElement<IReduxProps> = React.createElement(
      Redux,
      {
        description: this.properties.description,
        store: this.store
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
