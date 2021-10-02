import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'
  if (Object.keys(date).length !== 0 ||  typeof(date) !== "object") throw Error('Invalid date!');

  const seasons = [{season: 'winter', months: ['Dec', 'Jan', 'Feb']},
      {season: 'spring', months: ['Mar', 'Apr', 'May']},
      {season: 'summer', months: ['Jun', 'Jul', 'Aug']},
      {season: 'autumn', months: ['Sep', 'Oct', 'Nov']}
  ]

  const month = date.toLocaleString('en', {month: 'short'});
  return seasons.filter(s => s.months.includes(month)).shift().season
}
