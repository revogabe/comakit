import { note } from "@clack/prompts";
import * as colors from "picocolors";

import getCliVersion from "./get-cli-version";
import getManifest from "./get-manifest";

interface CheckLatestVersion {
  (): Promise<void>;
}

/**
 * Asynchronous function to check the latest version.
 *
 * @return {Promise<void>} Promise that resolves when the check is complete
 */
const checkLatestVersion: CheckLatestVersion = async function () {
  const manifest = getManifest();

  const currentVersion = manifest.version;
  const latestVersion = await getCliVersion();

  if (latestVersion && latestVersion !== currentVersion) {
    const message = `${colors.white(
      `You are not using the latest stable version of ${manifest.name}.`
    )}
  ${colors.white(`with new features and bug fixes.`)}
  
  ${colors.yellow(latestVersion).padStart(36)} - ${colors.green(currentVersion)}
  
  🚀 ${colors.white("To update run:")} ${colors.cyan(
    `npm i -g ${manifest.name}@latest`
  )}
  `;

    note(message, "Update Available");
  }
};

export default checkLatestVersion;
