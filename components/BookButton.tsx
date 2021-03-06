import Link from "next/link";
import styles from "../styles/BookButton.module.scss";

export default function BookButton(props: { name?: string; type?: "submit" }) {
	const render = () => {
		if (props.type && props.type === "submit")
			return (
				<button type="submit" className={styles.bookButton__button}>
					{props.name ? props.name : "Book an Appointment"}
				</button>
			);
		return (
			<Link href="https://gazelleapp.io/scheduling/Y9t3bBh9Tzbj6KTpVtWqhXXN">
				<a className={styles.bookButton__link}>
					{props.name ? props.name : "Book an Appointment"}
				</a>
			</Link>
		);
	};
	return <>{render()}</>;
}
