import { format } from 'date-fns';
import { es } from 'date-fns/locale/index';

export const formatDate = (date: Date) => {
  const dateFormat = 'dd MMM, yyy';

  return format(date, dateFormat, { locale: es });
};
