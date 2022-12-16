import NPMDetector from "../core/detection/npm";
import ViteDetector from "../core/detection/vite";
import YarnDetector from "../core/detection/yarn";
import { runCommand } from "../create/helpers/run-command";
import { upload } from "../storage/command";
import { DEFAULT_IPFS_GATEWAY } from "@web3sdkio/sdk";
import { Web3sdkioStorage } from "@web3sdkio/storage";

export async function deployApp(distPath = "dist", projectPath = ".") {
  const storage = new Web3sdkioStorage();
  const supportedFrameworks = [new ViteDetector()];

  const possibleProjects = supportedFrameworks
    .filter((detector) => detector.matches(projectPath))
    .map((detector) => detector.projectType);

  const hasYarn = new YarnDetector().matches(".");
  const hasNPM = new NPMDetector().matches(".");

  if (possibleProjects.length === 0) {
    throw new Error("No supported project detected");
  }

  try {
    if (hasYarn) {
      await runCommand("yarn", ["build"]);
    } else if (hasNPM) {
      await runCommand("npm", ["build"]);
    }
  } catch (err) {
    console.error("Can't build project");
    return Promise.reject("Can't build project");
  }

  try {
    let url = await upload(storage, distPath);
    url = url.replace("ipfs://", DEFAULT_IPFS_GATEWAY);
    return `${url}/index.html`;
  } catch (err) {
    console.error("Can't upload project");
    return Promise.reject("Can't upload project");
  }
}
