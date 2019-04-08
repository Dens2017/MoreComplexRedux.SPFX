declare interface IReduxWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'ReduxWebPartStrings' {
  const strings: IReduxWebPartStrings;
  export = strings;
}
