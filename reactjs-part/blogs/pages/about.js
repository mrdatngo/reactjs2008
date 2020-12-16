import React from "react";
import Layout from "./layouts/Layout";
import api from "../apis/api";

export default function about({ user }) {
    return (
        <Layout>
            <h3>About</h3>
            <p>Email: {user.email}</p>
            <p>Address: {user.address}</p>
        </Layout>
    );
}

export async function getStaticProps() {
    // get data from api
    const user = await api.getAboutData();
    return {
        props: {
            user,
        },
    };
}
