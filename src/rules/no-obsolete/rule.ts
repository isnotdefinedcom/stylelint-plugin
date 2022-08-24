import { Root } from 'postcss';
import { Rule, PluginContext, PostcssResult, createPlugin, utils } from 'stylelint';
import { defaultOptions } from './option';
import { Options } from './option.interface';
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

function rule(primaryOptions : Options, secondaryOptions : Options, context : PluginContext)
{
	const options : Options = { ...defaultOptions, ...primaryOptions };

	return (root : Root, result : PostcssResult) =>
	{
		if (validateOptions(result, options))
		{
			options.atRules?.map(atRule =>
			{
				root.walkAtRules(atRule.name.search, decl =>
				{
					if (atRule?.name?.replace)
					{
						utils.report(
						{
							message: wording.expected + ' "' + atRule.name.search + '" ' + wording.atRule + ' ' + wording.toBe + ' "' + atRule.name.replace + '"',
							node: decl,
							result,
							ruleName,
							word: decl.name
						});
						if (context.fix)
						{
							decl.name = atRule.name.replace;
						}
					}
					else
					{
						utils.report(
						{
							message: wording.unexpected + ' "' + atRule.name.search + '" ' + wording.atRule,
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
				root.walkDecls(property.name.search, decl =>
				{
					if (property?.name?.replace)
					{
						utils.report(
						{
							message: wording.expected + ' "' + property.name.search + '" ' + wording.property + ' ' + wording.toBe + ' "' + property.name.replace + '"',
							node: decl,
							result,
							ruleName,
							word: decl.prop
						});
						if (context.fix)
						{
							decl.prop = property.name.replace;
						}
					}
					else if (!property?.value?.search)
					{
						utils.report(
						{
							message: wording.unexpected + ' "' + property.name.search + '" ' + wording.property,
							node: decl,
							result,
							ruleName,
							word: decl.prop
						});
					}
					else if (property?.value?.search === decl.value && property?.value?.replace)
					{
						utils.report(
						{
							message: wording.expected + ' "' + property.name.search + '" ' + wording.value + ' "' + property.value.search + '" ' + wording.toBe + ' "' + property.value.replace + '"',
							node: decl,
							result,
							ruleName,
							word: decl.value
						});
						if (context.fix)
						{
							decl.value = property.value.replace;
						}
					}
					else if (property?.value?.search === decl.value && !property?.value?.replace)
					{
						utils.report(
						{
							message: wording.unexpected + ' "' + property.name.search + '" ' + wording.value + ' "' + property.value.search + '"',
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

export default createPlugin(ruleName, rule as Rule);
