import { FormViewBaseField } from 'types/views/form/fields/base';

/**
 * A plain-text input, similar to the HTML `<input/>` tag, defines a field where a user can enter free-form data.
 */
export type FormViewTextField = FormViewBaseField & {
  type: 'text';

  /**
   * Placeholder for this field, displayed inside the field in gray.
   */
  placeholder?: string;

  /**
   * Whether the field should be displayed as a large textarea.
   */
  multiline?: boolean;

  /**
   * Default value for this field.
   */
  defaultValue?: string | null;
};
