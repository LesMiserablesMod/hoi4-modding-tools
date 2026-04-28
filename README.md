# HOI4 Modding Tools

**English** | [简体中文](README.zh-CN.md)

A bilingual catalog of tools, references, editors, scripts, validators, asset collections, and workflow notes for Hearts of Iron IV mod development.

This project is maintained by the **LesMiserablesMod** community. Its goal is to help HOI4 modders find useful tools, understand what each tool is good for, and build a more reliable modding workflow.

## About LesMiserablesMod

[LesMiserablesMod](https://github.com/LesMiserablesMod?view_as=public) is the development group behind the Les Misérables HOI4 mod project.

The team values respectful collaboration, quality-first development, clear documentation, code review, and consistent project conventions. This catalog is part of that shared workflow: it collects external tools and references that help with maps, focus trees, localisation, GFX assets, scripting, validation, and publishing.

The same resources may also be useful to other HOI4 modders building or maintaining large mods.

## Documentation

The documentation site is built with **Fumadocs** and deployed with GitHub Pages.

- Site root: <https://lesmiserablesmod.github.io/hoi4-modding-tools/>
- English docs: <https://lesmiserablesmod.github.io/hoi4-modding-tools/en/docs>
- Simplified Chinese docs: <https://lesmiserablesmod.github.io/hoi4-modding-tools/zh-CN/docs>

The site root redirects to the Simplified Chinese documentation. Use the language switcher in the documentation UI to switch between English and Simplified Chinese.

## Featured Tools

- [HOI4 Modding Wiki](https://hoi4.paradoxwikis.com/Modding) - Official community-maintained reference for HOI4 modding.
- [HOI4 Province Editor](https://github.com/ScottyThePilot/hoi4_province_editor) - Province editing tool for HOI4 map development.
- [CWTools](https://github.com/cwtools/cwtools) - Parser, validator, and language tooling for Clausewitz engine games.
- [Paradox Translation Toolkit](https://github.com/khoeos/paradox-translation-toolkit/) - Localisation file management tool for Paradox games.
- [Ultimate-HOI4-GFX](https://github.com/Globvs/Ultimate-HOI4-GFX) - GFX asset collection for HOI4 modders.
- [Irony Mod Manager](https://github.com/bcssov/IronyModManager) - Mod manager for Paradox games.
- [Jomini](https://github.com/nickbabcock/jomini) - Parser library for Clausewitz and Jomini data files.

## Catalog

Catalog pages are stored as Markdown under `apps/docs/content/docs/catalog/`.

- [Map & Province Tools](apps/docs/content/docs/catalog/map-tools.md)
- [Focus Tree Tools](apps/docs/content/docs/catalog/focus-tree-tools.md)
- [Localisation Tools](apps/docs/content/docs/catalog/localisation-tools.md)
- [GFX & Asset Tools](apps/docs/content/docs/catalog/gfx-tools.md)
- [Scripting & Effect Tools](apps/docs/content/docs/catalog/scripting-tools.md)
- [Validation & Lint Tools](apps/docs/content/docs/catalog/validation-tools.md)
- [Workshop & Launcher Tools](apps/docs/content/docs/catalog/workshop-tools.md)
- [General Tools](apps/docs/content/docs/catalog/general-tools.md)

## Resources

- [Official Links](apps/docs/content/docs/resources/official-links.md)
- [Community Guides](apps/docs/content/docs/resources/community-guides.md)
- [Tutorials](apps/docs/content/docs/resources/tutorials.md)

## Repository Structure

```text
hoi4-modding-tools/
├── apps/docs/       # Fumadocs documentation site and Markdown content
├── tools/           # Source code for tools developed in this repository
├── licenses/        # License texts for code and documentation content
├── .github/         # Issue templates, PR template, and GitHub Actions
├── LICENSE          # Repository-level license policy summary
├── README.md
└── README.zh-CN.md
```

The older root-level `catalog/`, `resources/`, `docs/`, and `examples/` directories have been removed to avoid maintaining duplicate documentation. The documentation site is now the single source of truth.

## Writing Documentation

Write documentation pages in regular Markdown (`.md`) by default.

Use `.mdx` only when a page genuinely needs React or JSX components. This keeps the catalog easier to edit in normal Markdown editors and avoids MDX-specific rendering limitations for plain documentation.

Content lives in:

```text
apps/docs/content/docs/
```

Bilingual pages use this naming pattern:

```text
page.md
page.zh-CN.md
```

## Local Development

Install dependencies:

```bash
npm install
```

Run the documentation site locally:

```bash
npm run docs:dev
```

Build the site before publishing or checking deployment output:

```bash
npm run docs:build
```

When changing app code or configuration, run:

```bash
npm run docs:types
```

## Deployment

The documentation site is deployed to GitHub Pages by GitHub Actions:

```text
.github/workflows/deploy-docs.yml
```

The workflow builds the static site and publishes `apps/docs/out`. In repository settings, GitHub Pages should use **GitHub Actions** as the source.

## Contributing

Contributions are welcome. You can help by:

- Suggesting new HOI4 modding tools.
- Updating outdated tool information.
- Reporting broken links.
- Improving descriptions, categories, and usage notes.
- Contributing self-developed tools under `tools/`.

Before opening a pull request, read:

- [Add a Tool](apps/docs/content/docs/contribute/add-a-tool.md)
- [Writing Style](apps/docs/content/docs/contribute/writing-style.md)
- [License Policy](apps/docs/content/docs/contribute/license.md)

## License

This repository uses different licenses for different types of content.

- Documentation, catalog entries, tool descriptions, guides, examples, and website content are licensed under **CC BY-NC-SA 4.0**.
- Source code developed in this repository is licensed under **AGPL-3.0-or-later**, unless otherwise stated.
- Third-party tools and resources linked or mentioned in this project belong to their respective authors and are governed by their own licenses and terms.

See:

- [Repository License Policy](LICENSE)
- [Code License](licenses/LICENSE-CODE-AGPL-3.0-or-later)
- [Documentation License](licenses/LICENSE-DOCS-CC-BY-NC-SA-4.0)
