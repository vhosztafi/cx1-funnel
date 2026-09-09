import {describe,it,expect,vi} from 'vitest';
import {render,screen,fireEvent} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {RuntimeContext} from '@/runtime/context';
import {createSession} from '@/domain/session';
import {CoverSurface} from '@/surfaces/cover';
import type {RawForm} from '@/domain/types';
function mount(raw:RawForm={}){const form=createSession();form.setStep(5);form.setData(raw);vi.spyOn(window,'scrollTo').mockImplementation(()=>{});const result=render(<MemoryRouter initialEntries={['/motortrade-roadrisks/steps/step5']}><RuntimeContext.Provider value={{form,host:{},options:{coverLevels:[{value:1,text:'Synthetic level 1'},{value:3,text:'Synthetic level 3'}]},loading:false,setLoading:vi.fn(),surfaces:{}}}><CoverSurface/></RuntimeContext.Provider></MemoryRouter>);return {...result,form};}
describe('MTS-05 mounted cover',()=>{
  it('Q01–10 strict cover branch and fixed disabled defaults without synthetic option rows',()=>{
    const {container}=mount({coverLevelID:1});expect(screen.getByRole('heading',{name:'Limit of Indemnity'})).toBeInTheDocument();expect(screen.getByRole('heading',{name:'Excess'})).toBeInTheDocument();
    expect(container.querySelector('#opt_coverAddAllSectionsExcess_false')).toBeChecked();expect(container.querySelector('#opt_coverAddAllSectionsExcess_false')).toBeDisabled();expect(container.querySelector('#late-notification-excess')).toBeDisabled();
    expect(screen.queryByText('Customer vehicles')).toBeNull();expect(screen.queryByText('Customer Loan Vehicle Count:')).toBeNull();
    fireEvent.click(screen.getByLabelText('Synthetic level 3'));expect(screen.queryByRole('heading',{name:'Limit of Indemnity'})).toBeNull();expect(screen.getByRole('heading',{name:'No Claims Bonus'})).toBeInTheDocument();
  });
  it('R08 Back saves unnormalized answers and leaves drivers untouched',()=>{
    const drivers=[{guid:'synthetic',ageAdditionalExcess:999}];const {form}=mount({coverLevelID:3,coverNCBID:1,coverNCBEarnedID:3,coverIndemnityLimitOwnVehiclesID:99,drivers});fireEvent.click(screen.getByRole('button',{name:'Go Back'}));
    expect(form.getSnapshot().formData).toMatchObject({coverIndemnityLimitOwnVehiclesID:99,coverNCBEarnedID:3,drivers});expect(form.getSnapshot().step).toBe(4);
  });
  it('Q16 repeated Collapse remains mounted; Q17 independently mounts disabled in MTA',()=>{
    const {container}=mount({coverNCBID:2,coverNCBEarnedID:3,coverNCBPreviousInsurerId:99,isMta:true,coverIsNCBProtected:false});expect(screen.getByText('Please provide details')).toBeInTheDocument();expect(container.querySelector('input[name="coverNCBPreviousInsurerOther"]')?.closest('.collapse')).not.toHaveClass('show');expect(container.querySelector('#opt_coverIsNCBProtected_false')).toBeDisabled();expect(container.querySelectorAll('#no-claims-bonus')).toHaveLength(2);
  });
});
