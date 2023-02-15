import { expect } from 'chai';
import stylelint, { LinterResult } from 'stylelint';
import rules from '../src';
import { Plugin } from '../src/polyfill.type';

const { lint } : typeof stylelint = stylelint;

describe('unit-step', () =>
{
	it('validate name', () =>
	{
		const { ruleName } : Plugin = rules[2] as Plugin;

		expect(ruleName).to.be.equal('@isnotdefined/unit-step');
	});

	[
		'Expected "media" unit "50.1em" to be "50.125em"',
		'Expected "font" unit "1.1em" to be "1.125em"',
		'Expected "height" unit "1.05em" to be "1em"',
		'Expected "width" unit "1.20em" to be "1.25em"'
	]
	.map((message, index) =>
	{
		it('test rule #' + index, async () =>
		{
			const linterResult : LinterResult = await lint(
			{
				files: './tests/providers/unit-step.css',
				config:
				{
					plugins:
					[
						'./src'
					],
					rules:
					{
						'@isnotdefined/unit-step': true
					}
				}
			});

			expect(linterResult.results[0]._postcssResult.messages[index].text).to.equal(message);
		});
	});
});
