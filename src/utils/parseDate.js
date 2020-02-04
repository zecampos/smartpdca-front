import { formatISO } from 'date-fns';

function sendDate(d) {
  return formatISO(d, { representation: 'date' });
}

export { sendDate };
