import {describe,it,expect} from 'vitest';
import {businessSchema,requiresVatAssurance,submitBusiness,agreeBusiness} from '@/domain/business';
const synthetic={businessStartedDate:new Date('2020-01-01'),businessAnnualTurnover:90000,businessAnnualWageRoll:0,businessIsTradeAssociationMember:false,businessIsVATRegistered:false,businessNumberOfVehiclesHandlePerYear:1,businessNumberOfVehicleCapacity:0};
describe('MTS-03 business',()=>{
  it('Q01–09 independent requirements and unbounded capacity/currency',async()=>{
    const schema=businessSchema('2026-09-09');await expect(schema.validate(synthetic)).resolves.toMatchObject(synthetic);
    await expect(schema.validate({...synthetic,businessNumberOfVehicleCapacity:-1,businessAnnualTurnover:-1})).resolves.toMatchObject({businessNumberOfVehicleCapacity:-1,businessAnnualTurnover:-1});
    await expect(schema.validate({...synthetic,businessStartedDate:'1899-12-31'})).rejects.toThrow('Date cannot be earlier than 01/01/1900.');
    await expect(schema.validate({...synthetic,businessStartedDate:'2026-09-10'})).rejects.toThrow('This field must be at earlier than 09/09/2026.');
    await expect(schema.validate({...synthetic,businessNumberOfVehiclesHandlePerYear:0})).rejects.toThrow('This field must be greater than 0');
    await expect(schema.validate({...synthetic,businessIsTradeAssociationMember:true})).rejects.toThrow();
    await expect(schema.validate({...synthetic,businessIsVATRegistered:true,businessVATNumber:'x'.repeat(21)})).resolves.toHaveProperty('businessVATNumber','x'.repeat(21));
  });
  it('R03 £90000 inclusive watched-value gate; R04 independent handler effect order (CLR-004)',()=>{
    expect([89999,90000,'90000'].map(value=>requiresVatAssurance(value,false))).toEqual([false,true,true]);expect(requiresVatAssurance(90000,true)).toBe(false);
    const calls:unknown[]=[];const ports={save:(data:Record<string,unknown>)=>calls.push(['save',data]),next:()=>calls.push(['next']),assurance:(open:boolean)=>calls.push(['assurance',open])};
    submitBusiness(synthetic,90000,false,ports);expect(calls).toEqual([['assurance',true]]);calls.length=0;
    agreeBusiness(synthetic,ports);expect(calls).toEqual([['save',synthetic],['next'],['assurance',false]]);calls.length=0;
    submitBusiness(synthetic,89999,false,ports);expect(calls).toEqual([['save',synthetic],['next']]);
  });
});
