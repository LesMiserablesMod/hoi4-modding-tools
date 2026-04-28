# HOI4 Modding Tools

一个面向 Hearts of Iron IV Mod 开发者的工具、资料、编辑器、脚本、校验器与参考资源索引。

本项目由 **LesMiserablesMod** 社区维护，目标是帮助 HOI4 Mod 作者更方便地发现工具、理解工具用途，并建立更可靠的 Mod 开发工作流。

## 推荐工具

> 这里会优先展示几个常用或值得关注的 HOI4 Modding 工具。完整工具目录请查看文档站或分类页面。

- [HOI4 Modding Wiki](https://hoi4.paradoxwikis.com/Modding) - HOI4 Modding 的官方社区维护参考资料。
- [HOI4 Province Editor](https://github.com/ScottyThePilot/hoi4_province_editor) - 用于 HOI4 地图与省份编辑的工具。
- [CWTools](https://github.com/cwtools/cwtools) - 面向 Clausewitz 引擎游戏的解析、校验与语言工具。
- [Paradox Translation Toolkit](https://github.com/khoeos/paradox-translation-toolkit/) - 面向 P 社游戏的本地化文件管理工具。
- [Ultimate-HOI4-GFX](https://github.com/Globvs/Ultimate-HOI4-GFX) - 面向 HOI4 Mod 作者的 GFX 素材集合。
- [Irony Mod Manager](https://github.com/bcssov/IronyModManager) - 面向 P 社游戏的 Mod 管理工具。
- [Jomini](https://github.com/nickbabcock/jomini) - Clausewitz / Jomini 数据文件解析库。

## 工具目录

工具目录按照 Mod 开发领域进行分类：

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

## 文档站

本项目使用 **Fumadocs** 构建文档站。

文档站源码位于：

```text
apps/docs/
```

本地文档路由：

- English: `http://localhost:3000/hoi4-modding-tools/en/docs`
- 简体中文: `http://localhost:3000/hoi4-modding-tools/zh-CN/docs`

GitHub Pages 使用同样的子路径结构：

```text
https://<owner>.github.io/hoi4-modding-tools/
```

## 项目结构

```text
hoi4-modding-tools/
├── apps/docs/      # Fumadocs 文档站与 Markdown 内容源
├── tools/          # 本项目自研工具源码
├── licenses/       # 文档协议与代码协议
└── .github/        # Issue 模板、PR 模板与 GitHub Actions
```

## 参与贡献

欢迎参与贡献。

你可以通过以下方式帮助本项目：

- 推荐新的 HOI4 Modding 工具。
- 更新已有工具的信息。
- 报告失效链接。
- 改进工具描述、分类与使用说明。
- 贡献本项目下的自研工具。

提交 Pull Request 前，请先阅读：

- [添加工具](apps/docs/content/docs/contribute/add-a-tool.zh-CN.md)
- [写作风格](apps/docs/content/docs/contribute/writing-style.zh-CN.md)
- [协议说明](apps/docs/content/docs/contribute/license.zh-CN.md)

## 协议

本项目对不同内容采用不同协议：

- 文档、工具目录、工具介绍、指南、示例与网站内容采用 **CC BY-NC-SA 4.0** 协议。
- 本仓库内自研代码默认采用 **AGPL-3.0-or-later** 协议，除非对应目录另有说明。
- 本项目引用或介绍的第三方工具，其版权与协议归原作者所有，请遵循对应项目自身的许可证。

如需转载、改编、翻译或分发本项目整理的工具目录与文档内容，请明确注明来源并链接回本项目。

详见：

- [代码协议](licenses/LICENSE-CODE-AGPL-3.0-or-later)
- [文档协议](licenses/LICENSE-DOCS-CC-BY-NC-SA-4.0)
