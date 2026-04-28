# HOI4 Modding Tools

[English](README.md) | **简体中文**

一个面向 Hearts of Iron IV Mod 开发者的双语工具、资料、编辑器、脚本、校验器、美术资源与工作流参考索引。

本项目由 **LesMiserablesMod** 社区维护，目标是帮助 HOI4 Mod 作者更方便地发现工具、理解工具用途，并建立更可靠的 Mod 开发工作流。

## 关于 LesMiserablesMod

[LesMiserablesMod](https://github.com/LesMiserablesMod?view_as=public) 是 Les Misérables HOI4 Mod 项目的开发组。

团队重视尊重协作、质量优先、文档清晰、代码审查和统一的项目规范。这个工具目录是制作组共享工作流的一部分，整理了地图、省份、国策树、本地化、GFX 美术资源、脚本、校验和发布流程相关的外部工具与参考资料。

这些资料既服务于 LesMiserablesMod 的开发工作，也希望能帮助其他正在制作或维护大型 HOI4 Mod 的作者。

## 文档站

文档站使用 **Fumadocs** 构建，并通过 GitHub Pages 部署。

- 站点入口：<https://lesmiserablesmod.github.io/hoi4-modding-tools/>
- English docs: <https://lesmiserablesmod.github.io/hoi4-modding-tools/en/docs>
- 简体中文文档：<https://lesmiserablesmod.github.io/hoi4-modding-tools/zh-CN/docs>

站点入口会跳转到简体中文文档。进入文档后，可以使用页面内的语言切换功能在英文和简体中文之间切换。

## 推荐工具

- [HOI4 Modding Wiki](https://hoi4.paradoxwikis.com/Modding) - HOI4 Modding 的官方社区维护参考资料。
- [HOI4 Province Editor](https://github.com/ScottyThePilot/hoi4_province_editor) - 用于 HOI4 地图与省份编辑的工具。
- [CWTools](https://github.com/cwtools/cwtools) - 面向 Clausewitz 引擎游戏的解析、校验与语言工具。
- [Paradox Translation Toolkit](https://github.com/khoeos/paradox-translation-toolkit/) - 面向 P 社游戏的本地化文件管理工具。
- [Ultimate-HOI4-GFX](https://github.com/Globvs/Ultimate-HOI4-GFX) - 面向 HOI4 Mod 作者的 GFX 素材集合。
- [Irony Mod Manager](https://github.com/bcssov/IronyModManager) - 面向 P 社游戏的 Mod 管理工具。
- [Jomini](https://github.com/nickbabcock/jomini) - Clausewitz / Jomini 数据文件解析库。

## 工具目录

工具目录以 Markdown 形式存放在 `apps/docs/content/docs/catalog/`。

- [地图与省份工具](apps/docs/content/docs/catalog/map-tools.zh-CN.md)
- [国策树工具](apps/docs/content/docs/catalog/focus-tree-tools.zh-CN.md)
- [本地化工具](apps/docs/content/docs/catalog/localisation-tools.zh-CN.md)
- [GFX 与美术资源工具](apps/docs/content/docs/catalog/gfx-tools.zh-CN.md)
- [脚本与效果工具](apps/docs/content/docs/catalog/scripting-tools.zh-CN.md)
- [校验与 Lint 工具](apps/docs/content/docs/catalog/validation-tools.zh-CN.md)
- [创意工坊与启动器工具](apps/docs/content/docs/catalog/workshop-tools.zh-CN.md)
- [通用工具](apps/docs/content/docs/catalog/general-tools.zh-CN.md)

## 资料索引

- [官方链接](apps/docs/content/docs/resources/official-links.zh-CN.md)
- [社区教程](apps/docs/content/docs/resources/community-guides.zh-CN.md)
- [教程合集](apps/docs/content/docs/resources/tutorials.zh-CN.md)

## 项目结构

```text
hoi4-modding-tools/
├── apps/docs/       # Fumadocs 文档站与 Markdown 内容源
├── tools/           # 本项目自研工具源码
├── licenses/        # 文档协议与代码协议
├── .github/         # Issue 模板、PR 模板与 GitHub Actions
├── LICENSE          # 仓库级协议说明
├── README.md
└── README.zh-CN.md
```

旧的根目录 `catalog/`、`resources/`、`docs/`、`examples/` 已经移除，避免重复维护两份文档。现在文档站内容是唯一内容源。

## 编写文档

普通文档默认使用 Markdown（`.md`）。

只有页面确实需要 React 或 JSX 组件时，才使用 `.mdx`。这样可以让工具目录更适合普通 Markdown 编辑器，也能减少 MDX 对纯文档写作带来的显示限制。

内容源目录：

```text
apps/docs/content/docs/
```

双语页面使用以下命名方式：

```text
page.md
page.zh-CN.md
```

## 本地开发

安装依赖：

```bash
npm install
```

启动文档站：

```bash
npm run docs:dev
```

发布前或检查部署产物时，构建文档站：

```bash
npm run docs:build
```

修改应用代码或配置后，可以运行：

```bash
npm run docs:types
```

## 部署

文档站通过 GitHub Actions 部署到 GitHub Pages：

```text
.github/workflows/deploy-docs.yml
```

该 workflow 会构建静态站点，并将 `apps/docs/out` 发布到 GitHub Pages。仓库设置中的 GitHub Pages Source 应设置为 **GitHub Actions**。

## 参与贡献

欢迎参与贡献。你可以通过以下方式帮助本项目：

- 推荐新的 HOI4 Modding 工具。
- 更新已有工具的信息。
- 报告失效链接。
- 改进工具描述、分类与使用说明。
- 在 `tools/` 下贡献本项目自研工具。

提交 Pull Request 前，请先阅读：

- [添加工具](apps/docs/content/docs/contribute/add-a-tool.zh-CN.md)
- [写作风格](apps/docs/content/docs/contribute/writing-style.zh-CN.md)
- [协议说明](apps/docs/content/docs/contribute/license.zh-CN.md)

## 协议

本项目对不同内容采用不同协议：

- 文档、工具目录、工具介绍、指南、示例与网站内容采用 **CC BY-NC-SA 4.0** 协议。
- 本仓库内自研代码默认采用 **AGPL-3.0-or-later** 协议，除非另有说明。
- 本项目引用或介绍的第三方工具与资源，其版权与协议归原作者所有，请遵循对应项目自身的许可证和使用条款。

详见：

- [仓库协议说明](LICENSE)
- [代码协议](licenses/LICENSE-CODE-AGPL-3.0-or-later)
- [文档协议](licenses/LICENSE-DOCS-CC-BY-NC-SA-4.0)
