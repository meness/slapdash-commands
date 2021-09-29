/**
 * Copies some text to the clipboard.
 *
 * @see https://developers.slapdash.com/reference/command-response-action#actioncopy
 */
export type ActionCopy = {
  type: 'copy';

  /**
   * The string that will be copied to the clipboard.
   */
  value: string;
};
