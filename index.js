/**
 * @typedef {import('unified').Preset} Preset
 */

import { unified } from 'unified';
import remarkRetext from 'remark-retext';
import retextEnglish from 'retext-english';
import retextPresetBpmnIo from 'retext-preset-bpmn-io';
import remarkPresetLintRecommended from 'remark-preset-lint-recommended';
import remarkCommentConfig from 'remark-comment-config';
import remarkValidateLinks from 'remark-validate-links';
import remarkLintBlockquoteIndentation from 'remark-lint-blockquote-indentation';
import remarkLintCheckboxCharacterStyle from 'remark-lint-checkbox-character-style';
import remarkLintCheckboxContentIndent from 'remark-lint-checkbox-content-indent';
import remarkLintCodeBlockStyle from 'remark-lint-code-block-style';
import remarkLintDefinitionCase from 'remark-lint-definition-case';
import remarkLintDefinitionSpacing from 'remark-lint-definition-spacing';
import remarkLintEmphasisMarker from 'remark-lint-emphasis-marker';
import remarkLintFencedCodeFlag from 'remark-lint-fenced-code-flag';
import remarkLintFencedCodeMarker from 'remark-lint-fenced-code-marker';
import remarkLintFileExtension from 'remark-lint-file-extension';
import remarkLintFinalDefinition from 'remark-lint-final-definition';
import remarkLintFirstHeadingLevel from 'remark-lint-first-heading-level';
import remarkLintHeadingStyle from 'remark-lint-heading-style';
import remarkLintLinkTitleStyle from 'remark-lint-link-title-style';
import remarkLintMaximumHeadingLength from 'remark-lint-maximum-heading-length';
import remarkLintMaximumLineLength from 'remark-lint-maximum-line-length';
import remarkLintNoConsecutiveBlankLines from 'remark-lint-no-consecutive-blank-lines';
import remarkLintNoDuplicateDefinedUrls from 'remark-lint-no-duplicate-defined-urls';
import remarkLintNoDuplicateDefinitions from 'remark-lint-no-duplicate-definitions';
import remarkLintNoDuplicateHeadingsInSection from 'remark-lint-no-duplicate-headings-in-section';
import remarkLintNoEmphasisAsHeading from 'remark-lint-no-emphasis-as-heading';
import remarkLintNoEmptyUrl from 'remark-lint-no-empty-url';
import remarkLintNoFileNameArticles from 'remark-lint-no-file-name-articles';
import remarkLintNoFileNameConsecutiveDashes from 'remark-lint-no-file-name-consecutive-dashes';
import remarkLintNoFileNameIrregularCharacters from 'remark-lint-no-file-name-irregular-characters';
import remarkLintNoFileNameMixedCase from 'remark-lint-no-file-name-mixed-case';
import remarkLintNoFileNameOuterDashes from 'remark-lint-no-file-name-outer-dashes';
import remarkLintNoHeadingContentIndent from 'remark-lint-no-heading-content-indent';
import remarkLintNoHeadingIndent from 'remark-lint-no-heading-indent';
import remarkLintNoHeadingLikeParagraph from 'remark-lint-no-heading-like-paragraph';
import remarkLintNoHtml from 'remark-lint-no-html';
import remarkLintListItemIndent from 'remark-lint-list-item-indent';
import remarkLintNoMissingBlankLines from 'remark-lint-no-missing-blank-lines';
import remarkLintNoMultipleToplevelHeadings from 'remark-lint-no-multiple-toplevel-headings';
import remarkLintNoParagraphContentIndent from 'remark-lint-no-paragraph-content-indent';
import remarkLintNoReferenceLikeUrl from 'remark-lint-no-reference-like-url';
import remarkLintNoShellDollars from 'remark-lint-no-shell-dollars';
import remarkLintNoTableIndentation from 'remark-lint-no-table-indentation';
import remarkLintNoTabs from 'remark-lint-no-tabs';
import remarkLintNoUnneededFullReferenceImage from 'remark-lint-no-unneeded-full-reference-image';
import remarkLintNoUnneededFullReferenceLink from 'remark-lint-no-unneeded-full-reference-link';
import remarkLintOrderedListMarkerValue from 'remark-lint-ordered-list-marker-value';
import remarkLintRuleStyle from 'remark-lint-rule-style';
import remarkLintStrongMarker from 'remark-lint-strong-marker';
import remarkLintTableCellPadding from 'remark-lint-table-cell-padding';
import remarkLintTablePipeAlignment from 'remark-lint-table-pipe-alignment';
import remarkLintTablePipes from 'remark-lint-table-pipes';
import remarkLintUnorderedListMarkerStyle from 'remark-lint-unordered-list-marker-style';
import remarkToc from 'remark-toc';
import remarkGfm from 'remark-gfm';
import remarkGithub from 'remark-github';
import remarkFrontmatter from 'remark-frontmatter';

