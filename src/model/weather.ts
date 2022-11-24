export type WeatherAllDataType = {
  'latitude': number | null;
  'longitude': number | null;
  'generationtime_ms': number | null;
  'utc_offset_seconds': number | null;
  'timezone': string | null;
  'timezone_abbreviation': string | null;
  'elevation': number | null;
  'hourly_units': {
    'time': string | null;
    'temperature_2m': string | null;
  };
  'hourly': {
    'time': string[];
    'temperature_2m': number[];
  };
};

export type WeatherChartItem = { name: string; temp: number };
