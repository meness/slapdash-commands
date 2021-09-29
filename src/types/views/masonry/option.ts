import { ActionRich } from 'types/actions/rich';
import { Action } from 'types/action';
import { MoveAction } from 'types/moveAction';

/**
 * For {@link ViewMasonry}, property `Response.view.options` contains the list of `MasonryOption` objects.
 */
export type MasonryViewOption = {
  /**
   * The image URL for this option.
   */
  imageURL: string;

  /**
   * This Action is executed when `Enter` is pressed on the Option (or when the option is clicked).
   *
   * @see https://developers.slapdash.com/reference/command-response-action
   */
  action: Action | ActionRich;

  /**
   * This Action is executed when Tab is pressed on the Option.
   *
   * @see https://developers.slapdash.com/reference/command-response-action#actionmoveaddparam
   */
  moveAction?: MoveAction;
};
