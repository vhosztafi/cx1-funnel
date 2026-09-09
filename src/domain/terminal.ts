import * as yup from 'yup';
import { dayjs } from './dates';
import type { RawForm } from './types';
import type { Options } from './options';
import { motorTradeConverter } from './converter';
// MTS-14-R02: unavailable branch predicates/context cannot be inferred from identity.
export type TerminalBranch =
  | {
      kind: 'backoffice-new' | 'broker-new' | 'backoffice-adjustment';
      argumentFields: Record<string, unknown>;
    }
  | { kind: 'broker-adjustment'; guid: unknown }
  | { kind: 'ordinary' };
export function summaryTimeSchema(raw: RawForm, backoffice: unknown, now: () => Date) {
  const minimum = raw.isMta && raw.minPolicyStartDate ? raw.minPolicyStartDate : null;
  return yup.object({
    proposerPolicyStartTime: yup
      .string()
      .test('startTime', function (value) {
        const timed = dayjs(`${dayjs(raw.proposerPolicyStartDate).format('YYYY-MM-DD')}T${value}`);
        const current = dayjs(dayjs(now()).format('YYYY-MM-DDTHH:mm'));
        if (minimum && dayjs(dayjs(minimum).format('YYYY-MM-DDTHH:mm')).isAfter(timed, 'minute'))
          return this.createError({
            message: `Specified time and date must be later than ${dayjs(minimum).format('DD/MM/YYYY HH:mm')}`,
          });
        if (backoffice) return true;
        if (current.isAfter(timed, 'minute'))
          return this.createError({
            message: 'Specified time and date must be later than form submission.',
          });
        return true;
      })
      .required()
      .label('This'),
  });
}
export function terminalSubmitData(raw: RawForm, time: unknown): RawForm {
  const date = dayjs(dayjs(raw.proposerPolicyStartDate)).format('YYYY-MM-DD');
  return { ...raw, proposerPolicyStartTime: dayjs(`${date}T${time}`).utc(true).toISOString() };
}
export function terminalArgument(
  submitData: RawForm,
  options: Options,
  branch: TerminalBranch,
  convert: typeof motorTradeConverter = motorTradeConverter,
): Record<string, unknown> {
  if (branch.kind === 'broker-adjustment') {
    const inner = convert(submitData, options);
    return { ...convert({ data: inner, guid: branch.guid }, options) };
  }
  if (branch.kind === 'ordinary') return { ...convert(submitData, options) };
  return { ...branch.argumentFields, data: convert(submitData, options) };
}
export interface TerminalLocalState {
  errorList: string[];
  quoteLoading: boolean;
  isRedirecting: boolean;
  prepared?: { branch: TerminalBranch; argument: Record<string, unknown> };
}
export function prepareTerminal(
  raw: RawForm,
  time: unknown,
  options: Options,
  branch: TerminalBranch | undefined,
  ports: {
    clearErrors: () => void;
    setLoading: (value: boolean) => void;
    setRedirecting: (value: boolean) => void;
  },
) {
  const submitData = terminalSubmitData(raw, time);
  ports.clearErrors();
  ports.setLoading(true);
  ports.setRedirecting(false);
  if (!branch) return undefined;
  return { branch, argument: terminalArgument(submitData, options, branch) };
}
// The returned argument is the terminal boundary. No callee, transport or result handling exists.
