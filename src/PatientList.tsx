import { AppHeader } from "@commure/components-core";
import { CommureSmartApp } from "@commure/components-data";
import SMARTClient from "@commure/smart-core";
import React from "react";
import "./App.css";
import { smartConfig } from "./config";
import { FhirDataQuery } from "@commure/components-data";

const smartClient = new SMARTClient(smartConfig);


function App() {
  return (
    <CommureSmartApp client={smartClient}>
      <AppHeader appName="My First Commure App" fixedToTop />
      <div className="hello-world-container">
        {/* Adding a data query below here */}
        <FhirDataQuery queryString="Patient">
          {({ data, loading }) => {
            if (loading) {
              return "Loading...";
            }
            console.log(`Loaded patient Bundle: ${JSON.stringify(data, null, 2)}`);
            return "Done loading!";
          }}
        </FhirDataQuery>
      </div>
    </CommureSmartApp>
  );
}

export default App;