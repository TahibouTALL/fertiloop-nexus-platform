
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

export const formatDate = (date: Date | string, formatStr: string = 'PPP'): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, formatStr, { locale: fr });
};

export const formatDateTime = (date: Date | string, formatStr: string = 'Pp'): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, formatStr, { locale: fr });
};

export const formatRelativeTime = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
  
  if (diffInSeconds < 60) {
    return 'il y a quelques secondes';
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `il y a ${hours} heure${hours > 1 ? 's' : ''}`;
  } else {
    return format(dateObj, 'dd MMMM', { locale: fr });
  }
};
