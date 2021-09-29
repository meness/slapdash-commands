/**
 * Opens a given URL using the system's default handler.
 *
 * @see https://developers.slapdash.com/reference/command-response-action#actionopenurl
 */
export type ActionOpenUrl = {
  type: 'open-url';

  /**
   * The URL to open.
   * You can use any valid URI schema. For example, "https://", "file://", "ssh://", "slack://" (native app).
   */
  url: string;
};
