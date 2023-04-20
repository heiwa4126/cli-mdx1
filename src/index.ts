#!/usr/bin/env node

import { evaluate } from "@mdx-js/mdx";
import { RunnerOptions } from "@mdx-js/mdx/lib/util/resolve-evaluate-options.js";
import { readFile } from "node:fs/promises";
import { renderToString } from "react-dom/server";
import * as runtime from "react/jsx-runtime";

async function main() {
  console.log(runtime);

  console.log("---");
  const Mdx1 = await evaluate(await readFile("./data/example.mdx"), runtime as RunnerOptions);
  console.log(Mdx1);

  console.log("---");
  const jsx1 = Mdx1.default({ name: "Alice" });
  console.log(renderToString(jsx1));
  // JSX中なら <Mdx1 name={"Alice"} /> でいいはず?
}

main();
