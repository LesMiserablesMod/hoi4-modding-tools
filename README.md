# HOI4 Modding Tools

A curated collection of tools, resources, editors, scripts, validators, and references for Hearts of Iron IV mod development.

This project is maintained by the **LesMiserablesMod** community. It aims to help HOI4 modders discover useful tools, compare their use cases, and build a more reliable modding workflow.

## Featured Tools

> This section highlights several useful HOI4 modding tools. The full catalog is available in the documentation and category pages.

- [HOI4 Modding Wiki](https://hoi4.paradoxwikis.com/Modding) - Official community-maintained reference for HOI4 modding.
- [HOI4 Province Editor](https://github.com/ScottyThePilot/hoi4_province_editor) - A province editing tool for HOI4 map development.
- [CWTools](https://github.com/cwtools/cwtools) - Parser, validator, and language tooling for Clausewitz engine games.
- [Paradox Translation Toolkit](https://github.com/khoeos/paradox-translation-toolkit/) - A localisation file management tool for Paradox games.
- [Ultimate-HOI4-GFX](https://github.com/Globvs/Ultimate-HOI4-GFX) - A GFX asset collection for HOI4 modders.
- [Irony Mod Manager](https://github.com/bcssov/IronyModManager) - Mod manager for Paradox games.
- [Jomini](https://github.com/nickbabcock/jomini) - Parser library for Clausewitz/Jomini data files.

## Catalog

The catalog is organized by modding area:

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

## Documentation Site

This project uses **Fumadocs** for the documentation website.

The documentation source is located under:

```text
apps/docs/
```

Local documentation routes:

- English: `http://localhost:3000/hoi4-modding-tools/en/docs`
- Simplified Chinese: `http://localhost:3000/hoi4-modding-tools/zh-CN/docs`

The same path structure is used for GitHub Pages:

```text
https://<owner>.github.io/hoi4-modding-tools/
```

## Repository Structure

```text
hoi4-modding-tools/
├── apps/docs/      # Fumadocs documentation site
├── tools/          # Source code for tools developed in this repository
├── licenses/       # License texts for code and documentation
└── .github/        # Issue templates and pull request templates
```

## Contributing

Contributions are welcome.

You can help by:

- Suggesting a new HOI4 modding tool.
- Updating outdated tool information.
- Reporting broken links.
- Improving descriptions, categories, and usage notes.
- Contributing tools developed under this project.

Before submitting a pull request, please read:

- [Add a Tool](apps/docs/content/docs/contribute/add-a-tool.md)
- [Writing Style](apps/docs/content/docs/contribute/writing-style.md)
- [License Policy](apps/docs/content/docs/contribute/license.md)

## License

This repository uses different licenses for different parts of the project.

- Documentation, catalog entries, tool descriptions, guides, examples, and website content are licensed under **CC BY-NC-SA 4.0**.
- Source code developed in this repository is licensed under **AGPL-3.0-or-later**, unless otherwise stated.
- Third-party tools and resources linked or mentioned in this project belong to their respective authors and are governed by their own licenses.

When reusing, redistributing, translating, or adapting the catalog or documentation, please provide clear attribution to this project and link back to the original repository.

See:

- [Code License](licenses/LICENSE-CODE-AGPL-3.0-or-later)
- [Documentation License](licenses/LICENSE-DOCS-CC-BY-NC-SA-4.0)
