import Page from "../components/Page/Page";
import styles from "../styles/Services.module.scss";
import BookButton from "../components/BookButton";
import Hero from "../components/UI/Hero";
import ServiceBox from "../components/Services/ServiceBox";

export default function Services() {
	return (
		<Page title="JRPianoTuning - Our Services">
			<section>
				<Hero image="/img/services_page.jpg" height="30vh" darken>
					<div className={styles.hero_container}>
						<h1 className={styles.hero_title}>Our Services</h1>
					</div>
				</Hero>
			</section>

			{/* <section className={`${styles.section}`}>
				<BookButton />
			</section> */}

			<section>
				<ServiceBox
					image="/img/tuning.jpg"
					title="Tuning"
					price="$150"
					description="Make your piano sound new again!">
					<p>
						Pianos have incredible musical potential - when they are
						in tune! Changes in temperature, moving house, and
						frequent playing cause pianos to fall out of tune. If a
						piano goes too long without a tuning, it may also
						require a pitch adjustment before it will stay in tune.
						Having your piano tuned once or twice a year will extend
						the life of your piano and help your piano sound just
						right!
					</p>
					<BookButton />
				</ServiceBox>
				<ServiceBox
					image="/img/cleaning.jpg"
					title="Cleaning"
					price="$60"
					description="Put the shine back on your piano again.">
					<p>
						Pianos are long-term investments and they can last for
						decades - that&rsquo;s a long time to gather dust! Over
						its lifetime, a piano collects dust, insect remains, and
						perhaps even mice droppings. Regular cleanings will help
						maintain your piano&rsquo;s sanitation levels and
						prevent pests that might damage piano felts and parts,
						so it feels just right to play for years to come.
					</p>
					<BookButton />
				</ServiceBox>
				<ServiceBox
					image="/img/repairs.jpg"
					title="Repairs & Regulation"
					price="$120/hr"
					description="Help your piano feel just right!">
					<p>
						Pianos have incredible musical potential - when they are
						in tune! Changes in temperature, moving house, and
						frequent playing cause pianos to fall out of tune. If a
						piano goes too long without a tuning, it may also
						require a pitch adjustment before it will stay in tune.
						Having your piano tuned once or twice a year will extend
						the life of your piano and help your piano sound just
						right!
					</p>
					<BookButton />
				</ServiceBox>
			</section>
			<section></section>
		</Page>
	);
}
