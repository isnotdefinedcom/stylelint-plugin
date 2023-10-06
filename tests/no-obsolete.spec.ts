import { expect } from 'chai';
import stylelint, { LinterResult } from 'stylelint';
const { lint } : typeof stylelint = stylelint;

describe('no-obsolete', () =>
{
	[
		'Unexpected "apply" at-rule',
		'Unexpected "document" at-rule',
		'Unexpected "viewport" at-rule',
		'Unexpected "box-align" property',
		'Expected "box-direction" property to be "flex-direction"',
		'Unexpected "box-flex" property',
		'Unexpected "box-flex-group" property',
		'Unexpected "box-lines" property',
		'Expected "box-ordinal-group" property to be "order"',
		'Unexpected "box-orient" property',
		'Unexpected "box-pack" property',
		'Unexpected "box-sizing" value "padding-box"',
		'Expected "clip" property to be "clip-path"',
		'Expected "grid-column-gap" property to be "column-gap"',
		'Expected "grid-gap" property to be "gap"',
		'Expected "grid-row-gap" property to be "row-gap"',
		'Unexpected "image-orientation" value "flip"',
		'Expected "image-rendering" value "optimizeQuality" to be "smooth"',
		'Expected "image-rendering" value "optimizeSpeed" to be "pixelated"',
		'Unexpected "ime-mode" property',
		'Expected "page-break-after" property to be "break-after"',
		'Expected "page-break-before" property to be "break-before"',
		'Unexpected "scroll-snap-coordinate" property',
		'Unexpected "scroll-snap-destination" property',
		'Unexpected "scroll-snap-points-x" property',
		'Unexpected "scroll-snap-points-y" property',
		'Unexpected "scroll-snap-type-x" property',
		'Unexpected "scroll-snap-type-y" property',
		'Unexpected "text-decoration" value "blink"',
		'Unexpected "text-decoration-line" value "blink"',
		'Expected "word-wrap" property to be "overflow-wrap"',
		'Unexpected "user-modify" property'
	]
	.map((message, index) =>
	{
		it('test rule #' + index, async () =>
		{
			const linterResult : LinterResult = await lint(
			{
				files: './tests/providers/no-obsolete.css',
				config:
				{
					plugins:
					[
						'./src'
					],
					rules:
					{
						'@isnotdefined/no-obsolete': true
					}
				}
			});

			expect(linterResult.results[0]._postcssResult.messages[index].text).to.equal(message);
		});
	});
});
