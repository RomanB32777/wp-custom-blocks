module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:@wordpress/eslint-plugin/recommended-with-formatting",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",

		// Extends two more configuration from "import" plugin
		"plugin:import/recommended",
		"plugin:import/typescript",
	],
	plugins: ["import", "@typescript-eslint", "react-hooks"],
	parser: "@typescript-eslint/parser",
	rules: {
		"no-shadow": "off",
		"@typescript-eslint/no-shadow": "warn",
		"react/display-name": "off",
		"prettier/prettier": ["warn"],

		// react-hooks rules
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "error",
		// end react-hooks rules

		// import rules
		"import/no-cycle": ["error", { ignoreExternal: true, maxDepth: 1 }],
		"import/order": [
			"error",
			{
				pathGroups: [
					{
						pattern: "@wordpress/**",
						group: "external",
						position: "after",
					},
					{
						pattern: "@/**",
						group: "internal",
						position: "after",
					},
				],
				groups: [
					"builtin",
					"external",
					"internal",
					["parent", "sibling"],
					"index",
				],
				"newlines-between": "always-and-inside-groups",
				distinctGroup: false,
				pathGroupsExcludedImportTypes: ["builtin"],
			},
		],
		"import/no-duplicates": ["error", { "prefer-inline": true }],
		// turn on errors for missing imports
		"import/no-unresolved": "off",
		// end import rules

		"@typescript-eslint/naming-convention": [
			"error",
			{
				prefix: ["I"],
				selector: "interface",
				format: ["PascalCase"],
			},
			{
				prefix: ["E"],
				selector: "enum",
				format: ["PascalCase"],
			},
			{
				prefix: ["T"],
				selector: "typeAlias",
				format: ["PascalCase"],
			},
			{
				selector: "variable",
				format: ["camelCase", "PascalCase", "UPPER_CASE"],
			},
			{
				selector: "enumMember",
				format: ["PascalCase"],
			},
		],
		"@typescript-eslint/consistent-type-imports": [
			"warn",
			{ prefer: "type-imports" },
		],
	},
	parserOptions: {
		ecmaVersion: "latest",
	},
	env: {
		browser: true,
		es6: true,
	},
	overrides: [],
};
