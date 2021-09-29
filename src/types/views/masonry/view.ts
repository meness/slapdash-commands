import { MasonryViewOption } from './option';

/**
 * Property `Response.view` of type `masonry` displays options in the Pinterest-like layout in the Command Bar.
 *
 * @see https://developers.slapdash.com/reference/command-response-view-masonry
 */
export type MasonryView = {
  type: 'masonry';
  options: MasonryViewOption[];
};
