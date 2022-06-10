# 中后台研发工作台
> Build with deno

预览地址：https://urbanic.deno.dev

## 开发
```bash
> deno run --allow-all --watch index.ts
```

## 📢 注意事项

由于 Deno Deploy 平台限制了容器 `fs` 文件对象 API（[文档](https://deno.com/deploy/docs/runtime-fs)），导致模板引擎 `eta` 中读取模板文件存在异常，参考 [issue](https://github.com/eta-dev/eta/issues/172)，这里暂时 fork  `eta` 源码，使用 `exits` 异步 API



