import * as yup from 'yup';
import type { RawForm } from './types';
import type { Options } from './options';
export const additionalDefinition = {
  version: 1,
  owner: 'MTS-13',
  heading: 'Additional Information',
  questions: [
    {
      owner: 'MTS-13-Q01',
      path: 'essentialRiskInformation',
      label: 'Please provide any information that you think is essential to the risk: ',
      maxLength: 1000,
    },
    {
      owner: 'MTS-13-Q02',
      path: 'carJockeyRadiusID',
      label: 'What is the maximum radius you require to operate within?',
    },
    {
      owner: 'MTS-13-Q03',
      path: 'restrictShuntersPolicyRadius',
      label: 'Do you wish to restrict the policy to a 100 metre radius? ',
    },
  ],
} as const;
export function additionalPredicates(raw: RawForm, options: Options) {
  const jockeyIDs =
    options.mtOccupations?.filter((row) => row.requireCarJockeyRadius).map((row) => row.value) ||
    [];
  const valetteIDs =
    options.mtOccupations?.filter((row) => row.requireShunterRadius).map((row) => row.value) || [];
  const motorTradeOnlyChoice = options.driverUsages?.find(
    (row) => !row.isSocialDomesticPleasure,
  )?.value;
  return {
    jockey: !!raw.occupations?.find((row) => jockeyIDs.includes(Number(row.occupationId))),
    shunter:
      raw.occupations?.length === 1 &&
      valetteIDs.includes(raw.occupations[0].occupationId as number | string) &&
      (raw.driverPlanId === 3 ||
        !raw.drivers?.find((driver) => driver.usageID !== motorTradeOnlyChoice)) &&
      (raw.coverLevelID === 3 || raw.coverIndemnityLimitOwnVehiclesID === 1),
  };
}
export function additionalDefaults(raw: RawForm) {
  return Object.fromEntries(additionalDefinition.questions.map((q) => [q.path, raw[q.path]]));
}
export function additionalSchema(jockey: boolean) {
  return yup.object({
    essentialRiskInformation: yup.string().notRequired(),
    carJockeyRadiusID: jockey ? yup.number().required().label('This') : yup.number().notRequired(),
    restrictShuntersPolicyRadius: yup.boolean().notRequired(),
  });
}
// MTS-13-R04/R05: both routes perform the same ordered explicit-null writes.
export function additionalProjection(
  values: Record<string, unknown>,
  predicates: ReturnType<typeof additionalPredicates>,
) {
  let data = { ...values };
  if (!predicates.shunter) data = { ...data, restrictShuntersPolicyRadius: null };
  if (!predicates.jockey) data = { ...data, carJockeyRadiusID: null };
  return data;
}
