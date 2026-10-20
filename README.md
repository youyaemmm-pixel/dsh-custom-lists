# 自定义列表 · dsh-custom-lists

**作者：YOUYA**  
**AI 辅助开发模型：GPT-6.1 Sol**

DeepSeek Harness 的本地界面插件。把冗长的平铺模型列表整理成来源、类型、渠道和模型目录，并在设置左侧提供独立配置页面。

> 非 DeepSeek 官方插件，不提供 API 服务，不附带账号或模型额度。
> 版本 1.2.1 为预发布候选：交互测试及用户当前页面检查通过，真实桌面端冷启动复测尚未完成。

## 功能

- 来源前缀：【官方】【插件】【中转】。当前会话选中来源的前缀绿色，其余灰色；不是请求正在执行的指示灯。
- 一级菜单只显示来源名称和模型总数，不展开冗长层级摘要。
- 官方／中转：来源 → 模型。
- 普通插件：来源 → 渠道 → 模型。
- Our Free Model：来源 → 四类型 → 渠道 → 模型。
- 四类型包括免费模型、EAC 模型、白嫖模型接入、聚合渠道。空分类保留入口与空状态。
- 保留 provider/model/reasoningEffort，不合并不同渠道的同名模型，不改变调用路径。
- 支持模型搜索、推理等级、刷新、逐层返回及 Escape。
- 设置中可新增分组、调整名称与顺序、选择来源类别、指定提供商归组，导入导出及恢复默认。
- 关闭「启用分层模型选择器」恢复官方选择器；不删除模型或账号。

## 安装

安装前请备份 DSH profile 配置。不要修改应用安装包。

### 通过插件管理器安装

本包在 `package.json` 中声明了 `dsh.bundle`（指向仓库根目录的 `cordis.patch.yml`），可用 DSH 插件管理器的「从 GitHub 安装」输入仓库地址：

```text
https://github.com/youyaemmm-pixel/dsh-custom-lists
```

仓库根目录直接包含 `package.json`、`index.js`、`client.js` 与 `cordis.patch.yml`，不需要构建步骤。

安装后刷新 GUI 生效；如界面未更新，完整退出并重开 DSH。

### 本地安装（开发／测试）

1. 将本目录解压到稳定的本地插件目录，确保目录内直接包含 package.json、index.js、client.js。
2. 在目标 profile 的 `cordis.patch.yml` 中新增以下条目，将示例 file URL 替换为**你自己的实际绝对路径**：

```yaml
- insert:
    - id: custom-lists
      name: "file:///ABSOLUTE/PATH/dsh-custom-lists/index.js"
```

Windows 路径需使用正确的 file URL，例如 `file:///C:/Plugins/dsh-custom-lists/index.js`。本包没有自动改写 profile 的安装脚本。

3. 刷新原 GUI；必要时完整退出并重开 DSH。
4. 设置左侧进入「自定义列表」确认启用和提供商归组。

以上本地方式只用于开发／测试，会绕过 bundle 声明直接挂载入口文件。市场收录状态以插件目录中的条目为准；收录不等于安全审查，也不会由本仓库单方面宣称。

## 示例目录

```text
【官方】官方来源
└─ 模型
【插件】Our Free Model
├─ 免费模型 → 渠道 → 模型（无模型时显示空状态）
├─ EAC 模型 → EAC → 模型
├─ 白嫖模型接入 → 账号渠道 → 模型
└─ 聚合渠道 → 渠道 → 模型（无模型时显示空状态）
【中转】自定义中转来源
└─ 模型
```

不附带任何用户分组或模型清单；界面从安装者当前模型目录读取可用内容。

## 数据与隐私

设置仅保存显示规则至浏览器 localStorage，按当前 profile 名称隔离；不包含凭据。换浏览器或清除站点数据前请导出设置。profile 名称在运行时由本机注入，不是本发布包内置的数据。不主动上传分组、profile 名称或诊断。详见 PRIVACY.md。

## 兼容性与限制

- 基于 DSH 官方模型组件 `0.2.0-rc.2` 的接口实现，不承诺兼容所有未来版本。
- 使用 `conversation.input.model`、`settings.section`、`modelDirectories`、`sessions` 和 `remote.session`；选择器优先级为 -10。不要与其他替换同一槽位的插件同时启用。
- `/model` 命令维持官方样式。
- OFM 无公开可靠的渠道归属接口：使用已核实 provider ID 表和其 EAC/Kilo 展示标签。新渠道可能需要手动归组。
- 四类型归属依据当前可见目录及已知规则推导，不是 OFM 完整后台分类 API 的镜像。未知提供商不保证自动正确归类；请检查实际结果。
- 不会在没有可用模型时伪造模型或连接；空目录不代表执行过网络连通性探测。
- 冷启动错误已补齐 remote/remote.session 依赖声明，但本版尚待真实桌面端重启复测。

## 故障与卸载

出现「自定义列表异常／会话错误」时记录完整错误，可尝试错误界面的重试或开关一次启用设置。提交 issue 前请去除账号、端点、密钥及本地路径。

卸载前建议导出显示规则；通过插件管理器禁用/卸载，或删除本地安装时新增的 custom-lists 补丁条目，然后刷新 GUI。不要覆盖整个 profile；那可能撤销其他配置修改。

## 许可

MIT。选择器适配自 DeepSeek Harness 官方组件，保留 DeepSeek 原许可。导航理念参考 dsh-model-picker，详见 THIRD_PARTY_NOTICES.md。
