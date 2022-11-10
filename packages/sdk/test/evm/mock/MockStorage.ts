import {
  MockUploader,
  MockDownloader,
  Web3sdkioStorage,
} from "@web3sdkio/storage";

export function MockStorage(): Web3sdkioStorage {
  // Store mapping of URIs to files/objects
  const storage = {};

  const uploader = new MockUploader(storage);
  const downloader = new MockDownloader(storage);
  return new Web3sdkioStorage({ uploader, downloader });
}
