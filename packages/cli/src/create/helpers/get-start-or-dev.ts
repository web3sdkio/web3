import got from "got/dist/source";

export const getStartOrDev = async (name: string) => {
  try {
    const data = (await got
      .get(
        `https://raw.githubusercontent.com/web3sdkio-template/${name}/main/package.json`,
      )
      .json()) as any;

    if (data?.scripts?.dev) {
      return "dev";
    }

    return "start";
  } catch (e) {
    return undefined;
  }
};
