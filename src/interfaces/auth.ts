import { IUserMe } from '@interfaces/user';

export interface IRefreshToken {
  token: string;
  expiresInSecs: number;
}

export interface ISignIn {
  refresh: string;
  token: string;
  expiresInSecs: string;
  user: IUserMe;
}

export interface ISignUpData{
  email: string;
  referral_code?: string;
}

export interface ILoginData {
  email: string;
  password: string;
}