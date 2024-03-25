declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";

declare module "*.scss" {
	interface IClassNames {
		[className: string]: string;
	}
	const classNames: IClassNames;
	export = classNames;
}

declare const SCRIPT_DEBUG: boolean;

declare const PRIMARY_COLOR: string;
declare const PRIMARY_GRIZZLY_COLOR: string;
declare const PRIMARY_LIGHT_COLOR: string;
declare const PRIMARY_BRIGHTEST_COLOR: string;

declare const SECONDARY_COLOR: string;
declare const SECONDARY_LIGHT_COLOR: string;

declare const DARK_COLOR: string;
declare const DARK_GRIZZLY_COLOR: string;
declare const DARK_OPACITY_COLOR: string;

declare const WHITE_COLOR: string;
declare const WHITE_LIGHT_COLOR: string;
declare const WHITE_OPACITY_COLOR: string;

declare const GRIZZLY_COLOR: string;
declare const GRIZZLY_LIGHT_COLOR: string;
declare const GRIZZLY_DARK_COLOR: string;

declare const RED_COLOR: string;

declare const YELLOW_COLOR: string;
declare const YELLOW_LIGHT_COLOR: string;

declare const GREEN_COLOR: string;
