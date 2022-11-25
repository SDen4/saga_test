export async function requestWeather() {
  const response = await fetch(
    // eslint-disable-next-line max-len
    'https://api.open-meteo.com/v1/forecast?latitude=56.85&longitude=60.61&hourly=temperature_2m',
  ).then((res) => res.json());
  return response;
}

export async function requestCurrency(currency: string) {
  const baseUrl = 'https://api.exchangerate.host/latest';
  const queryParams = `base=USD&symbols=${currency}`;

  const response = await fetch(`${baseUrl}?${queryParams}`)
    .then((res) => {
      return res.json();
    })
    // eslint-disable-next-line no-console
    .catch((e) => console.log(e));

  return await response;
}
