import type {AddressPorts} from '@/components/address-control';
// Missing local result channels stay pending. The confirmed uppercase/stripping
// runs in AddressControl; IMP-CLR-003 leaves the subsequent formatter unprovided.
export const unresolvedAddress:AddressPorts={lookup:()=>new Promise(()=>{}),select:()=>new Promise(()=>{}),formatPostcode:value=>value,delay:ms=>new Promise(resolve=>setTimeout(resolve,ms))};
