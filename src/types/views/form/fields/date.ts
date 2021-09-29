import { FormViewBaseField } from 'types/views/form/fields/base';

/**
 * Defines a field which lets the user easily select a date from a calendar style UI.
 */
export type FormViewDateField = FormViewBaseField & {
  type: 'date';

  /**
   * Whether the field allows selecting the time too. It's `false` by default.
   */
  timeSelect?: boolean;

  /**
   * Default value for this field.
   */
  defaultValue?: string | null;
};
