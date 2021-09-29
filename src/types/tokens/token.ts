import { Icon } from 'types/icon';

/**
 * Tokens allow to customize how the command's parameters are displayed in the input of the Command Bar.
 *
 * @see https://developers.slapdash.com/reference/command-response-tokens
 */
export type Token = {
  /**
   * The name of the parameter associated with this token.
   */
  paramName: string;

  /**
   * The label for the token. By default, the parameter's name is used.
   */
  label?: string;

  /**
   * The icon for the token. Can be either an emoji Unicode character, URL (inclduing data URL) or inline.
   *
   * @see https://developers.slapdash.com/reference/command-response-icon
   */
  icon?: Icon;
};
