import { expect } from 'chai';
import { lint, LinterResult } from "stylelint";
import rules from '../src';

describe('unit-step', () =>
{
	it('validate name', () =>
	{
		expect(rules[1].ruleName).to.be.equal('@isnotdefined/unit-step');
	});

	it('test rule', async() =>
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

		expect(linterResult.results[0]._postcssResult.messages[0].text).to.equal('Expected "font" unit "1.1rem" to be "1.125rem"');
	});
});
