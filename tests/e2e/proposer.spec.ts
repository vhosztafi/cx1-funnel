import {test,expect} from '@playwright/test';
test('MTS-01 / EDGE-01 valid synthetic proposer saves raw projection before Step 2 navigation',async({page})=>{
  await page.addInitScript(()=>{
    sessionStorage.setItem('authBroker','SYNTHETIC TEST ONLY');sessionStorage.setItem('motorTradeOptions',JSON.stringify({companyTypes:[{value:1,text:'Synthetic sole'}],proposerTitles:[{value:999,text:'Synthetic title'}]}));
    sessionStorage.setItem('motorTradeFormStore',JSON.stringify({state:{step:1,stepAsEnum:'step1',stepPath:['step1'],formData:{syntheticRetained:'fixture-only',consentTo:true,marketingConsent:[],marketingMethod:[999],proposerPolicyStartDate:new Date(Date.now()+86400000).toISOString(),isShortTerm:false,proposerCompanyTypeId:1,proposerTitleId:999,proposerName:'Synthetic',proposerSurname:'Fixture',proposerCompanyPartnershipName:'clear only on submit',proposerEmail:'fixture@example.test',proposerTelephoneNumber:'01234567890',proposerPostcode:'TEST1',proposershowAddress:true,proposerHouseNumber:'1',proposerStreet:'Synthetic Street',proposerCounty:'Synthetic County'}},version:0}));
  });
  await page.goto('/motortrade-roadrisks/steps/step1');await expect(page.getByRole('heading',{name:'Motor Trade Full Quote'})).toBeVisible();
  await expect(page.locator('.collapse.show input[name="proposerName"]')).toHaveValue('Synthetic');
  await page.getByRole('button',{name:'Save and Continue'}).click();await expect(page).toHaveURL('/motortrade-roadrisks/steps/step2');
  const state=await page.evaluate(()=>JSON.parse(sessionStorage.getItem('motorTradeFormStore')!).state);
  expect(state.formData).toMatchObject({syntheticRetained:'fixture-only',consentTo:true,marketingConsent:[],marketingMethod:[999],proposerCompanyPartnershipName:null});expect(state.stepPath).toEqual(['step1','step2']);
});
