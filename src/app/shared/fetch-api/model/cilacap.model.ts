export interface CilacapModel {
  id?: string
  no?: number;
  year: string
  month: string
  dewpoint_2m_temperature: string
  maximum_2m_air_temperature: string
  mean_2m_air_temperature: string
  minimum_2m_air_temperature: string
  total_precipitation: string
  u_component_of_wind_10m: string
  v_component_of_wind_10m: string;
  month_date?: {
    day: string;
    month: string;
    year: string;
  }
}
