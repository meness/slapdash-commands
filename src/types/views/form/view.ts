import { FormField } from 'types/formField';

/**
 * Property `Response.view` of type `form` allows to show a custom form in the Command Bar.
 *
 * @see https://developers.slapdash.com/reference/command-response-view-form
 */
export type FormView = {
  type: 'form';

  /**
   * By default, each field will be displayed in a separate row.
   * If you want some fields to be displayed in the same row – put them in a nested array, the available space will be evenly split between them.
   */
  fields: (FormField | FormField[])[];

  /**
   * Title of the form shown above it.
   */
  title?: string;

  /**
   * Text label for the submit button.
   */
  submitLabel?: string;

  /**
   * Text label for the cancel button.
   */
  cancelLabel?: string;

  /**
   * `get` or `post` (default). HTTP request method that will be used to submit the form.
   */
  method?: 'get' | 'post';
};
