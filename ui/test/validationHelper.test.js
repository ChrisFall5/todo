import { validateLength } from '../helpers/validationHelper';

test('String input is properly validated', () => {
  const emptyString = '';
  const string255Chars = 'wBJ8YxlOj4PqSAuJAiMN1J7qCUO2GELYuNc8BVh1gE8bBSkk5CkcMwP8UHBhE9Mxvjb20MFREj3maia2rwZV6sel5JJ1A7UOvN9cmqtJ6XJfVihxJhij7t6CQWbOlV4NiAbdXsodt1j9cTlqbsaRKG4HRTBz3Q10njYBfFKGBCRLycHXeSFEg94zBLlRnhquPEbq5RdfXAd4vLPXJSh4IHp5RdGT5SBu654tARKyicDv5BRSLdR1tRpQ8PHr0IK';
  const string256Chars = 'mkOvk9XqscQZgaIJorfc6do3u5Ez2oCMaORVMttyRJRJN8iUn26CcIJeKJEaPPTisAvqg7sAMWRLTskmtGXbxDFktvN6tDBSchdqjxNbYox8f6abtL9O1XxsaDgWFtYL8ZMVxfUgh6Tpj9ZsI3yFPAhgzTRy0JLFTOm1eib2WGO1Awq4mXPvRmBbowdWZ68XBwqB1car7GZyy5Pm4ZnyMwLApronn5G0iYet2mpdJZFxi1Iu1cJHg7rmNdWO0vg2';

  expect(validateLength(emptyString)).toEqual({
    valid: false,
    message: 'Input must not be empty.'
  });
  expect(validateLength(string255Chars)).toEqual({
    valid: true,
    message: null
  });
  expect(validateLength(string256Chars)).toEqual({
    valid: false,
    message: 'Input must not exceed 255 characters.'
  })
});
