import fs from "node:fs";

import { z } from "zod";
import { command } from "cleye";

import * as color from "picocolors";
import * as prompt from "@clack/prompts";

import colors from "../constants/colors";

import preheating from "../utils/preheating";
import getConfigFile from "../utils/get-config";

const initFlagSchema = z.object({
  cwd: z.string(),
});

const promptSchema = z.object({
  typescript: z.boolean(),
  grayColor: z.string(),
  primaryColor: z.string(),
  configFile: z.string(),
  utilsAliases: z.string(),
  componentAliases: z.string(),
  cssGlobalDirectory: z.string(),
});

interface ExecutePrompt {
  (): Promise<z.infer<typeof promptSchema>>;
}

const executePrompt: ExecutePrompt = async function () {
  const prompts = await prompt.group({
    typescript() {
      const message = `Would you like to use ${color.cyan(
        "TypeScript"
      )} ${color.dim("(Recommended)")}?`;

      return prompt.confirm({
        message,
        active: "Yes",
        inactive: "No",
        initialValue: true,
      });
    },
    grayColor() {
      const message = `Choose a ${color.cyan(
        "Gray Color"
      )} from the option bellow:`;

      return prompt.select({
        message,
        initialValue: "neutral",
        options: colors.gray,
      });
    },
    primaryColor() {
      const message = `Choose a ${color.cyan(
        "Primary Color"
      )} from the option bellow:`;

      return prompt.select({
        message,
        initialValue: "orange",
        options: colors.primary,
      });
    },
    configFile({ results }: { results: Record<string, unknown> }) {
      const message = `Specify the location of your ${color.cyan(
        `tailwind.config.${results.typescript ? "ts" : "js"}`
      )}`;

      return prompt.text({
        message,
        placeholder: `tailwind.config.${results.typescript ? "ts" : "js"}`,
        defaultValue: `tailwind.config.${results.typescript ? "ts" : "js"}`,
      });
    },
    cssGlobalDirectory() {
      const message = `Where do you store your${color.cyan("Global CSS")}`;

      return prompt.text({
        message,
        placeholder: "app/globals.css",
        defaultValue: "app/globals.css",
      });
    },
    componentAliases() {
      const message = `Configure the import alias for ${color.cyan(
        "Components"
      )}`;

      return prompt.text({
        message,
        placeholder: "@/components",
        defaultValue: "@/components",
      });
    },
    utilsAliases() {
      const message = `Configure the import alias for ${color.cyan(
        "Utilities"
      )}`;

      return prompt.text({
        message,
        placeholder: "@/lib/utils",
        defaultValue: "@/lib/utils",
      });
    },
    useReactServerComponents() {
      const message = `Are you using ${color.cyan("React Server Components")}`;

      return prompt.confirm({
        message,
        active: "Yes",
        inactive: "No",
        initialValue: true,
      });
    },
    configurationFile() {
      const message = `Whould you like to write configuration to ${color.cyan(
        "comakit.json"
      )}`;

      return prompt.confirm({
        message,
        active: "Yes",
        inactive: "No",
        initialValue: true,
      });
    },
  });

  const validate = promptSchema.safeParse(prompts);

  if (!validate.success) {
    throw new Error(validate.error.message);
  }

  return validate.data;
};

interface InitRunner {
  (cwd: string, config: z.infer<typeof promptSchema>): Promise<void>;
}

const spinner = prompt.spinner();
const initRunner: InitRunner = async function (cwd, config) {
  spinner.start("Initializing Comakit project...");

  fs.writeFileSync(
    `${cwd}/comakit.json`,
    JSON.stringify(config, undefined, 2),
    {
      encoding: "utf-8",
    }
  );

  spinner.stop("Ready!");
};

export default command(
  {
    name: "init",
    description: "Initializes anew Comakit Ui project",
    flags: {
      cwd: {
        type: String,
        default: process.cwd(),
        description:
          "The working directory. Defaults to current working directory",
      },
    },
  },
  async function ({ flags }: { flags: z.infer<typeof initFlagSchema> }) {
    try {
      const { cwd } = initFlagSchema.parse(flags);

      if (!fs.existsSync(cwd)) {
        throw new Error(`Directory ${cwd} does not exist`);
      }

      await preheating(cwd);

      const configFile = await getConfigFile(cwd);

      if (configFile) {
        // Should be complete config if necessary
        throw new Error(`File comakit.json already exists.`);
      } else {
        const prompts = await executePrompt();
        await initRunner(cwd, prompts);
      }

      prompt.log.success(
        "Project initialized successfully. You may now add components"
      );
    } catch (err: unknown) {
      if (err instanceof Error || err instanceof Error) {
        prompt.log.error(err.message);
        process.exit(1);
      }

      prompt.log.error("Unknown error: Please, contact the developer.");
      process.exit();
    }
  }
);
