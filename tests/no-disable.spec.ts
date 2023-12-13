import { expect } from 'chai';
import stylelint, { LinterResult } from 'stylelint';

const { lint } : typeof stylelint = stylelint;

describe('no-disable', () =>
{
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

			expect(linterResult.results.at(0)._postcssResult.messages[index].text).to.equal(message);
		});
	});
});
