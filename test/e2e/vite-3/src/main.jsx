import { ConnectWallet, Web3sdkioProvider } from "@web3sdkio/react";
import React from "react";
import ReactDOM from "react-dom/client";

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <KitchenSink />
  </React.StrictMode>,
);
