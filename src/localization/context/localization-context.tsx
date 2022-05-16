import { createContext, FC, useEffect, useState } from 'react';
import RNLocalize from 'react-native-localize';
import { Languages } from '@enums/language.enum';
import { languageData } from './localization-data';

interface LocalizationContextInterface {
  translations: Record<string, Record<string, string>>;
}

export const LocalizationContext = createContext<LocalizationContextInterface>(
  {} as LocalizationContextInterface,
);

const LocalizationContextProvider: FC = ({ children }) => {
  const [language, setLanguage] = useState<Languages>(Languages.en);

  useEffect(() => {
    const currentLanguage = RNLocalize.findBestAvailableLanguage(
      Object.keys(languageData) as Languages[],
    )?.languageTag;

    setLanguage(currentLanguage || Languages.en);
  }, []);

  const value = {
    translations: languageData[language],
  };

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const Localization = {
  Provider: LocalizationContextProvider,
};
