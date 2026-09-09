import {describe,it,expect,vi} from 'vitest';
import {render,screen,fireEvent,waitFor} from '@testing-library/react';
import {MemoryRouter,useLocation} from 'react-router-dom';
import {RuntimeContext,type HostInputs} from '@/runtime/context';
import {createSession} from '@/domain/session';
import {ProposerSurface} from '@/surfaces/proposer';
import type {RawForm} from '@/domain/types';

const syntheticOptions={companyTypes:[{value:1,text:'Synthetic sole'},{value:2,text:'Synthetic company'},{value:4,text:'Synthetic partnership'},{value:99,text:'Synthetic unsupported'}],proposerTitles:[{value:999,text:'Synthetic title'}],marketingMethods:[{value:999,text:'Synthetic method'}]};
function mount(raw:RawForm={},rtl=false,host:HostInputs={}){
  const form=createSession();form.setData(raw);
  function Location(){return <output data-testid="location">{useLocation().pathname}</output>;}
  const result=render(<MemoryRouter initialEntries={[`/motortrade-roadrisks${rtl?'-rtl':''}/steps/step1`]}><RuntimeContext.Provider value={{form,host:{now:()=>new Date('2026-09-09T12:00:00Z'),...host},options:syntheticOptions,loading:false,setLoading:vi.fn(),surfaces:{}}}><ProposerSurface/><Location/></RuntimeContext.Provider></MemoryRouter>);
  return {...result,form};
}
describe('MTS-01 mounted proposer',()=>{
  it('U01–05 and Q01–06 show exact common copy, RTL controls, source order and no Back',()=>{
    const {container}=mount({},true);expect(screen.getByRole('heading',{name:'Motor Trade Full Quote'})).toBeInTheDocument();
    expect(screen.getByText('Please fill out the following details to get a full quote.')).toBeInTheDocument();
    expect(screen.getByText('Direct Marketing')).toBeInTheDocument();expect(screen.getByText('Third Party Marketing')).toBeInTheDocument();
    expect(screen.queryByText('If so, how would you like to be contacted...')).toBeNull();
    fireEvent.click(container.querySelector('#marketingConsent-1')!);
    expect(screen.getByText('If so, how would you like to be contacted...')).toBeInTheDocument();
    expect(screen.getByText('Synthetic method')).toBeInTheDocument();
    expect(screen.queryByRole('button',{name:'Go Back'})).toBeNull();expect(screen.getByRole('button',{name:'Save and Continue'})).toHaveAttribute('type','submit');
  });
  it('Q06–14 / R02 preserves three mounted Collapse bodies, strict unsupported layout and lock exceptions',()=>{
    const {container}=mount({proposerCompanyTypeId:99,isProposerDetailsDisabled:true});
    expect(screen.getByRole('heading',{name:'Proposer Details'})).toBeInTheDocument();
    expect(container.querySelectorAll('.collapse')).toHaveLength(3);expect(container.querySelectorAll('.collapse.show')).toHaveLength(0);
    expect(screen.queryByText('Direct Marketing')).toBeNull();
    const input=(name:string)=>container.querySelector(`input[name="${name}"]`) as HTMLInputElement;
    expect(input('proposerEmail')).not.toBeDisabled();expect(input('proposerTelephoneNumber')).toBeDisabled();expect(input('proposerMobileNumber')).toBeDisabled();
    expect(input('proposerTradingName')).not.toBeDisabled();expect(input('proposerName')).toBeDisabled();
    expect(screen.getByRole('button',{name:'Lookup'})).toBeDisabled();
    expect(container.querySelectorAll('#Title')).toHaveLength(3);
  });
  it('Q11 company control maximum differs from partnership; shared field retains value',()=>{
    const {container}=mount({proposerCompanyTypeId:4,proposerCompanyPartnershipName:'Synthetic partnership'});
    const inputs=container.querySelectorAll('input[name="proposerCompanyPartnershipName"]');expect(inputs).toHaveLength(2);expect(inputs[0]).toHaveAttribute('maxlength','50');expect(inputs[1]).not.toHaveAttribute('maxlength');
    expect(inputs[1]).toHaveValue('Synthetic partnership');expect(inputs[1].closest('.collapse')).toHaveClass('show');
  });
  it('Q15–20 / R06 manual mode writes only form-local values until submit',async()=>{
    const {container,form}=mount({proposerCompanyTypeId:1});fireEvent.click(screen.getByText('Enter Manually'));
    expect(screen.getByText('House Number')).toBeInTheDocument();
    const postcode=screen.getByPlaceholderText('eg. SL4 1PD');fireEvent.change(postcode,{target:{value:'a!b 1'}});expect(postcode).toHaveValue('AB1');
    const addressInputs=container.querySelectorAll('.position-relative input');expect(addressInputs).toHaveLength(6);
    for(const input of Array.from(addressInputs).slice(1))expect(input).toHaveAttribute('maxlength','50');
    expect(form.getSnapshot().formData.proposershowAddress).toBeUndefined();
    fireEvent.click(screen.getByRole('button',{name:'Save and Continue'}));await waitFor(()=>expect(screen.getAllByText('This is a required field').length).toBeGreaterThan(0));
    expect(form.getSnapshot().step).toBe(1);
  });
});
