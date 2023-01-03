import { Options } from './option.interface';
import
{
	DISABLE_COMMAND,
	DISABLE_LINE_COMMAND,
	DISABLE_NEXT_LINE_COMMAND
} from 'stylelint/lib/utils/stylelintCommand';

export const defaultOptions : Options =
{
	commands:
	[
		DISABLE_COMMAND,
		DISABLE_LINE_COMMAND,
		DISABLE_NEXT_LINE_COMMAND
	]
};
