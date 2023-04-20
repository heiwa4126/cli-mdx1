# cli-mdx1

.mdxファイルを
JSX.Elementに変換して、
それをHTMLとして表示する
TypeScriptのCLIサンプル。

## 実行

```bash
pnpm i
pnpm build
pnpm start
```

## 開発

```bash
pnpm watch
```
で、ソースを書き換えて

```bash
pnpm start
```
で実行。


## 参考

- [Using MDX \| MDX](https://mdxjs.com/docs/using-mdx/)
- [@mdx\-js/mdx \| MDX](https://mdxjs.com/packages/mdx/) - compile()を使った例が載ってる。あとでremarkPluginsを入れてみる。


## TODO

ここがキモい。たぶんオプションの使い方が間違ってるのでなんとかする。
```TypeScript
import { RunnerOptions } from "@mdx-js/mdx/lib/util/resolve-evaluate-options.js";
```

[compile()](https://mdxjs.com/packages/mdx/#compilefile-options)のほうがオプションが多い感じ。
compile & runにするべき。


## メモ

.mdx中のJavaScriptはハイライトも補完も効かないので間違えやすい。
なんとかならんのか。

Next.js 中でMDX使うなら以下参照

* [Advanced Features: Using MDX \| Next\.js](https://nextjs.org/docs/advanced-features/using-mdx)
* [Markdown and MDX | Next.js](https://beta.nextjs.org/docs/guides/mdx#mdx)
* [next-mdx-remote - npm](https://www.npmjs.com/package/next-mdx-remote)
