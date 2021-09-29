import { Icon } from 'types/icon';
import { Action } from 'types/action';

/**
 * It's a special object that allows to customize how the action is visualised by the Command Bar.
 *
 * @see https://developers.slapdash.com/reference/command-response-view-list#options-main-action
 */
export type ActionRich = {
  /**
   * The default Action object.
   *
   * @see https://developers.slapdash.com/reference/command-response-action
   */
  action: Action;

  /**
   * The label for this action. By default it will be inferred
   * from the action property.
   */
  label?: string;

  /**
   * The tooltip for this action. By default it will be inferred
   * from the action property.
   */
  tooltip?: string;

  /**
   * The icon for this action. Either an emoji or an Image URL.
   * By default it will be inferred from the action property.
   *
   * @see https://developers.slapdash.com/reference/command-response-icon
   */
  icon?: Icon;
};
