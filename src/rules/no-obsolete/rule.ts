import { Root } from 'postcss';
import { Rule, RuleContext, PostcssResult, createPlugin, utils } from 'stylelint';
import { defaultOptions } from './option';
import { Options, AtRule, Property } from './option.interface';
import { wording } from '../wording';

const ruleName : string = '@isnotdefined/no-obsolete';

function validateOptions(result : PostcssResult, options : Options)
{
	return utils.validateOptions(result, ruleName,
	{
		actual: options,
		// @ts-ignore
		possible:
		{
			atRules: value => value,
			properties: value => value
		}
	});
}

function rule(primaryOptions : Options, secondaryOptions : Options, context : RuleContext)
{
	const options : Options = { ...defaultOptions, ...primaryOptions };

	return (root : Root, result : PostcssResult) =>
	{
		if (validateOptions(result, options))
		{
			options.atRules?.map(atRule =>
			{
				root.walkAtRules(atRule?.name?.search, decl =>
				{
					const { name } : AtRule = atRule;

					if (name?.replace)
					{
						utils.report(
						{
							message: wording.expected + ' "' + name?.search + '" ' + wording.atRule + ' ' + wording.toBe + ' "' + name?.replace + '"',
							node: decl,
							result,
							ruleName,
							word: decl.name
						});
						if (context.fix)
						{
							decl.name = name?.replace;
						}
					}
					else
					{
						utils.report(
						{
							message: wording.unexpected + ' "' + name?.search + '" ' + wording.atRule,
							node: decl,
							result,
							ruleName,
							word: decl.name
						});
					}
				});
			});
			options.properties?.map(property =>
			{
				root.walkDecls(property?.name?.search, decl =>
				{
					const { name, value } : Property = property;
					const valueMatch : boolean = value?.search === decl.value;

					if (!value?.search && name?.replace || valueMatch && name?.replace)
					{
						utils.report(
						{
							message: wording.expected + ' "' + name?.search + '" ' + wording.property + ' ' + wording.toBe + ' "' + name?.replace + '"',
							node: decl,
							result,
							ruleName,
							word: decl.prop
						});
						if (context.fix)
						{
							decl.prop = name?.replace;
						}
					}
					else if (!value?.search)
					{
						utils.report(
						{
							message: wording.unexpected + ' "' + name?.search + '" ' + wording.property,
							node: decl,
							result,
							ruleName,
							word: decl.prop
						});
					}
					else if (valueMatch && value?.replace)
					{
						utils.report(
						{
							message: wording.expected + ' "' + name?.search + '" ' + wording.value + ' "' + value?.search + '" ' + wording.toBe + ' "' + value?.replace + '"',
							node: decl,
							result,
							ruleName,
							word: decl.value
						});
						if (context.fix)
						{
							decl.value = value?.replace;
						}
					}
					else if (valueMatch && !value?.replace)
					{
						utils.report(
						{
							message: wording.unexpected + ' "' + name?.search + '" ' + wording.value + ' "' + value?.search + '"',
							node: decl,
							result,
							ruleName,
							word: decl.value
						});
					}
				});
			});
		}
	};
}

export default createPlugin(ruleName, rule as unknown as Rule);
