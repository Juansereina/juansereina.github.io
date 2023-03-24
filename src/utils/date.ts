import { Lang } from '@/types/lang';
import { format } from 'date-fns';
// @ts-ignore
import { es } from 'date-fns/locale/index';
import en from 'date-fns/locale/en-US/index';

export const formatDate = (date: Date, lang: Lang) => {
  const dateFormat = 'dd MMM, yyyy';
  const locale = lang === Lang.es ? es : en;

  return format(date, dateFormat, { locale });
};
