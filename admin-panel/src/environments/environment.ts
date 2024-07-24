// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // apiEndpoint: 'http://109.106.255.69:1988/api/v1/admin/',
  QrCodeUrl:"http://109.106.255.69:1988",

  apiEndpoint: 'http://localhost:2024/api/v1/admin/',
  // QrCodeUrl:"http://localhost:2024"
};
