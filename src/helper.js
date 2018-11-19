import moment from 'moment';

export const getDateParts = date => {
  const m = moment(date);
  return {
    day: m.format('ddd'),
    shortDate: m.format('ddd, MMM DD'),
    time: m.format('h:mm A'),
  };
};

export const capitalizeWords = words =>
  words
    .split(' ')
    .map(word => word[0].toUpperCase().concat(word.slice(1).toLowerCase()))
    .join(' ');

export const getCardinalDirection = degree => {
  const index = Math.floor(degree / 22.5 + 0.5) % 16;
  const direction = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW',
  ];
  return direction[index];
};
