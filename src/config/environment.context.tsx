import { createContext, FC, useContext, useState } from 'react';
import { CONFIG_ENVIRONMENT } from '@env';
import {
  Environment,
  EnvironmentConfig,
  getEnvironmentConfig,
} from './environment';

export interface EnvironmentConfigContext {
  config: EnvironmentConfig;
  setEnvironment: (environment: Environment) => void;
}

const initialConfig: EnvironmentConfig = getEnvironmentConfig(
  (CONFIG_ENVIRONMENT as Environment) || Environment.DEVELOPMENT,
);

export const EnvironmentContext = createContext<EnvironmentConfigContext>({
  config: initialConfig,
  setEnvironment: () => {},
});

export const useEnvironment = () => useContext(EnvironmentContext);

export const EnvironmentProvider: FC = ({ children }) => {
  const [config, setConfig] = useState(initialConfig);

  const setEnvironment = (environment: Environment) => {
    setConfig(getEnvironmentConfig(environment));
  };

  return (
    <EnvironmentContext.Provider value={{ config, setEnvironment }}>
      {children}
    </EnvironmentContext.Provider>
  );
};
