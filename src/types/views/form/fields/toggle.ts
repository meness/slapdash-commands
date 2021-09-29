import { FormViewBaseField } from 'types/views/form/fields/base';

/**
 * Defines a field that allows the user to enable or disable something.
 */
export type FormViewToggleField = FormViewBaseField & {
  type: 'toggle';

  /**
   * Default value for this field.
   */
  defaultValue?: boolean | null;
};
