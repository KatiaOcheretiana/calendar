import { api } from "../axiosConfig/api";

export interface HolidayType {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
}

export class HolidaysService {
  static async getHolidaysUA(year: string) {
    const res = await api.get<HolidayType[]>(`PublicHolidays/${year}/UA`);
    return res.data;
  }

  static async getWorldWideHolidays() {
    const res = await api.get<HolidayType[]>("NextPublicHolidaysWorldwide");
    return res.data;
  }
}
