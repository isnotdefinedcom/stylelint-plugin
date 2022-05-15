import { expect } from 'chai';
import { lint, LinterResult } from 'stylelint';
import rules from '../src';

describe('no-obsolete', () =>
{
	it('validate name', () =>
	{
		expect(rules[0].ruleName).to.be.equal('@isnotdefined/no-obsolete');
	});

	it('test rule', async() =>
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

		expect(linterResult.results[0]._postcssResult.messages[0].text).to.equal('Expected "grid-gap" property to be "gap"');
	});
});
