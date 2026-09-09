import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(utc);dayjs.extend(customParseFormat);
export { dayjs };
export function manualDate(text:string):Date|undefined {
  if(!/^\d{2}\/\d{2}\/\d{4}$/.test(text))return undefined;
  const value=dayjs(text,'DD/MM/YYYY',true);
  return value.isValid()?value.utc(true).toDate():undefined;
}
export function pickedDate(value:dayjs.Dayjs,birth=false):Date {
  return (birth?value:value.startOf('day')).utc(true).toDate();
}
