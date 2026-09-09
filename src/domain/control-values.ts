// CTL-MT-08: JS code-unit limits with CRLF counting as two; do not split the pair.
export function normalizeTextarea(value:string, maxLength?:number):string {
  if (maxLength === undefined) return value;
  const normalized=value.replace(/\r\n/g,'\n').replace(/\r/g,'\n').replace(/\n/g,'\r\n');
  let result='', used=0;
  for(let i=0;i<normalized.length;i++) {
    const size=normalized[i]==='\r' && normalized[i+1]==='\n'?2:1;
    if(used+size>maxLength) break;
    result+=normalized.slice(i,i+size); used+=size; i+=size-1;
  }
  return result;
}
export function emitNumber(text:string, onChange:(value:number|''|null)=>void, makeNull?:boolean, callback?:()=>void) {
  const digits=text.replace(/\D/g,'');
  if(!digits) { onChange(makeNull?null:''); return; }
  onChange(Number(digits)); callback?.();
}
export function emitCurrency(unmasked:string, previous:string, onChange:(value:number|undefined)=>void, callback?:()=>void) {
  const number=Number(unmasked);
  const value=unmasked===''||Number.isNaN(number)?undefined:number;
  if((previous as unknown)!==value) onChange(value);
  callback?.();
}
export function emitPercentage(display:string, unmasked:string, numberFormat:boolean|undefined, onChange:(...values:unknown[])=>void, callback?:()=>void) {
  const numVal=Number(unmasked);
  if(numberFormat) onChange(Number(numVal));
  else onChange(display,unmasked===''||Number.isNaN(numVal)?undefined:numVal);
  callback?.();
}
export function nativeSelectValue(index:number,value:string,numberFormat?:boolean) { return index===0?undefined:numberFormat?Number(value):value; }
