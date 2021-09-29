import axios from 'axios';
import { endpoints } from '@api/endpoints';
import type { ISignIn, ISuccessResponse, ISignUpData, ILoginData } from '@interfaces';

async function signup(payload: ISignUpData): Promise<ISignIn> {
  const { data } = await axios({
    method: 'POST',
    url: endpoints.auth.signup(),
    data: payload,
  });
  return data;
}

async function login(payload: ILoginData): Promise<ISignIn> {
  const { data } = await axios({
    method: 'POST',
    url: endpoints.auth.login(),
    data: payload,
  });
  return data;
}

async function resetLink(email: string): Promise<ISuccessResponse> {
  const { data } = await axios({
    method: 'POST',
    url: endpoints.auth.getResetLink(),
    data: {
      email,
    },
  });
  return data;
}

export const APIAuth = {
  signup,
  login,
  resetLink,
};
