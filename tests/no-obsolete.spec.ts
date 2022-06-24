import { expect } from 'chai';
import { lint, LinterResult } from 'stylelint';
import rules from '../src';

describe('no-obsolete', () =>
{
	it('validate name', () =>
	{
		expect(rules[0].ruleName).to.be.equal('@isnotdefined/no-obsolete');
	});

	[
		'Unexpected "document" at-rule',
		'Unexpected "viewport" at-rule',
		'Unexpected "box-sizing" value "padding-box"',
		'Expected "clip" property to be "clip-path"',
		'Expected "grid-column-gap" property to be "column-gap"',
		'Expected "grid-gap" property to be "gap"',
		'Expected "grid-row-gap" property to be "row-gap"',
		'Unexpected "ime-mode" property',
		'Unexpected "scroll-snap-coordinate" property',
		'Unexpected "scroll-snap-destination" property',
		'Unexpected "scroll-snap-type-x" property',
		'Unexpected "scroll-snap-type-y" property',
		'Unexpected "scroll-snap-points-x" property',
		'Unexpected "scroll-snap-points-y" property',
		'Expected "word-break" value "break-word" to be "break-all"',
		'Unexpected "zoom" property'
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
	})
});
