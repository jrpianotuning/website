import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Page.module.scss";

export default function Page(
	props: React.PropsWithChildren<{
		title: string;
		children?:
			| React.ReactElement<HTMLElementTagNameMap>
			| React.ReactElement<HTMLElementTagNameMap>[];
	}>,
) {
	return (
		<>
			<Head>
				<title>{props.title ? props.title : "JRPianoTuning"}</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
					as={process.env.BACKEND_URL + "/favicon.ico"}
				/>
			</Head>

			<Header />

			<main className={styles.main}>{props.children}</main>

			<Footer />
		</>
	);
}
