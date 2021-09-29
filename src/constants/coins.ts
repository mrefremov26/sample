export const DEFAULT_TICKERS_PAIR = 'BTC/USDT';

export const coinColors = ['#00BF70', '#8C54FF', '#FEBB01', '#FC2390', '#DDEE57', '#15086E', '#94C3D5', '#9F5302'];

export const MAIN_COINS = [
  { label: 'USDT', value: 'USDT' },
  { label: 'BTC', value: 'BTC' },
  { label: 'ETH', value: 'ETH' },
] as const;

export enum COINS {
  USDT = 'USDT',
  BTC = 'BTC',
  ETH = 'ETH',
}
