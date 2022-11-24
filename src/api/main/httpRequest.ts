import { API } from '../api';

export async function httpRequest() {
  const response = await API.get(
    // eslint-disable-next-line max-len
    'https://api.open-meteo.com/v1/forecast?latitude=56.85&longitude=60.61&hourly=temperature_2m',
  ).then((res) => res.data);
  return response;
}
