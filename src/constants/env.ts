/**
 * @summary entry point of environment variables
 * @description there 2 types - check presence of variables and reexport to index
 */
export const API_URL = process.env.API_URL ?? '';
export const API_VERSION = process.env.API_VERSION ? `/${process.env.API_VERSION}` : '';
