import { ReactNode, useContext, Fragment, FC } from 'react';
import { LocalizationContext } from '@localization/context';

const DEFAULT_NAMESPACE = 'common';
const NAMESPACE_SEPARATOR = ':';

export interface LocalizeOptions {
  params?: Record<string, string | number>;
  components?: Record<string, FC>;
}

const getTranslation = (
  translationKey: string,
  translations: Record<string, Record<string, string>>,
) => {
  const result = translationKey.split(NAMESPACE_SEPARATOR);

  const namespace = result.length === 2 ? result[0] : DEFAULT_NAMESPACE;
  const key = result.length === 2 ? result[1] : result[0];

  return translations[namespace][key] || '';
};

export const useLocalize = () => {
  const { translations } = useContext(LocalizationContext);

  return {
    t: (translationKey: string, options?: LocalizeOptions): string => {
      const translation = getTranslation(translationKey, translations);

      if (options && options.params) {
        return Object.keys(options.params).reduce<string>(
          (resultTranslation, replaceKey) => {
            if (options.params) {
              return resultTranslation.replace(
                `{{${replaceKey}}}`,
                options.params[replaceKey] as string,
              );
            }
            return resultTranslation;
          },
          translation,
        );
      }

      return translation;
    },
    tJSX: (translationKey: string, options?: LocalizeOptions): ReactNode => {
      const translation = getTranslation(translationKey, translations);

      if (options && options.components) {
        // Split by opened and closed tags. They must be a couple!
        return translation
          .split(/(<\w+>[\w*\s*]*<\/\w+>)/g)
          .map((jsx, index) => {
            const [tag = ''] = jsx.match(/<\w+>/) ?? [];
            const key = tag.slice(1, -1);
            const value = jsx.replace(/<[^>]*>/g, '');

            if (options.components) {
              const Component = options.components[key];

              return (
                <Fragment key={index}>
                  {Component ? <Component>{value}</Component> : value}
                </Fragment>
              );
            }
          });
      }

      return translation;
    },
  };
};
