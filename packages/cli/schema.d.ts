/**
 * Represents the ComakitFramework interface.
 * It defines the structure of the Comakit framework.
 */
interface ComakitFramework {
  css: string;
  javascript: string;
}

/**
 * Represents the ComakitAlias interface.
 * It defines aliases for different parts of the Comakit framework.
 */
interface ComakitAlias {
  components: string;
  utils: string;
}

/**
 * Represents the ComakitOptions interface.
 * It defines various options for the Comakit framework.
 */
interface ComakitOptions {
  rsc: boolean;
  cssGlobalDirectory: string;
  typescript: boolean;
}

/**
 * Represents the ComakitConfiguration interface.
 * It defines the configuration options for Comakit.
 */
export interface ComakitConfiguration {
  $schema?: string;
  aliases?: ComakitAlias;
  framework?: ComakitFramework;
  options?: ComakitOptions;
}
