export const summaryDefinition = {
  version: 1,
  owner: 'MTS-14',
  heading: 'Summary',
  dateLabel: 'When do you want the policy to start?',
  questions: [
    {
      owner: 'MTS-14-Q01',
      path: 'proposerPolicyStartTime',
      label: 'Please specify the time (hh:mm):',
      control: 'time',
    },
  ],
} as const;
