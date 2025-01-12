// You can access the `flags` object directly in code.
// This is for flags set in this codebase.
// For feature flags that are determined by an endpoint, see ...

/**
 * Begin dev flags.
 * Modify these flags as needed.
 * Not a big deal if they get beyond dev to test, stage or prod.
 */

const devFlags = {
  debug: false,
};

/**
 * End dev flags.
 * DO NOT MODIFY BELOW THIS LINE.
 */

export const flags = {
  ...devFlags,
};
