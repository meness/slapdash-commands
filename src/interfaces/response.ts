import { Token } from 'types/tokens/token';
import { Config } from 'types/configs/config';
import { View } from 'types/view';
import { Action } from 'types/action';

/**
 * A command should return a JSON that tells what the Command Bar should show or do.
 * The JSON needs to conform to a certain format, which can be described with the TypeScript definition below.
 *
 * @see https://developers.slapdash.com/reference/command-response
 */
export interface Response {
  /**
   * A side effect of the Command when it's run.
   *
   * @see https://developers.slapdash.com/reference/command-response-action
   */
  action?: Action;

  /**
   * The view that the Command Bar should display.
   *
   * @see https://developers.slapdash.com/reference/command-response-view
   */
  view?: View;

  /**
   * A way to configure the command before it can be used. For example, to collect an API key.
   *
   * @see https://developers.slapdash.com/reference/command-response-config
   */
  config?: Config;

  /**
   * A way to customize how Command Bar tokens that are visualized.
   *
   * @see https://developers.slapdash.com/reference/command-response-tokens
   */
  tokens?: Token[];

  /**
   * The placeholder text in the Command Bar's input.
   */
  inputPlaceholder?: string;
}
