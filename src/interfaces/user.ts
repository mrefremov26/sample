import { UserMode } from '@constants';

export type IUserMode = keyof typeof UserMode;

export type IUserCoin = 'USDT' | 'BTC' | 'ETH';

export type IReferralUser = {
  email: string;
  registeredAt: number;
  referralUserName: string;
};

export interface IUserMe {
  currency: string;
  email: string;
  fullName: string;
  language: string;
  uuid: string;
}

export interface IUserAuthGoogleResponse {
  tokenId?: string;
}
export interface IUserAuthFacebookResponse {
  accessToken?: string;
}
