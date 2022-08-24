import type { AppProps } from 'next/app';
import 'semantic-ui-css/semantic.min.css';
import '@/styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
