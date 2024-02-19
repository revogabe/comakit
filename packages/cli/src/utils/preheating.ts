import fg from "fast-glob";

export interface Preheating {
  (cwd: string): Promise<boolean>;
}

/**
 * Preheating function that checks for the presence of Tailwind CSS configuration files
 * @param cwd - The current working directory
 * @returns A promise that resolves to a boolean indicating whether Tailwind CSS is installed
 */
const preheating: Preheating = async function (cwd) {
  const cssConfigFiles = await fg(["tailwind.config.*"], {
    cwd,
    deep: 2,
    ignore: ["**/node_modules/**", ".next", "public", "dist", "build"],
  });

  if (!cssConfigFiles.length) {
    throw new Error(
      "Tailwind CSS is not installed. Visit https://tailwindcss.com/docs/installation to get started."
    );
  }

  return true;
};

export default preheating;
