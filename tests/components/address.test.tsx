import {describe,it,expect,vi} from 'vitest';
import {render,screen,fireEvent,waitFor} from '@testing-library/react';
import {AddressControl,type AddressPorts} from '@/components/address-control';
const fields=[{path:'house',label:'House Number'},{path:'street',label:'Street'},{path:'town',label:'Town'},{path:'city',label:'City'},{path:'county',label:'County'}];
function mount(variant:'proposer'|'premise'|'driver',defaults:Record<string,unknown>={},ports?:Partial<AddressPorts>){
  const calls:unknown[]=[];const setValue=vi.fn((...args)=>calls.push(['setValue',...args]));const clearError=vi.fn();const trigger=vi.fn((...args)=>calls.push(['trigger',...args]));const setError=vi.fn();
  const result=render(<AddressControl variant={variant} postcodePath="postcode" showAddressPath="showAddress" label="Postcode:" fields={fields} values={defaults} defaults={defaults} setValue={setValue} errors={{}} setError={setError} clearError={clearError} trigger={trigger} ports={{lookup:async()=>[{text:'Synthetic address',value:999}],select:async()=>({house:'Synthetic house',street:'Synthetic street'}),formatPostcode:v=>v,delay:async ms=>{calls.push(['delay',ms]);},...ports}}/>);return {...result,calls,setValue,clearError,trigger,setError};
}
describe('CTL-MT-17–19 address callbacks',()=>{
  it('initial postcode normalizes display without writing raw values; proposer mode follows postcode presence',()=>{
    const {container,setValue,clearError}=mount('proposer',{postcode:'a !b1'});expect(screen.getByDisplayValue('AB1')).toBeInTheDocument();expect(screen.getByText('House Number')).toBeInTheDocument();expect(setValue).not.toHaveBeenCalled();
    fireEvent.change(container.querySelector('input')!,{target:{value:'z @z9'}});expect(setValue).toHaveBeenCalledWith('postcode','ZZ9');expect(clearError).toHaveBeenCalledWith('postcode');
  });
  it('empty Lookup triggers only postcode validation',()=>{const {trigger,setValue}=mount('proposer');fireEvent.click(screen.getByRole('button',{name:'Lookup'}));expect(trigger).toHaveBeenCalledWith('postcode');expect(setValue).not.toHaveBeenCalled();});
  it('selection waits 10ms before ordered writes and triggers, retaining undefined returned fields',async()=>{
    const {calls,container}=mount('proposer',{postcode:'TEST1'});fireEvent.click(screen.getByRole('button',{name:'Lookup'}));await screen.findByText('Synthetic address');expect(screen.queryByText('House Number')).toBeNull();expect(container.querySelector('li')).not.toHaveAttribute('tabindex');
    fireEvent.click(screen.getByText('Synthetic address'));await screen.findByText('House Number');expect(calls).toEqual([['delay',10],['setValue','house','Synthetic house'],['setValue','street','Synthetic street'],['setValue','town',undefined],['setValue','city',undefined],['setValue','county',undefined],['setValue','showAddress',true],...fields.map(f=>['trigger',f.path])]);
  });
  it('rejection sets exact field error',async()=>{const {setError}=mount('proposer',{postcode:'TEST1'},{lookup:async()=>{throw new Error('synthetic failure');}});fireEvent.click(screen.getByRole('button',{name:'Lookup'}));await waitFor(()=>expect(setError).toHaveBeenCalledWith('postcode','Address not found'));});
  it('CTL-MT-18 uses showAddress while CTL-MT-19 uses any default property',()=>{
    const premise=mount('premise',{postcode:'TEST1'});expect(screen.queryByText('House Number')).toBeNull();premise.unmount();mount('driver',{unrelated:true});expect(screen.getByText('House Number')).toBeInTheDocument();
  });
});
