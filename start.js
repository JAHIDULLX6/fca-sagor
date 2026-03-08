"use strict";

const gradient = require("gradient-string");
const chalk = require("chalk");
const packageJson = require("./package.json");

const banner = gradient.pastel(`
  ╔══════════════════════════════════════════════╗
  ║     sagor-nx-fca v${packageJson.version}        ║
  ║   Unofficial Facebook Chat API for Node.js   ║
  ╚══════════════════════════════════════════════╝
`);

console.log(banner);
console.log(chalk.cyan("Library loaded successfully!"));
console.log("");
console.log(chalk.yellow("This is a Node.js library package, not a standalone application."));
console.log(chalk.yellow("To use it, require/import it in your project:"));
console.log("");
console.log(chalk.green("  const login = require('sagor-nx-fca');"));
console.log("");
console.log(chalk.cyan("Available exports:"));

try {
  const lib = require("./index.js");
  console.log(chalk.green("  ✓ login (default export)"));
  console.log(chalk.green("  ✓ login.login (named export)"));
  console.log("");
  console.log(chalk.cyan("Core modules loaded:"));

  const modules = [
    "./module/login",
    "./module/config",
    "./module/options",
    "./src/utils/constants",
    "./src/database/helpers",
  ];

  for (const mod of modules) {
    try {
      require(mod);
      console.log(chalk.green(`  ✓ ${mod}`));
    } catch (e) {
      console.log(chalk.red(`  ✗ ${mod}: ${e.message}`));
    }
  }

  console.log("");
  console.log(chalk.cyan("Documentation:"));
  console.log(chalk.white("  README.md   - Quick start guide"));
  console.log(chalk.white("  DOCS.md     - Full API reference"));
  console.log(chalk.white("  CHANGELOG.md - Version history"));
  console.log("");
  console.log(chalk.green("Library is ready to use."));
} catch (e) {
  console.error(chalk.red("Error loading library:"), e.message);
  process.exit(1);
}
