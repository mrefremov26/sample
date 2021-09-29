import creditCardType from 'credit-card-type';
import { stringify } from 'query-string';

import { DEFAULT_CURRENCY, DEFAULT_LANG } from '@constants';
import { LS } from '@utils/LS';

/**
 * Вернет слово во множественном числе
 * @param number Количество
 * @param labelsArray Массив слов. Пример - [день, дня, дней]
 */
export function getPlural(number: number, labelsArray?: [string, string, string] | [string, string]) {
  if (!labelsArray) return '';
  if (labelsArray.length === 2) return number === 1 ? labelsArray[0] : labelsArray[1];
  if (number % 1) return [labelsArray[1]];
  if (number.toString().endsWith('1') && number !== 11) return labelsArray[0];
  else if (
    (number.toString().endsWith('2') || number.toString().endsWith('3') || number.toString().endsWith('4')) &&
    number !== 12 &&
    number !== 13 &&
    number !== 14
  ) {
    return labelsArray[1];
  } else return labelsArray[2];
}

/**
 * Определят ширину скроллбара в браузере. Независимо от того, если полоса прокрутки на элементе или нет
 */
export function getScrollbarWidth() {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  document.body.appendChild(outer);
  const inner = document.createElement('div');
  outer.appendChild(inner);
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  // @ts-ignore
  outer.parentNode.removeChild(outer);
  return scrollbarWidth;
}

/**
 * Возвращает текущую ширину полосы прокрутки документа
 */
export function getDocumentScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

/**
 * Возвращает рандомный цвет
 */
export function getRandomColor() {
  const letters = '0123456789ABCDEF'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/**
 *
 * @param obj - object with params
 * @return {string} - query for get reauest
 */
export function getQueryString(obj: any): string {
  let query = stringify(obj);
  if (query) query = '?' + query;
  return query;
}
export const checkLackOfEmailInPassword = ({ email, password }: { email: string; password: string }): boolean => {
  const name = email.split('@')?.[0]?.toLowerCase?.();
  if (name) {
    return !(password.toLowerCase().includes(name) || password.toLowerCase().includes(email));
  } else return !password.toLowerCase().includes(email);
};

export const sortByDate = (a: any, b: any) => new Date(a) >= new Date(b);
export const sortByNumber = (a: any, b: any) => Number.parseFloat(a) - Number.parseFloat(b);
export const sortByString = (a: any, b: any) => a.localeCompare(b);

export function getCreditCardType(cc: string) {
  const card = creditCardType(cc);

  return card[0] ? card[0].niceType : null;
}

export const getDefaultLang = () => LS.lang.get() ?? DEFAULT_LANG;
export const getDefaultCurrency = () => LS.currency.get() ?? DEFAULT_CURRENCY;

/**
 *
 * @param name - full url
 * @example name = https://www.binance.com/ => return binance.com
 */
export function extractNameOfExchangeFromURL(name: string) {
  let result = name;
  if (name.startsWith('https://')) {
    result = name.slice(8);
    if (result.startsWith('www.')) {
      result = result.slice(4);
    }
  }
  if (result.endsWith('/')) {
    result = result.slice(0, -1);
  }

  return result;
}
