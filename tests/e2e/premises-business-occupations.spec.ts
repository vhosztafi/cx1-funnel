import {test,expect} from '@playwright/test';
test.beforeEach(async({page})=>{
  await page.addInitScript(()=>{
    sessionStorage.setItem('authBroker','SYNTHETIC TEST PRESENCE ONLY');
    sessionStorage.setItem('motorTradeOptions',JSON.stringify({tradingFroms:[{value:3,text:'Synthetic origin'}],mtOccupations:[{value:999,text:'Synthetic occupation'},{value:998,text:'Synthetic second occupation'}]}));
    sessionStorage.setItem('motorTradeFormStore',JSON.stringify({state:{step:2,stepAsEnum:'step2',stepPath:['step1','step2'],formData:{proposerPolicyStartDate:'2026-09-10',tradingFromId:3,tradingPremises:[],businessStartedDate:'2020-01-01',businessAnnualTurnover:89999,businessAnnualWageRoll:0,businessIsTradeAssociationMember:true,businessTradeAssociationName:'Synthetic association',businessIsVATRegistered:true,businessVATNumber:'SYNTHETIC VAT',businessNumberOfVehiclesHandlePerYear:1,businessNumberOfVehicleCapacity:0,occupations:[{occupationId:999,percentage:100}]}},version:0}));
  });
});
test('MTS-02–04 / EDGE-02/03 empty premises accepted, negative callbacks and occupation percentage resets',async({page})=>{
  await page.goto('/motortrade-roadrisks/steps/step2');await expect(page.getByRole('heading',{name:'Premises Details'})).toBeVisible();
  await page.getByRole('button',{name:'Save and Continue'}).click();await expect(page).toHaveURL('/motortrade-roadrisks/steps/step3');
  await page.locator('label[for="opt_businessIsTradeAssociationMember_false"]').click();await page.locator('label[for="opt_businessIsVATRegistered_false"]').click();
  await expect(page.locator('input[name="businessTradeAssociationName"]')).toHaveCount(0);await expect(page.locator('input[name="businessVATNumber"]')).toHaveCount(0);
  await page.getByRole('button',{name:'Save and Continue'}).click();await expect(page).toHaveURL('/motortrade-roadrisks/steps/step4');
  expect(await page.evaluate(()=>JSON.parse(sessionStorage.getItem('motorTradeFormStore')!).state.formData)).toMatchObject({businessTradeAssociationName:null,businessVATNumber:''});
  await expect(page.getByRole('heading',{name:'Occupation 1: Synthetic occupation'})).toBeVisible();await expect(page.getByText('Occupation Percentage:',{exact:false})).toHaveCount(0);
  await page.getByRole('button',{name:'Add another occupation'}).click();await expect(page.locator('#businessActivity')).toHaveCount(2);await expect(page.getByText('Occupation Percentage:',{exact:false})).toHaveCount(2);
  await page.getByRole('button',{name:'X',exact:true}).click();await expect(page.getByText('Occupation Percentage:',{exact:false})).toHaveCount(0);
  await page.getByRole('button',{name:'Save and Continue'}).click();await expect(page).toHaveURL('/motortrade-roadrisks/steps/step5');
  expect(await page.evaluate(()=>JSON.parse(sessionStorage.getItem('motorTradeFormStore')!).state.formData.occupations)).toEqual([{occupationId:999,percentage:100}]);
});
test('MTS-03-U02 exact dialog markup and independent Disagree callback (CLR-004)',async({page})=>{
  await page.goto('/motortrade-roadrisks/steps/step2');await page.getByRole('button',{name:'Save and Continue'}).click();
  await page.locator('label[for="opt_businessIsVATRegistered_false"]').click();
  const turnover=page.locator('.input-group').filter({has:page.getByText('£',{exact:true})}).first().locator('input');await turnover.fill('90000');
  await page.getByRole('button',{name:'Save and Continue'}).click();const dialog=page.getByRole('dialog');await expect(dialog).toBeVisible();
  await expect(dialog).toHaveAttribute('aria-labelledby','alert-dialog-title');await expect(dialog.locator('#alert-dialog-title')).toHaveCount(0);
  await expect(dialog.getByRole('button')).toHaveText(['Disagree','Agree']);for(const name of ['Disagree','Agree'])await expect(dialog.getByRole('button',{name,exact:true})).toHaveAttribute('type','submit');
  expect(await page.evaluate(()=>JSON.parse(sessionStorage.getItem('motorTradeFormStore')!).state.formData.businessAnnualTurnover)).toBe(89999);
  await dialog.getByRole('button',{name:'Disagree',exact:true}).click();await expect(dialog).not.toBeVisible();
});
