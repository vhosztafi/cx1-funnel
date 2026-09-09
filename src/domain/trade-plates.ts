import * as yup from 'yup';
import type { RawForm, RawVehicle, RouteState } from './types';
export interface TradePlatesForm {
  tradePlateCovered?: boolean | null;
  tradePlateMaxNumber?: number | string | null;
  tradePlateNumbers: { plateNumber?: string }[];
}
export const tradePlatesDefinition = {
  version: 1,
  owner: 'MTS-07',
  heading: 'Trade Plates',
  questions: [
    {
      owner: 'MTS-07-Q01',
      path: 'tradePlateCovered',
      label: 'Do you require Trade Plates to be covered?',
    },
    { owner: 'MTS-07-Q02', path: 'tradePlateMaxNumber', label: 'How Many?' },
    {
      owner: 'MTS-07-Q03',
      path: 'tradePlateNumbers',
      label: 'Trade Plate Number:',
      rowHeading: 'Trade Plate ',
      remove: 'X',
      newRow: { plateNumber: '' },
      addLimit: 150,
    },
  ],
} as const;
export function tradePlatesDefaults(raw: RawForm): TradePlatesForm {
  return {
    ...Object.fromEntries(
      ['tradePlateCovered', 'tradePlateMaxNumber']
        .filter((key) => raw[key] !== null)
        .map((key) => [key, raw[key]]),
    ),
    tradePlateNumbers: raw.tradePlateNumbers || [],
  };
}
export function tradePlatesDisabled(raw: RawForm, existingTradePlates: unknown) {
  return !!(raw.isMta && existingTradePlates);
}
export function tradePlatesSchema() {
  return yup.object({
    tradePlateCovered: yup.boolean().required().label('This'),
    tradePlateMaxNumber: yup
      .number()
      .typeError('This is a required field')
      .when('tradePlateCovered', {
        is: true,
        then: (s) =>
          s
            .required('This is a required field')
            .min(1, 'This field must be greater than 0')
            .max(999, 'This field must be less than or equal to 999'),
        otherwise: (s) => s.notRequired(),
      })
      .test('plate-count', function (value) {
        return (
          !value ||
          !this.parent.tradePlateNumbers?.length ||
          value >= this.parent.tradePlateNumbers.length ||
          this.createError({
            message:
              'Indicated number of trade plate numbers must be greater than or equal to the number of trade plates below',
          })
        );
      }),
    tradePlateNumbers: yup
      .array()
      .of(yup.object({ plateNumber: yup.string().required().label('This') }))
      .notRequired()
      .test(
        'unique-plates',
        'The trade plates need to be unique',
        (rows) =>
          !rows ||
          new Set(rows.map((row) => row.plateNumber?.toLowerCase().replace(/ /g, ''))).size ===
            rows.length,
      ),
  });
}
export interface TradePlatePorts {
  save: (data: Partial<RawForm>) => void;
  scroll: () => void;
  setStep: (step: 6 | 8) => void;
  route: (state: RouteState, step: 6 | 8) => void;
  validate: (vehicle: RawVehicle, index: number, raw: RawForm) => Promise<unknown>;
}
// MTS-07-R03 / EDGE-07: persist before selecting the destination; no vehicles opens LIST.
export async function submitTradePlates(
  data: TradePlatesForm,
  raw: RawForm,
  ports: TradePlatePorts,
) {
  ports.save({ ...data });
  if (raw.vehicles?.length) {
    ports.scroll();
    for (let index = 0; index < raw.vehicles.length; index++)
      try {
        await ports.validate(raw.vehicles[index], index, raw);
      } catch {
        ports.setStep(8);
        ports.route({ editingVehicle: index, editing: true, navigateList: true }, 8);
        return;
      }
  }
  ports.setStep(8);
  ports.route({ showVehicles: true }, 8);
}
export function backTradePlates(data: TradePlatesForm, raw: RawForm, ports: TradePlatePorts) {
  ports.save({ ...data });
  ports.setStep(6);
  ports.route(raw.driverPlanId === 3 ? {} : { showCards: true }, 6);
}
