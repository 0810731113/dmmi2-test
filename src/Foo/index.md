---
nav:
  title: Foo
  order: 2
group:
  title: 组件
  order: 2
demo:
  cols: 2
  tocDepth: 4
---

<code title="我是第一列" src="../components/Comp/index.tsx">1</code>
<code title="我是第二列" src="../components/Comp2/index.tsx">2</code>

[//]: # '<embed src="../components/Comp/index.md" title="我是第一列">1</embed>'
[//]: # '<embed src="../components/Comp2/index.md" title="我是第二列">2</embed>'

### Info Badge <Badge>info</Badge>

### Warning Badge <Badge type="warning">warning</Badge>

### Error Badge <Badge type="error">error</Badge>

### Success Badge <Badge type="success">success</Badge>

:::info{title=自定义标题}
这是一条普通信息
:::

:::success
这是一条成功信息
:::

:::warning
这是一条警告信息
:::

:::error
这是一条错误信息
:::
