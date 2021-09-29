/**
 * Shows a message in a toast (an ephemeral message displayed on the screen).
 *
 * @see https://developers.slapdash.com/reference/command-response-action#actionshowtoast
 */
export type ActionShowToast = {
  type: 'show-toast';

  /**
   * The message that will be displayed in a toast.
   */
  message: string;
};
