/**
 * Remark plugin to reduce unnecessary escaping of underscores and other characters.
 *
 * This plugin post-processes the output of remark-stringify to unescape:
 * - Underscores that are surrounded by word characters (intraword underscores)
 * - Colons in URLs
 * - Hash symbols that are clearly not headings
 */
export default function remarkRelaxedEscaping(): (tree: any, file: any) => void;
