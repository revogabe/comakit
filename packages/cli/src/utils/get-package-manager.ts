import { detect } from "@antfu/ni";

export interface GetPackageManager {
  (cwd: string): Promise<"npm" | "yarn" | "pnpm" | "bun">;
}

/**
 * Function to get the package manager based on the provided current working directory (cwd)
 * @param {string} cwd - Current working directory
 * @returns {Promise<string>} - Resolves to the detected package manager
 */
const getPackageManager: GetPackageManager = async function (cwd) {
  const packageManager = await detect({
    cwd,
    programmatic: true,
  });

  switch (packageManager) {
    case "yarn@berry":
      return "yarn";
    case "pnpm@6":
      return "pnpm";
    case "bun":
      return "bun";
    default:
      return packageManager ?? "npm";
  }
};

export default getPackageManager;
