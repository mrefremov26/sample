import { API_VERSION } from '@constants';
import { NoParamEndpointConstructor } from '@interfaces';

const base = `${API_VERSION}/auth`;
const signup = 'signup';
const login = 'signin';
const forgot = 'forgot';

interface Endpoints {
  signup: NoParamEndpointConstructor;
  login: NoParamEndpointConstructor;
  getResetLink: NoParamEndpointConstructor;
}

export const authEndpoints: Endpoints = {
  signup: () => `${base}/${signup}`,
  login: () => `${base}/${login}`,
  getResetLink: () => `${base}/${forgot}`,
};
