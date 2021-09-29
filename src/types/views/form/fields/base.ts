export type FormViewBaseField = {
  /**
   * ID of the field.
   * Must be unique in the Form View.
   */
  id: string;

  /**
   * Label for the field.
   */
  label: string;

  /**
   * Whether this field is required.
   */
  required?: boolean;

  /**
   * If set, shows an error message under the field.
   */
  error?: string | null;

  /**
   * A Markdown text which will be displayed under the field.
   */
  helpText?: string | null;
};
