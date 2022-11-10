const fs = require("fs");

const existingPackageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));

const newPackageJson = { ...existingPackageJson, name: "web3sdkio" };

fs.writeFileSync("package.json", JSON.stringify(newPackageJson, null, 2));

fs.writeFileSync(
  "README.md",
  `# web3sdkio cli

  This is a proxied package of the \`@web3sdkio/cli\` for convenient usage with \`npx web3sdkio\`.
  
  You can find the actual package [here](https://www.npmjs.com/package/@web3sdkio/cli).
  `
);
