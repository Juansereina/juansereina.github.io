import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export const formatDate = (date: Date) => {
  const dateFormat = 'dd MMM, yyyy';

  return format(date, dateFormat, { locale: es });
};
