/**
 * Allows to change the location of the Command Bar.
 * Location parameters are then passed to the Command when it's run.
 *
 * @see https://developers.slapdash.com/reference/command-response-action#actionmoveaddparam
 */
export type MoveActionAddParam = {
  type: 'add-param';

  /**
   * The name of the parameter.
   */
  name: string;

  /**
   * The value of the parameter.
   */
  value: string;
};
