import resolveModule from "./resolve-module";

export interface PublishConfig {
  access: string;
}

export interface Engines {
  node?: string;
  npm?: string;
}

interface Repository {
  url: string;
  type: string;
  directory?: string;
}

export interface Manifest {
  name: string;
  type: string;
  main: string;
  author: string;
  license: string;
  engines: Engines;
  publishConfig: PublishConfig;
  version: string;
  files: string[];
  keywords: string[];
  description: string;
  repository: Repository;
  bin: Record<string, string>;
  scripts: Record<string, string>;
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  peerDependencies: Record<string, any>;
}

interface GetManifest {
  (): Manifest;
}

/**
 * Function to get the manifest
 * @returns {GetManifest} - The manifest
 */
const getManifest: GetManifest = function () {
  return resolveModule<Manifest>("package.json");
};

export default getManifest;
