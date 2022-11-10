import { ConnectWallet, Web3sdkioProvider } from "@web3sdkio/react";

export const KitchenSink = () => {
  return (
    <Web3sdkioProvider>
      <WrappedKitchenSink />
    </Web3sdkioProvider>
  );
};

const WrappedKitchenSink = () => {
  return (
    <div id="kitchen-sink">
      <ConnectWallet />
    </div>
  );
};

export default function Home() {
  return <KitchenSink />;
}
