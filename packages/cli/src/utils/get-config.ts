import { z } from "zod";

import fg from "fast-glob";

import * as prompt from "@clack/prompts";

export type Configfile = z.infer<typeof configSchema>;

export interface GetConfigFile {
  (cwd: string): Promise<Configfile | null>;
}

export const configSchema = z.object({
  $schema: z.string(),
  aliases: z.object({
    components: z.string(),
    utils: z.string(),
  }),
  framework: z.object({
    css: z.string(),
    javascript: z.string(),
  }),
  options: z.object({
    rsc: z.boolean(),
    typescript: z.boolean(),
    cssGlobalDirectory: z.string(),
  }),
});

/**
 * Asynchronous function to get the config file.
 *
 * @param cwd - The current working directory
 * @returns The parsed config file, or null if not found
 */
const getConfigFile: GetConfigFile = async function (cwd) {
  try {
    const [configResult] = await fg(["comakit.json"], {
      cwd,
      ignore: ["**/node_modules/**"],
    });

    if (!configResult) {
      return null;
    }

    return configSchema.parse(JSON.parse(configResult));
  } catch (err: unknown) {
    if (err instanceof Error || err instanceof Error) {
      prompt.log.error(err.message);
      process.exit(1);
    }

    prompt.log.error("Unknown error: Please, contact the developer.");
    process.exit();
  }
};

export default getConfigFile;
