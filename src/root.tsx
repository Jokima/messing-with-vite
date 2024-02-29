import { Suspense } from "react";
import { Environment } from "./common/enums/Environment.enum";
import App from "./app/App";
import { Query } from "./app/query";

const environment = process.env.ENVIRONMENT;
const showDevTools = environment === Environment.DEV;

export const Root = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Query enabledQueryDevTools={showDevTools}>
      <App />
    </Query>
  </Suspense>
)