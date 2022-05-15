Stylelint Plugin
================

> Yet another Stylelint plugin.

[![Build Status](https://img.shields.io/github/workflow/status/isnotdefined-com/stylelint-plugin/ci.svg)](https://github.com/isnotdefined-com/stylelint-plugin/actions?query=workflow:ci)
[![NPM Version](https://img.shields.io/npm/v/@isnotdefined/stylelint-plugin.svg)](https://npmjs.com/package/@isnotdefined/stylelint-plugin)
[![License](https://img.shields.io/npm/l/@isnotdefined/stylelint-plugin.svg)](https://npmjs.com/package/@isnotdefined/stylelint-plugin)


Installation
------------

```
npm install @isnotdefined/stylelint-plugin
```


Usage
-----

Refer the plugins and rules inside your `.stylelintrc` file:

```json
{
	"plugins":
	[
		"@isnotdefined/stylelint-plugin"
	],
	"rules":
	{
		"@isnotdefined/no-obsolete": true,
		"@isnotdefined/unit-step": true
	}
}
```
