import { Group } from './group';
import { ListViewOption } from './option';

/**
 * Property `Response.view` of type `list` displays a list of options in the Command Bar.
 *
 * @see https://developers.slapdash.com/reference/command-response-view-list
 */
export type ListView = {
  type: 'list';

  /**
   * An array of `ListOption` objects.
   */
  options: ListViewOption[];

  /**
   * Can be used to define the order in which they appear and customize how they are displayed.
   */
  groups?: (string | Group)[];

  /**
   * The default value is `true`, i.e the Command Bar's default ranking will be used.
   * If you wish to return different options as the user types in the Command Bar, set `ranking` to `false`.
   * Then Slapdash will run your command with a special parameter `keywords` that you can use to decide what options to return back.
   */
  ranking?: boolean;
};
