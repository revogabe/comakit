#!/usr/bin/env node

import { cli } from "cleye";
import * as prompt from "@clack/prompts";

import getManifest from "./utils/get-manifest";
import checkLatestVersion from "./utils/check-latest-verstion";

import initCommand from "./commands/init";

async function main() {
  const manifest = getManifest();

  console.clear();

  prompt.intro(manifest.name);

  await checkLatestVersion();

  cli({
    version: manifest.version,
    commands: [initCommand],
    help: {
      description: manifest.description,
      render() {
        return "Help";
      },
    },
  });
}

main();
