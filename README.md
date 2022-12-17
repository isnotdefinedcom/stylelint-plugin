Stylelint Plugin
================

> Yet another Stylelint plugin.

[![Build Status](https://img.shields.io/github/actions/workflow/status/isnotdefinedcom/stylelint-plugin/ci.yml.svg?branch=master)](https://github.com/isnotdefinedcom/stylelint-plugin/actions?query=workflow:ci)
[![NPM Version](https://img.shields.io/npm/v/@isnotdefined/stylelint-plugin.svg)](https://npmjs.com/package/@isnotdefined/stylelint-plugin)
[![License](https://img.shields.io/npm/l/@isnotdefined/stylelint-plugin.svg)](https://npmjs.com/package/@isnotdefined/stylelint-plugin)


Preview
-------

![Terminal Session](https://raw.githubusercontent.com/isnotdefinedcom/stylelint-plugin/master/.github/terminal-session.svg?sanitize=true)


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
