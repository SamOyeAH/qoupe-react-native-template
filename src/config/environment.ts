import {
  AZURE_AD_TENANT_ID,
  AZURE_AD_CLIENT_ID_TST,
  AZURE_AD_CLIENT_ID_ACC,
  AZURE_AD_CLIENT_ID_PRD,
  API_URL_TST,
  API_URL_ACC,
  API_URL_PRD,
} from '@env';

export enum Environment {
  DEVELOPMENT = 'development',
  ACCEPTANCE = 'acceptance',
  PRODUCTION = 'production',
}

export interface EnvironmentConfig {
  apiUrl: string;
  azureClientId: string;
  azureTenantId: string;
}

export const getEnvironmentConfig = (
  environment: Environment,
): EnvironmentConfig => {
  switch (environment) {
    case Environment.ACCEPTANCE:
      return {
        apiUrl: API_URL_ACC,
        azureClientId: AZURE_AD_CLIENT_ID_ACC,
        azureTenantId: AZURE_AD_TENANT_ID,
      };
    case Environment.PRODUCTION:
      return {
        apiUrl: API_URL_PRD,
        azureClientId: AZURE_AD_CLIENT_ID_PRD,
        azureTenantId: AZURE_AD_TENANT_ID,
      };
    case Environment.DEVELOPMENT:
    default:
      return {
        apiUrl: API_URL_TST,
        azureClientId: AZURE_AD_CLIENT_ID_TST,
        azureTenantId: AZURE_AD_TENANT_ID,
      };
  }
};
