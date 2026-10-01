import type { Options, OptionCollection } from '@/domain/options';
import type { RawForm } from '@/domain/types';
import declaration from '@/contracts/declaration/pairs.json';
import { dayjs } from '@/domain/dates';

// Demo-only sample answers, never production defaults or historical evidence.
export function createDemoSample(options: Options, now = new Date()): RawForm {
  const pick = (collection: OptionCollection, label: string) => {
    const row = options[collection]?.find((item) => item.text === label);
    if (!row) throw new Error(`Sample option unavailable: ${label}`);
    return row;
  };
  const own = pick('indemnityOwnVehicles', '£15,000');
  const excess = own.excesses?.find((row) => row.isDefault);
  if (!excess) throw new Error('Sample excess unavailable');
  return {
    proposerPolicyStartDate: dayjs(now).add(1, 'day').format('YYYY-MM-DD'),
    proposerPolicyStartTime: '09:00',
    isShortTerm: false,
    proposerCompanyTypeId: pick('companyTypes', 'Sole Trader').value,
    proposerTitleId: pick('proposerTitles', 'Mr').value,
    proposerName: 'Alex',
    proposerSurname: 'Demo',
    proposerEmail: 'alex.demo@example.test',
    proposerTelephoneNumber: '01632960000',
    proposerPostcode: 'SW1A1AA',
    proposershowAddress: true,
    proposerHouseNumber: '1',
    proposerStreet: 'Mock Street',
    proposerTown: 'Mock Town',
    proposerCity: 'Mock City',
    proposerCounty: 'Mock County',
    consentTo: false,
    tradingFromId: pick('tradingFroms', 'Home').value,
    tradingPremises: [],
    businessStartedDate: dayjs(now).subtract(5, 'year').format('YYYY-MM-DD'),
    businessAnnualTurnover: 50000,
    businessAnnualWageRoll: 0,
    businessIsTradeAssociationMember: false,
    businessIsVATRegistered: false,
    businessNumberOfVehiclesHandlePerYear: 20,
    businessNumberOfVehicleCapacity: 5,
    occupations: [
      {
        occupationId: pick('mtOccupations', 'Buying & Selling of Standard Cars & Vans').value,
        percentage: 100,
      },
    ],
    coverLevelID: pick('coverLevels', 'Comprehensive').value,
    coverIndemnityLimitOwnVehiclesID: own.value,
    coverExcessID: excess.value,
    coverAddAllSectionsExcess: false,
    coverExcessLateID: options.excessLates?.[0]?.value,
    coverRemoveCoInsuraneExcess: false,
    requireCustomerLoanCover: false,
    coverNCBID: pick('noClaimBonuses', 'No NCB').value,
    driverPlanId: pick('driverPlans', 'Any Driver').value,
    aadDriverNumber: 1,
    aadDriverMinAgeId: pick('aadDriverMinAge', '25').value,
    aadDriverMaxAgeId: pick('aadDriverMaxAge', '65').value,
    aadMaxVehicleGroupingID: pick('aadMaxVehicleGrouping', 'Group 28').value,
    aadMaxVehicleGvwID: pick('aadMaxVehicleGvw', '3.5T').value,
    aadMaxMotorcycleCcID: pick('aadMaxMotorcycleCc', 'None').value,
    drivers: [],
    vehicles: [],
    specifiedVehicles: [],
    addSpecifiedVehicle: false,
    tradePlateCovered: false,
    tradePlateMaxNumber: 0,
    tradePlateNumbers: [],
    standardCars: true,
    percentageOfStandardCars: 100,
    lossOfUseCover: false,
    vehiclesAtSubcontractorsCover: false,
    thirdPartyPropertyDamageCoverTypeID: pick('thirdPartyDamageLimits', '£2 Million').value,
    ...Object.fromEntries(declaration.pairs.map((pair) => [pair.path, false])),
    essentialRiskInformation: 'Fictional demo data only.',
  };
}
