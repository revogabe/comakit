import { execa } from "execa";

import * as prompt from "@clack/prompts";
import getManifest from "./get-manifest";

interface GetCliVersion {
  (): Promise<string | undefined>;
}

/**
 * Asynchronous function to retrieve the CLI version
 * @returns {Promise<string>} - The latest version of the CLI
 */
const getCliVersion: GetCliVersion = async function () {
  const manifest = getManifest();

  try {
    const { stdout } = await execa("npm", ["view", manifest.name, "version"]);
    return stdout;
  } catch (err) {
    prompt.log.error(
      `Error while getting the latest version of ${manifest.name}`
    );
  }
};

export default getCliVersion;
