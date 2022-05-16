jest.mock('@hooks/localize', () => ({
  useLocalize: () => ({
    t: (key: string) => key,
  }),
}));

export {};
