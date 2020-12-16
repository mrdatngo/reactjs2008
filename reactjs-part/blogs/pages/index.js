import React from "react";
import Layout from "./layouts/Layout";
import Head from "next/head";

export default function index() {
    return (
        <Layout>
            <Head>
                <title>Home Page</title>
            </Head>
            Home Page
        </Layout>
    );
}