/** @type {Preset} */
const remarkPresetBpmnIo = {
  settings: {

    // @ts-expect-error
    bullet: '*',
    fences: true,
    strong: '_',
    emphasis: '_',
    ruleSpaces: false,
    rule: '-',
    listItemIndent: 'mixed'
  },
  plugins: [
    [ remarkFrontmatter, [ 'yaml' ] ],
    [ remarkRetext, unified().use(retextEnglish).use(retextPresetBpmnIo) ],
    remarkPresetLintRecommended,
    [ remarkLintListItemIndent, 'mixed' ],
    remarkCommentConfig,
    remarkValidateLinks,
    [ remarkLintBlockquoteIndentation, 2 ],
    [ remarkLintCheckboxCharacterStyle, { checked: 'x', unchecked: ' ' } ],
    remarkLintCheckboxContentIndent,
    [ remarkLintCodeBlockStyle, 'fenced' ],
    remarkLintDefinitionCase,
    remarkLintDefinitionSpacing,
    [ remarkLintEmphasisMarker, '_' ],
    remarkLintFencedCodeFlag,
    [ remarkLintFencedCodeMarker, '`' ],
    [ remarkLintFileExtension, 'md' ],
    remarkLintFinalDefinition,
    remarkLintFirstHeadingLevel,
    [ remarkLintHeadingStyle, 'atx' ],
    [ remarkLintLinkTitleStyle, '"' ],
    [ remarkLintMaximumHeadingLength, false ],
    [ remarkLintMaximumLineLength, false ],
    remarkLintNoConsecutiveBlankLines,
    remarkLintNoDuplicateDefinedUrls,
    remarkLintNoDuplicateDefinitions,
    remarkLintNoDuplicateHeadingsInSection,
    remarkLintNoEmphasisAsHeading,
    remarkLintNoEmptyUrl,
    remarkLintNoFileNameArticles,
    remarkLintNoFileNameConsecutiveDashes,
    [ remarkLintNoFileNameIrregularCharacters, '\\.a-zA-Z0-9-_' ],
    remarkLintNoFileNameMixedCase,
    remarkLintNoFileNameOuterDashes,
    remarkLintNoHeadingContentIndent,
    remarkLintNoHeadingIndent,
    remarkLintNoHeadingLikeParagraph,
    remarkLintNoHtml,
    [ remarkLintNoMissingBlankLines, { exceptTightLists: true } ],
    remarkLintNoMultipleToplevelHeadings,
    remarkLintNoParagraphContentIndent,
    remarkLintNoReferenceLikeUrl,
    remarkLintNoShellDollars,
    remarkLintNoTableIndentation,
    remarkLintNoTabs,
    remarkLintNoUnneededFullReferenceImage,
    remarkLintNoUnneededFullReferenceLink,
    [ remarkLintOrderedListMarkerValue, 'ordered' ],
    [ remarkLintRuleStyle, '---' ],
    [ remarkLintStrongMarker, '_' ],
    [ remarkLintTableCellPadding, 'padded' ],
    remarkLintTablePipeAlignment,
    remarkLintTablePipes,
    [ remarkLintUnorderedListMarkerStyle, '*' ],
    [
      remarkToc,
      {
        maxDepth: 3,
        tight: true,
        heading: 'contents|toc|table[ -]of[ -]contents?'
      }
    ],
    remarkGfm,
    remarkGithub
  ]
};

export default remarkPresetBpmnIo;