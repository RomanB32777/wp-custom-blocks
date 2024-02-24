const path = require("path");

const { DefinePlugin } = require("webpack");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

require("dotenv").config({ path: "./.env" });

const {
	NODE_ENV,

	// PRIMARY
	PRIMARY_COLOR,
	PRIMARY_GRIZZLY_COLOR,
	PRIMARY_LIGHT_COLOR,
	PRIMARY_BRIGHTEST_COLOR,

	// SECONDARY
	SECONDARY_COLOR,
	SECONDARY_LIGHT_COLOR,

	// DARK
	DARK_COLOR,
	DARK_GRIZZLY_COLOR,
	DARK_OPACITY_COLOR,

	// WHITE
	WHITE_COLOR,
	WHITE_LIGHT_COLOR,
	WHITE_OPACITY_COLOR,

	// GRIZZLY
	GRIZZLY_COLOR,
	GRIZZLY_LIGHT_COLOR,
	GRIZZLY_DARK_COLOR,

	// RED
	RED_COLOR,
} = process.env;

const colors = {
	// PRIMARY
	PRIMARY_COLOR,
	PRIMARY_GRIZZLY_COLOR,
	PRIMARY_LIGHT_COLOR,
	PRIMARY_BRIGHTEST_COLOR,

	// SECONDARY
	SECONDARY_COLOR,
	SECONDARY_LIGHT_COLOR,

	// DARK
	DARK_COLOR,
	DARK_GRIZZLY_COLOR,
	DARK_OPACITY_COLOR,

	// WHITE
	WHITE_COLOR,
	WHITE_LIGHT_COLOR,
	WHITE_OPACITY_COLOR,

	// GRIZZLY
	GRIZZLY_COLOR,
	GRIZZLY_LIGHT_COLOR,
	GRIZZLY_DARK_COLOR,

	// RED
	RED_COLOR,
};

const isProduction = NODE_ENV === "production";

const { optimization, plugins } = defaultConfig;

if (isProduction) {
	optimization.minimizer.push(new CssMinimizerPlugin());
	optimization.splitChunks = {
		cacheGroups: {
			default: false,
			editor: {
				chunks: "all",
				enforce: true,
				name: "editor",
				test: /editor(\.module)?\.s[ac]ss$/i,
			},
			style: {
				chunks: "all",
				enforce: true,
				name: "style",
				test: /style(\.module)?\.s[ac]ss$/i,
			},
		},
	};
} else {
	plugins.push(new ForkTsCheckerWebpackPlugin());
}

plugins.push(
	new DefinePlugin(
		Object.entries(colors).reduce((acc, [color, value]) => {
			acc[color] = JSON.stringify(value);

			return acc;
		}, {})
	)
);

module.exports = {
	...defaultConfig,
	resolve: {
		...defaultConfig.resolve,
		alias: {
			...defaultConfig.resolve.alias,
			"@": path.resolve(__dirname, "src"),
		},
		extensions: [".tsx", ".ts", ".js", ".jsx"],
	},
};
