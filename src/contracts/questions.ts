export type ControlKind =
  'checkbox' | 'marketing' | 'checkboxArray' | 'date' | 'radio' | 'logic' | 'text' | 'address';
export interface QuestionDefinition {
  owner: string;
  path: string;
  control: ControlKind;
  label: string;
  options?: string;
  id?: string;
  maxLength?: number;
}
export const proposerDefinition = {
  version: 1,
  owner: 'MTS-01',
  heading: 'Motor Trade Full Quote',
  consentExplanation:
    'In order to provide you with a quotation I require your consent to collect relevant personal data from you and any other person named on the policy. This will allow Clegg Gifford to arrange and administer the insurance policy on your behalf should you choose to proceed with the quotation given, is this ok?',
  instruction: 'Please fill out the following details to get a full quote.',
  questions: [
    {
      owner: 'MTS-01-Q01',
      path: 'consentTo',
      control: 'checkbox',
      label: 'Yes (A clear YES or NO answer to be given)',
      id: 'consentTo',
    },
    {
      owner: 'MTS-01-Q02',
      path: 'marketingConsent',
      control: 'marketing',
      label: 'Marketing Consent',
    },
    {
      owner: 'MTS-01-Q03',
      path: 'marketingMethod',
      control: 'checkboxArray',
      label: 'If so, how would you like to be contacted...',
      options: 'marketingMethods',
    },
    {
      owner: 'MTS-01-Q04',
      path: 'proposerPolicyStartDate',
      control: 'date',
      label: 'When do you want the policy to start?',
    },
    {
      owner: 'MTS-01-Q05',
      path: 'isShortTerm',
      control: 'radio',
      label: 'The standard policy term is 12 months. Do you wish to change this to 6 months?',
    },
    {
      owner: 'MTS-01-Q06',
      path: 'proposerCompanyTypeId',
      control: 'logic',
      label: 'What type of company/legal entity is used?',
      options: 'companyTypes',
      id: 'Company',
    },
    {
      owner: 'MTS-01-Q07',
      path: 'proposerTitleId',
      control: 'logic',
      label: 'Title:',
      options: 'proposerTitles',
      id: 'Title',
    },
    { owner: 'MTS-01-Q08', path: 'proposerName', control: 'text', label: 'First Name:' },
    { owner: 'MTS-01-Q09', path: 'proposerSurname', control: 'text', label: 'Surname:' },
    {
      owner: 'MTS-01-Q10',
      path: 'proposerTradingName',
      control: 'text',
      label: 'Trading Name (if applicable):',
    },
    {
      owner: 'MTS-01-Q11',
      path: 'proposerCompanyPartnershipName',
      control: 'text',
      label: 'Company Name:',
    },
    { owner: 'MTS-01-Q12', path: 'proposerEmail', control: 'text', label: 'Email Address: ' },
    {
      owner: 'MTS-01-Q13',
      path: 'proposerTelephoneNumber',
      control: 'text',
      label: 'Telephone Number:',
      maxLength: 11,
    },
    {
      owner: 'MTS-01-Q14',
      path: 'proposerMobileNumber',
      control: 'text',
      label: 'Mobile Number:',
      maxLength: 11,
    },
    {
      owner: 'MTS-01-Q15',
      path: 'proposerPostcode',
      control: 'address',
      label: 'Postcode:',
      maxLength: 10,
    },
    {
      owner: 'MTS-01-Q16',
      path: 'proposerHouseNumber',
      control: 'text',
      label: 'House Number',
      maxLength: 50,
    },
    {
      owner: 'MTS-01-Q17',
      path: 'proposerStreet',
      control: 'text',
      label: 'Street',
      maxLength: 50,
    },
    { owner: 'MTS-01-Q18', path: 'proposerTown', control: 'text', label: 'Town', maxLength: 50 },
    { owner: 'MTS-01-Q19', path: 'proposerCity', control: 'text', label: 'City', maxLength: 50 },
    {
      owner: 'MTS-01-Q20',
      path: 'proposerCounty',
      control: 'text',
      label: 'County',
      maxLength: 50,
    },
  ] satisfies QuestionDefinition[],
} as const;
