import { enUS, ru } from 'date-fns/locale';
import { format } from 'date-fns';

import { LS } from '@utils/LS';

export const intlTime = new Intl.DateTimeFormat(undefined, {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false,
});

export const intlDateTime = new Intl.DateTimeFormat(undefined, {
  day: 'numeric',
  month: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false,
});

export const intlDay = new Intl.DateTimeFormat(undefined, {
  day: 'numeric',
});

export const intlMonth = new Intl.DateTimeFormat(undefined, {
  month: 'numeric',
});

/**
 * @return {string} type MM.DD HH:MM:SS
 * @param date - date of timestamp
 */
export const getDataTime = (date: Date | string | number): string => {
  let value: Date;
  if (typeof date === 'string' || typeof date === 'number') value = new Date(date);
  else value = date;

  return `${intlMonth.format(value)}.${intlDay.format(value)} ${intlTime.format(value)}`;
};

export const normalizeCardNumber = (value: string) => {
  return (
    value
      .replace(/\D/g, '')
      ?.match(/.{1,4}/g)
      ?.join(' ')
      .substr(0, 19) || ''
  );
};

export const normalizeCardExpire = (value: string) => {
  return (
    value
      .replace(/\D/g, '')
      ?.match(/.{1,2}/g)
      ?.join('/')
      .substr(0, 5) || ''
  );
};

export const normalizeCVV = (value: string) => {
  return value.replace(/\D/g, '').substr(0, 3) || '';
};

export const percentRound2 = (value: number): string => value.toFixed(2) + '%';

const roundFunctionFactory = (fractionDigits: number) => {
  return (num: number) => +num.toFixed(fractionDigits);
};

export const round = {
  to1: roundFunctionFactory(1),
  to2: roundFunctionFactory(2),
  to3: roundFunctionFactory(3),
  to4: roundFunctionFactory(4),
  to5: roundFunctionFactory(5),
  to6: roundFunctionFactory(6),
};

const formatterToInteger = new Intl.NumberFormat('en', {
  maximumFractionDigits: 0,
});

export const formatToPrettyIntegerNumber = (num: number) => formatterToInteger.format(num);

const locales = { enUS, ru };

/**
 * @description format date to format of string. it is wrapper of date-fns format module
 * @param date {number | Date}
 * @param formatStr
 */
export const formatDate = (date: number | Date, formatStr: string) => {
  const name = LS.lang.get() === 'ru' ? 'ru' : 'enUS';
  return format(date, formatStr, {
    locale: locales[name],
  });
};
