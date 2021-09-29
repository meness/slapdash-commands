import { IconPadding } from './padding';
/**
 * To theme images automatically they must be provided by using `monochrome` property.
 * Recommended for the best user experience.
 * Image theming is implemented by replacing all non-transparent pixels of an image with appropriate color (usually the text color).
 * Emojis are not supported.
 *
 * @see https://developers.slapdash.com/reference/command-response-icon
 */
export type IconMonochrome = {
  monochrome: string;
  padding?: IconPadding;
};
