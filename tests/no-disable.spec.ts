import { expect } from 'chai';
import stylelint, { LinterResult } from 'stylelint';
import rules from '../src';
import { Plugin } from '../src/polyfill.type';

const { lint } : typeof stylelint = stylelint;

describe('no-disable', () =>
{
	it('validate name', () =>
	{
		const { ruleName } : Plugin = rules[0] as Plugin;

		expect(ruleName).to.be.equal('@isnotdefined/no-disable');
	});

	[
		'Unexpected "stylelint-disable rule" comment',
		'Unexpected "stylelint-disable-line" comment',
		'Unexpected "stylelint-disable-next-line" comment'
	]
	.map((message, index) =>
	{
		it('test rule #' + index, async () =>
		{
			const linterResult : LinterResult = await lint(
			{
				files: './tests/providers/no-disable.css',
				config:
				{
					plugins:
					[
						'./src'
					],
					rules:
					{
						'@isnotdefined/no-disable': true
					},
					ignoreDisables: true
				}
			});

			expect(linterResult.results[0]._postcssResult.messages[index].text).to.equal(message);
		});
	});
});
