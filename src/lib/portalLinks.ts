/**
 * Portal entry page (`/`) circle destinations.
 * Set `left` / `right` to a full URL (opens in new tab) or an internal path like `/path` (same tab).
 * Leave unset until you are ready to link them.
 */
export const portalLinks = {
  left: undefined as string | undefined,
  center: "/home",
  right: undefined as string | undefined,
};

export function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}
