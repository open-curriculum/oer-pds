# Shared TypeScript Configs

This directory contains the shared TypeScript configuration files used across the OIS workspace.

## Files

- `base.json` - common compiler defaults shared by workspace packages
- `node.json` - settings for Node-oriented packages and scripts
- `lib-js.json` - settings for JavaScript library packages
- `lib-react.json` - legacy React-oriented library settings inherited from the starter template
- `vite.json` - settings intended for Vite-based apps

## Usage

Workspace packages extend these configs from their local `tsconfig.json` files.

Examples in this repo:

- `packages/ois-spec/tsconfig.json` extends the shared base config
- `packages/ois-registry/tsconfig.json` extends the shared base config and overrides module settings for ESM output

In this repository, this directory functions as an internal shared config set for workspace packages.
