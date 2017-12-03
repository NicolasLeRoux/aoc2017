module.exports = function (string) {
	let debut = 1,
		fin = 1,
		step = 0,
		i = 0;

	while (fin < +string) {
		step += i % 2 === 0 ? 1 : 0;

		[debut, fin] = [fin, fin + step];

		i++;
	}

	let half = Math.ceil((fin - debut) / 2);
	return Math.ceil((i - 1) / 4) + Math.abs(+string - (fin - half));
}
