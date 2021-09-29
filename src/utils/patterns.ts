/**
 * @summary  reusable patterns
 * @property password - check password on has at least 1 number, 1 one letter and 1 special character
 */

export const patterns = {
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*_#?&])[A-Za-z\d@$!%*_#?&]{8,}$/,
  name: /.{3,}/,
  float: /[0-9.]*/,
  otp: /^[0-9]{6}$/,
};
