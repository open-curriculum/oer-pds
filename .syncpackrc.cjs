module.exports = {
  dependencyTypes: ['local', 'dev', 'prod'],
  semverRange: '^',
  source: ['package.json', 'apps/*/package.json', 'packages/*/package.json'],
  versionGroups: [
    {
      label: 'Pin local config packages to any version (*)',
      packages: ['**'],
      dependencies: ['@ois/tsconfig'],
      dependencyTypes: ['dev'],
      pinVersion: 'workspace:*',
    },
    {
      label: 'Pin unpublished local packages to any version (*)',
      packages: ['**'],
      dependencies: ['@ois/spec', '@ois/registry', '@ois/tsconfig'],
      dependencyTypes: ['dev', 'prod'],
      pinVersion: 'workspace:*',
    },
  ],
};
