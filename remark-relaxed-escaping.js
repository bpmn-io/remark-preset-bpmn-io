/**
 * Remark plugin to reduce unnecessary escaping of underscores and other characters.
 *
 * This plugin post-processes the output of remark-stringify to unescape:
 * - Underscores that are surrounded by word characters (intraword underscores)
 * - Colons in URLs
 * - Hash symbols that are clearly not headings
 *
 * @returns {import('unified').Plugin}
 */
export default function remarkRelaxedEscaping() {

  /**
   * @param {any} _tree - Syntax tree (unused, present for API compatibility)
   * @param {any} file - VFile instance
   */
  return function transformer(_tree, file) {

    // Post-process the stringified output
    const original = file.toString;

    file.toString = function() {
      let result = original.call(this);

      // Unescape underscores that are between word characters (intraword)
      // This matches patterns like SPECIAL\_WORDS -> SPECIAL_WORDS
      result = result.replace(/(\w)\\(_)(\w)/g, '$1$2$3');

      // Unescape colons in URLs (https\:// -> https://)
      result = result.replace(/https\\:/g, 'https:');
      result = result.replace(/http\\:/g, 'http:');

      // Unescape hash symbols that are clearly not headings
      // (lowercase letter, number, or hyphen after hash indicates it's likely a link/anchor, not a heading)
      result = result.replace(/^\\#([a-z0-9-])/gm, '#$1');

      return result;
    };
  };
}
