import { ConfigForm } from './form';

/**
 * Config allows to display a separate "one-time" form in the Command Bar.
 * All values from this form will be securely stored on the server and sent to the command any time it is run.
 * Useful when a command requires some configuration (e.g. API key) before it can be run.
 *
 * @see https://developers.slapdash.com/reference/command-response-config
 */
export type Config = {
  form: ConfigForm;
};
