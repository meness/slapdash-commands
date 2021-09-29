import { FormViewBaseField } from 'types/views/form/fields/base';
import { FormViewSelectFieldOption } from './selectOption';

/**
 * Defines a field that allows the user to select one or multiple options.
 */
export type FormViewSelectField = FormViewBaseField & {
  type: 'select';

  /**
   * A list of strings or `SelectFieldOption` objects that a user can select from.
   */
  options: (string | FormViewSelectFieldOption)[];

  /**
   * Whether the field allow selecting single or multiple options.
   */
  multiple?: boolean;

  /**
   * Placeholder of the field, shown inside in gray.
   */
  placeholder?: string;

  /**
   * Default value for this field.
   */
  defaultValue?: string | string[] | null;
};
