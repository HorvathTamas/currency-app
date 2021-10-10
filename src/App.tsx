import './App.scss';
import Layout from './components/Layout/Layout';
import Routes from './routing/Routes';

const App = () => {
  return (
    <>
      <Layout>
        <Routes />
      </Layout>
    </>
  );
};

export default App;
