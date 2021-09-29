export { IRefreshToken, ISignIn, ISignUpData, ILoginData } from '@interfaces/auth';

export type { IError } from '@interfaces/error';

export type {
  NoParamEndpointConstructor,
  OneParamEndpointConstructor,
  OnePossibleParamEndpointConstructor,
  TwoParamEndpointConstructor,
  MultipleParamsEndpointsConstructor,
  ISuccessResponse,
} from '@interfaces/request';

export type {
  IUserMode,
  IUserCoin,
  IUserAuthGoogleResponse,
  IUserAuthFacebookResponse,
  IReferralUser,
  IUserMe,
} from '@interfaces/user';
