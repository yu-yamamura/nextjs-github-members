import camelcaseKeys from 'camelcase-keys';
import { Options, NormalizedOptions } from 'ky';

export const DEFAULT_API_OPTIONS: Options = {
  prefixUrl: 'https://api.github.com',
  timeout: 7000,
  retry: 2,
  hooks: {
    afterResponse: [
      async (
        _request: Request,
        _options: NormalizedOptions,
        response: Response,
      ): Promise<Response> => {
        const body = new Blob(
          [JSON.stringify(camelcaseKeys(await response.json()), null, 2)],
          { type: 'application/json' },
        );
        const init = (({ headers, status, statusText }) => ({
          headers,
          status,
          statusText,
        }))(response);

        return new Response(body, init);
      },
    ],
  },
};
