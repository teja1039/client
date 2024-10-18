import "@/styles/globals.css";
import "@/styles/App.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { AuthProvider } from "@/components/ContextProviders/AuthContexProvider/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}
