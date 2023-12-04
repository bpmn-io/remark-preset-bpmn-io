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
import remarkLintListIndent from 'remark-lint-list-item-indent';
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

    // @ts-expect-error: types of bridges don’t work.
    [ remarkRetext, unified().use(retextEnglish).use(retextPresetBpmnIo) ],

    // @ts-expect-error
    remarkPresetLintRecommended,

    // @ts-expect-error
    [ remarkLintListIndent, 'mixed' ],
    remarkCommentConfig,
    remarkValidateLinks,

    // @ts-expect-error
    [ remarkLintBlockquoteIndentation, 2 ],

    // @ts-expect-error
    [ remarkLintCheckboxCharacterStyle, { checked: 'x', unchecked: ' ' } ],

    // @ts-expect-error
    remarkLintCheckboxContentIndent,

    // @ts-expect-error
    [ remarkLintCodeBlockStyle, 'fenced' ],

    // @ts-expect-error
    remarkLintDefinitionCase,

    // @ts-expect-error
    remarkLintDefinitionSpacing,

    // @ts-expect-error
    [ remarkLintEmphasisMarker, '_' ],

    // @ts-expect-error
    remarkLintFencedCodeFlag,

    // @ts-expect-error
    [ remarkLintFencedCodeMarker, '`' ],

    // @ts-expect-error
    [ remarkLintFileExtension, 'md' ],

    // @ts-expect-error
    remarkLintFinalDefinition,

    // @ts-expect-error
    remarkLintFirstHeadingLevel,

    // @ts-expect-error
    [ remarkLintHeadingStyle, 'atx' ],

    // @ts-expect-error
    [ remarkLintLinkTitleStyle, '"' ],

    // @ts-expect-error
    [ remarkLintMaximumHeadingLength, false ],

    // @ts-expect-error
    [ remarkLintMaximumLineLength, false ],

    // @ts-expect-error
    remarkLintNoConsecutiveBlankLines,

    // @ts-expect-error
    remarkLintNoDuplicateDefinedUrls,

    // @ts-expect-error
    remarkLintNoDuplicateDefinitions,

    // @ts-expect-error
    remarkLintNoDuplicateHeadingsInSection,

    // @ts-expect-error
    remarkLintNoEmphasisAsHeading,

    // @ts-expect-error
    remarkLintNoEmptyUrl,

    // @ts-expect-error
    remarkLintNoFileNameArticles,

    // @ts-expect-error
    remarkLintNoFileNameConsecutiveDashes,

    // @ts-expect-error
    [ remarkLintNoFileNameIrregularCharacters, '\\.a-zA-Z0-9-_' ],

    // @ts-expect-error
    remarkLintNoFileNameMixedCase,

    // @ts-expect-error
    remarkLintNoFileNameOuterDashes,

    // @ts-expect-error
    remarkLintNoHeadingContentIndent,

    // @ts-expect-error
    remarkLintNoHeadingIndent,

    // @ts-expect-error
    remarkLintNoHeadingLikeParagraph,

    // @ts-expect-error
    remarkLintNoHtml,

    // @ts-expect-error
    [ remarkLintNoMissingBlankLines, { exceptTightLists: true } ],

    // @ts-expect-error
    remarkLintNoMultipleToplevelHeadings,

    // @ts-expect-error
    remarkLintNoParagraphContentIndent,

    // @ts-expect-error
    remarkLintNoReferenceLikeUrl,

    // @ts-expect-error
    remarkLintNoShellDollars,

    // @ts-expect-error
    remarkLintNoTableIndentation,

    // @ts-expect-error
    remarkLintNoTabs,

    // @ts-expect-error
    remarkLintNoUnneededFullReferenceImage,

    // @ts-expect-error
    remarkLintNoUnneededFullReferenceLink,

    // @ts-expect-error
    [ remarkLintOrderedListMarkerValue, 'ordered' ],

    // @ts-expect-error
    [ remarkLintRuleStyle, '---' ],

    // @ts-expect-error
    [ remarkLintStrongMarker, '_' ],

    // @ts-expect-error
    [ remarkLintTableCellPadding, 'padded' ],

    // @ts-expect-error
    remarkLintTablePipeAlignment,

    // @ts-expect-error
    remarkLintTablePipes,

    // @ts-expect-error
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