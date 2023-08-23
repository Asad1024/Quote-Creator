import React from "react";
import "@styles/global.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Head from "next/head";

export const metadata = {
  title: "QuoteFeast",
  description: "Quotes to Inspire, Motivate, and Delight",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default layout;
