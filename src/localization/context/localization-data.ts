import { Languages } from '@enums/language.enum';
import commonEN from '../locales/common/en.json';
import commonNL from '../locales/common/nl.json';
import todoEN from '../locales/todo/en.json';
import todoNL from '../locales/todo/nl.json';
import homeEN from '../locales/home/en.json';
import homeNL from '../locales/home/nl.json';

export const languageData: Record<
  Languages,
  Record<string, Record<string, string>>
> = {
  [Languages.en]: {
    common: commonEN,
    todo: todoEN,
    home: homeEN,
  },
  [Languages.nl]: {
    common: commonNL,
    todo: todoNL,
    home: homeNL,
  },
};
