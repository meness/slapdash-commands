/**
 * Pastes some text to the active app.
 *
 * @see https://developers.slapdash.com/reference/command-response-action#actionpaste
 */
export type ActionPaste = {
  type: 'paste';

  /**
   * The string that will be pasted to the active app.
   */
  value: string;
};
