import { ActionRich } from 'types/actions/rich';
import { Icon } from 'types/icon';
import { Action } from 'types/action';
import { MoveAction } from 'types/moveAction';

/**
 * Property `Response.view.options` is the list of options that are displayed in the List View.
 *
 * @see https://developers.slapdash.com/reference/command-response-view-list#listoption
 */
export type ListViewOption = {
  /**
   * The title for the option.
   */
  title: string;

  /**
   * This Action is executed when `Enter` is pressed on the Option (or when the option is clicked).
   *
   * @see https://developers.slapdash.com/reference/command-response-action
   * @see https://developers.slapdash.com/reference/command-response-view-list#options-main-action
   */
  action: Action | ActionRich;

  /**
   * This Action is executed when Tab is pressed on the Option.
   *
   * @see https://developers.slapdash.com/reference/command-response-view-list#options-move-action
   */
  moveAction?: MoveAction;

  /**
   * The icon for the option. Can be either an emoji Unicode character, URL (inclduing data URL) or inline.
   *
   * @see https://developers.slapdash.com/reference/command-response-icon
   */
  icon?: Icon;

  /**
   * The subtitle for the option. Can be provided as a string or a list of strings.
   */
  subtitle?: string | string[];

  /**
   * The Group this option belongs to.
   *
   * @see https://developers.slapdash.com/reference/command-response-view-list#group
   */
  group?: string;
};
