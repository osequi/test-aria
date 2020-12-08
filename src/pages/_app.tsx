import type { AppProps } from "next/app";
import { SSRProvider } from "@react-aria/ssr";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
};

export default MyApp;
