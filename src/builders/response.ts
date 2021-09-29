import { Token } from 'types/tokens/token';
import { Config } from 'types/configs/config';
import { View } from 'types/view';
import { Action } from 'types/action';
import { Response } from 'interfaces/response';

/**
 * This is a simple builder of Slapdash Command response.
 */
export class ResponseBuilder implements Response {
  action?: Action;

  view?: View;

  config?: Config;

  tokens?: Token[];

  inputPlaceholder?: string;

  constructor(action?: Action, view?: View, config?: Config, tokens?: Token[], inputPlaceholder?: string) {
    this.action = action;
    this.view = view;
    this.config = config;
    this.tokens = tokens;
    this.inputPlaceholder = inputPlaceholder;
  }

  /**
   * Stringify the response object.
   *
   * @returns The result of `JSON.stringify()`
   */
  public stringify = (): string => {
    return JSON.stringify({
      action: this.action,
      view: this.view,
      config: this.config,
      tokens: this.tokens,
      inputPlaceholder: this.inputPlaceholder,
    });
  };
}
