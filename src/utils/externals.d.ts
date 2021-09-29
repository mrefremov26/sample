declare module 'redux-devtools-extension';
declare module '*.png' {
  const content: string;
  export default content;
}
declare module '*.jpg' {
  const content: string;
  export default content;
}
declare module '*.svg' {
  const content: any;
  export default content;
}

declare module 'rc-pagination/lib/locale/ru_RU';

declare module '*.css' {
  interface IClassNames {
    [className: string]: string;
  }

  const classNames: IClassNames;
  export = classNames;
}
