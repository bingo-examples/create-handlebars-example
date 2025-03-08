import { CreatedDirectory } from "bingo-fs";
import { createTemplate } from "bingo";
import { handlebars } from "bingo-handlebars";
import path from "node:path";
import { titleCase } from "title-case";
import { z } from "zod";

export const template = createTemplate({
	options: {
		description: z
			.string()
			.default("Example repository created from create-handlebars-example. 💕")
			.describe("'Sentence case.' description of the repository"),
		owner: z
			.string()
			.describe("GitHub organization or user the repository is underneath"),
		repository: z
			.string()
			.describe("'kebab-case' or 'PascalCase' title of the repository"),
		title: z.string().describe("'Title Case' title for the repository"),
	},
	prepare({ options }) {
		return {
			title: options.repository
				? titleCase(options.repository).replaceAll("-", " ")
				: undefined,
		};
	},
	async produce({ options }) {
		return {
			files: (await handlebars(
				path.join(import.meta.dirname, "../template"),
				options,
			)) as CreatedDirectory,
			requests: [
				{
					id: "repository-settings",
					async send({ octokit }) {
						await octokit.rest.repos.update({
							description: options.description,
							owner: options.owner,
							repo: options.repository,
						});
					},
				},
			],
		};
	},
});

export default template;

export const { createConfig } = template;
