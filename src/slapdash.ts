import { ResponseBuilder } from 'builders/response';
import { Response } from 'interfaces/response';
import { processArgs } from 'utils/args';

/**
 * Send Slapdash arguments then pass the response.
 *
 * @param callbackFn Recieves Slapdash arguments and returns a proper Command Bar response
 */
export function slapdash(callbackFn: (args: Record<string, string>) => Response): void {
  const response = callbackFn(processArgs());

  // eslint-disable-next-line no-console
  console.log(response instanceof ResponseBuilder ? response.stringify() : JSON.stringify(response));
}
