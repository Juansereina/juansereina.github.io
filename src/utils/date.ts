import { Lang } from '@/types/lang';
import { format } from 'date-fns';
import es from 'date-fns/locale/es';
import en from 'date-fns/locale/en-US';

export const formatDate = (date: Date, lang: Lang) => {
  const dateFormat = 'dd MMM, yyyy';
  const locale = lang === Lang.es ? es : en;

  return format(date, dateFormat, { locale });
};
