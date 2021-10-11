import './App.scss';
import Layout from './components/Layout/Layout';
import Routes from './routing/Routes';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback/ErrorFallback';

const App = () => {
  return (
    <>
      <Layout>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes />
        </ErrorBoundary>
      </Layout>
    </>
  );
};

export default App;
