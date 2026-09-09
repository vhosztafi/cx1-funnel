import {describe,it,expect,vi} from 'vitest';
import {render,screen,fireEvent} from '@testing-library/react';
import {MemoryRouter,useLocation} from 'react-router-dom';
import {Home} from '@/components/home';
import {Navigator} from '@/components/navigator';
describe('root and shared navigation',()=>{
  it('ROOT-002–007 exact composition, links, order and SPA entry',()=>{
    function Location(){return <output data-testid="location">{useLocation().pathname}</output>;}
    const {container}=render(<MemoryRouter><Home/><Location/></MemoryRouter>);
    expect(screen.getByAltText('CG logo').closest('a')).toBeNull();expect(screen.getByRole('heading',{level:3})).toHaveTextContent(/^Products$/);
    expect(container.querySelector('h3')?.nextElementSibling?.tagName).toBe('UL');
    const links=screen.getAllByRole('link');expect(links.map(a=>[a.textContent,a.getAttribute('href')])).toEqual([['Commercial combined','/commercial-combined/steps/step1'],['Motor Trade','/motortrade-roadrisks/steps/step1']]);
    fireEvent.click(links[1]);expect(screen.getByTestId('location')).toHaveTextContent('/motortrade-roadrisks/steps/step1');
  });
  it('SHR-MT-R07 shared submit precedes Back and Back persists before moving',()=>{
    const calls:string[]=[];const {rerender}=render(<Navigator step={1} previous={vi.fn()}/>);expect(screen.getAllByRole('button')).toHaveLength(1);expect(screen.getByRole('button')).toHaveAttribute('type','submit');
    rerender(<Navigator step={14} text="Submit" prev={()=>calls.push('prev')} previous={()=>calls.push('previous')}/>);expect(screen.getAllByRole('button').map(b=>b.textContent)).toEqual(['Submit','Go Back']);fireEvent.click(screen.getByRole('button',{name:'Go Back'}));expect(calls).toEqual(['prev','previous']);
  });
});
