import React from "react";
import Layout from "./components/Layout";
import Main from "./components/components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from 'react-redux';

import { store } from './store';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Main />
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
