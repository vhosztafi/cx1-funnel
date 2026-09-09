import {describe,it,expect,vi} from 'vitest';
import {render,screen,fireEvent} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {RuntimeContext} from '@/runtime/context';
import {createSession} from '@/domain/session';
import {PremisesSurface} from '@/surfaces/premises';
import {newPremise} from '@/domain/premises';
function mount(){const form=createSession();form.setStep(2);form.setData({tradingFromId:3,tradingPremises:[newPremise()],retainedFixture:true});vi.spyOn(window,'scrollTo').mockImplementation(()=>{});const result=render(<MemoryRouter initialEntries={['/motortrade-roadrisks/steps/step2']}><RuntimeContext.Provider value={{form,host:{},options:{},loading:false,setLoading:vi.fn(),surfaces:{}}}><PremisesSurface/></RuntimeContext.Provider></MemoryRouter>);return {...result,form};}
describe('MTS-02 mounted rows',()=>{
  it('U02 caps at five, preserves first row and removes a later row by index',()=>{
    mount();expect(screen.getByRole('heading',{name:'Trading Premise 1'})).toBeInTheDocument();expect(screen.queryByRole('button',{name:'X'})).toBeNull();
    for(let n=1;n<5;n++)fireEvent.click(screen.getByRole('button',{name:'Add another trading premises'}));
    expect(screen.getAllByRole('button',{name:'X'})).toHaveLength(4);expect(screen.queryByRole('button',{name:'Add another trading premises'})).toBeNull();
    fireEvent.click(screen.getAllByRole('button',{name:'X'})[1]);expect(screen.getAllByRole('button',{name:'X'})).toHaveLength(3);expect(screen.getByRole('button',{name:'Add another trading premises'})).toBeInTheDocument();
  });
  it('Document 02 MTS-02 Back persists invalid current values before navigation (IMP-CLR-006)',()=>{
    const {form,container}=mount();fireEvent.change(container.querySelector('input[maxlength="4"]')!,{target:{value:'0003'}});fireEvent.click(screen.getByRole('button',{name:'Go Back'}));
    expect(form.getSnapshot().formData.tradingPremises?.[0].tradingPremiseYearsTrading).toBe(3);expect(form.getSnapshot().formData.retainedFixture).toBe(true);expect(form.getSnapshot().step).toBe(1);
  });
});
