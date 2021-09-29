import { IconPadding } from './padding';
/**
 * By default, images are rendered "as is" without taking the user theme into consideration.
 * Separate images for dark and light themes can be provided by using `dark` and `light` properties.
 *
 * @see https://developers.slapdash.com/reference/command-response-icon
 */
export type IconThemed = {
  light: string;
  dark: string;
  padding?: IconPadding;
};
