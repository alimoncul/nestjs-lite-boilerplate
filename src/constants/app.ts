import * as packageJson from '../../package.json';

export const DISABLE_LOGS = process.env.DISABLE_LOGS || false;
export const SWAGGER_TITLE = process.env.SWAGGER_TITLE || 'NestJS Lite Boiler Plate';
export const SWAGGER_DESCRIPTION = process.env.SWAGGER_DESCRIPTION || 'All APIs at your service';
export const SWAGGER_VERSION = process.env.SWAGGER_VERSION || '1.0';
export const PORT = process.env.PORT || 80;
export const VERSION = packageJson.version;
export const DATABASE_URL = process.env.DATABASE_URL;
export const DATABASE_NAME = process.env.DATABASE_NAME;
export const NODE_ENV = process.env.NODE_ENV;
