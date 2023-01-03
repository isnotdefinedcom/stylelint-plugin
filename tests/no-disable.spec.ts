import { expect } from 'chai';
import { lint, LinterResult } from 'stylelint';
import rules from '../src';

describe.only('no-disable', () =>
{
	it('validate name', () =>
	{
		expect(rules[0].ruleName).to.be.equal('@isnotdefined/no-disable');
	});

	[
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
					}
				}
			});

			expect(linterResult.results[0]._postcssResult.messages[index].text).to.equal(message);
		});
	});
});
