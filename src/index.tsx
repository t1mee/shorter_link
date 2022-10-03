import React from "react";
import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./normalize.module.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const container = document.getElementById("root")!;
const root = createRoot(container);

const client = new ApolloClient({
  uri: "http://test-task.profilancegroup-tech.com/graphql",
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    ,{/* </Provider> */}
  </React.StrictMode>,
);

reportWebVitals();
