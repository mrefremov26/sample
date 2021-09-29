export type NoParamEndpointConstructor = () => string;
export type OneParamEndpointConstructor<T = number | string> = (id: T) => string;
export type OnePossibleParamEndpointConstructor = (id?: number | string) => string;
export type TwoParamEndpointConstructor = (one: number | string, second: number | string) => string;
export type ThreeParamEndpointConstructor = (
  one: number | string,
  second: number | string,
  third: number | string,
) => string;

export type MultipleParamsEndpointsConstructor<T> = (obj: T) => string;

export type ISuccessResponse = { success: true };
