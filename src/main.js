import ms from 'ms';
import lunchtime from './lunchtime.js';
import millisecondsUntil from './millisecondsUntil.js';

new Promise(resolve => resolve())
		.then(_=> console.log('lol'));

function howLongUntilLunch(hours = 12, minutes = 30) {
	const millisecondsUntilLunchTime = millisecondsUntil(lunchtime(hours, minutes));
	return ms(millisecondsUntilLunchTime, { long: true });
}

export {
	howLongUntilLunch,
	millisecondsUntil,
	lunchtime
}