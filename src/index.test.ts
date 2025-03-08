import { describe, expect, it, test } from "vitest";
import { testOptions, testTemplate } from "bingo-testers";

import { template } from "./index.js";

describe("template", () => {
	describe("options", () => {
		it("does not set a title when repository is not provided", async () => {
			const actual = await testOptions(template);

			expect(actual).toEqual({});
		});

		it("bases title on repository when title is not provided", async () => {
			const repository = "abc-def";

			const actual = await testOptions(template, {
				options: { repository },
			});

			expect(actual).toEqual({
				repository,
				title: "Abc Def",
			});
		});
	});

	test("production", async () => {
		const creation = await testTemplate(template, {
			options: {
				description: "Example repository created from create-example. 💕",
				owner: "bingo-examples",
				repository: "example-repository",
				title: "Example Repository (Testing)",
			},
		});

		expect(creation).toMatchInlineSnapshot(`
			{
			  "files": {
			    ".gitignore": [
			      "/node_modules
			",
			      {
			        "executable": false,
			      },
			    ],
			    "README.md": [
			      "# Example Repository (Testing)

			Example repository created from create-example. 💕

			## Usage

			\`\`\`ts
			import { greet } from "example-repository";

			// Hello, world!
			console.log(greet("world"));
			\`\`\`

			## Contributing

			\`\`\`shell
			npm i
			npm run tsc
			\`\`\`

			> 💝 This package was templated with [\`create-handlebars-example\`](https://github.com/bingo-examples/create-handlebars-example) using the [Bingo engine](https://create.bingo).
			",
			      {
			        "executable": false,
			      },
			    ],
			    "package.json": [
			      "{
				"name": "example-repository",
				"version": "0.0.0",
				"description": "Example repository created from create-example. 💕",
				"repository": {
					"type": "git",
					"url": "git+https://github.com/bingo-examples/example-repository.git"
				},
				"type": "module",
				"main": "lib/index.js",
				"files": ["lib/", "package.json"],
				"scripts": {
					"tsc": "tsc"
				},
				"devDependencies": {
					"@types/node": "22.13.9",
					"typescript": "5.8.2"
				}
			}
			",
			      {
			        "executable": false,
			      },
			    ],
			    "src": {
			      "index.ts": [
			        "export function greet(name: string) { return \\\`Hello, \\\${name}!\\\`; }",
			        {
			          "executable": false,
			        },
			      ],
			    },
			    "tsconfig.json": [
			      "{
				"compilerOptions": {
					"declaration": true,
					"declarationMap": true,
					"esModuleInterop": true,
					"module": "NodeNext",
					"moduleResolution": "NodeNext",
					"outDir": "lib",
					"resolveJsonModule": true,
					"skipLibCheck": true,
					"strict": true,
					"target": "ES2022"
				},
				"include": ["src"]
			}
			",
			      {
			        "executable": false,
			      },
			    ],
			  },
			  "requests": [
			    {
			      "id": "repository-settings",
			      "send": [Function],
			    },
			  ],
			}
		`);
	});
});
