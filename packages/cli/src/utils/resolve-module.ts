interface ResolveModule {
  <T = any>(path: string, cwd?: string): T;
}

/**
 * Function to resolve a module.
 * @param moduleName - The name of the module to resolve.
 * @param cwd - The current working directory.
 * @returns The resolved module.
 */
const resolveModule: ResolveModule = function (
  moduleName,
  cwd = process.cwd()
) {
  moduleName = moduleName.replace(/^\//, "");

  try {
    const module = require(`${cwd}/${moduleName}`);
    return module.default || module;
  } catch (err) {
    if (err instanceof Error) {
      const error = new Error();
      error.name = "ModuleNotFoundError";
      error.message = `Cannot find module '${moduleName}' from '${cwd}'`;
      throw error;
    }

    throw new Error("Unknown error");
  }
};

export default resolveModule;
