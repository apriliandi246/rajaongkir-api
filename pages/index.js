import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Rajaongkir API</title>
				<meta
					name="description"
					content="Rajaongkir API using Next.js API route"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.container}>
				<h1 className={styles.title}>Rajaongkir API using Next.js API route</h1>

				<details className={styles.menu}>
					<summary className={styles.menu__name}>Provinsi</summary>

					<p className={styles.menu__desc}>Mengambil semua provinsi.</p>
					<p className={styles.menu__endpoint}>
						https://rajaongkir-api.vercel.app/api/provinsi
					</p>

					<br />
					<br />
					<br />

					<p className={styles.menu__desc}>
						Mengambil data provinsi berdasarkan ID.
					</p>
					<p className={styles.menu__endpoint}>
						https://rajaongkir-api.vercel.app/api/provinsi?provinsiId=province_id
					</p>
				</details>

				<details className={styles.menu}>
					<summary className={styles.menu__name}>Kota/kabupaten</summary>

					<p className={styles.menu__desc}>Mengambil semua kota/kabupaten.</p>
					<p className={styles.menu__endpoint}>
						https://rajaongkir-api.vercel.app/api/kota
					</p>

					<br />
					<br />
					<br />

					<p className={styles.menu__desc}>
						Mengambil data kota/kabupaten berdasarkan ID provinsi.
					</p>
					<p className={styles.menu__endpoint}>
						https://rajaongkir-api.vercel.app/api/kota?provinsiId=province_id
					</p>

					<br />
					<br />
					<br />

					<p className={styles.menu__desc}>
						Mengambil data kota/kabupaten berdasarkan ID kota/kabupaten.
					</p>
					<p className={styles.menu__endpoint}>
						https://rajaongkir-api.vercel.app/api/kota?kotaId=city_id
					</p>

					<br />
					<br />
					<br />

					<p className={styles.menu__desc}>
						Mengambil data kota/kabupaten berdasarkan ID provinsi dan ID
						kota/kabupaten.
					</p>
					<p className={styles.menu__endpoint}>
						https://rajaongkir-api.vercel.app/api/kota?provinsiId=province_id&kotaId=city_id
					</p>
				</details>

				<details className={styles.menu}>
					<summary className={styles.menu__name}>Cek ongkos kirim</summary>

					<p className={styles.menu__desc}>
						<a
							rel="noopener"
							target="_blank"
							href="https://gist.github.com/apriliandi246/255a47f02dc7e5b2cd5ea8573724d74d"
						>
							Go to the example.
						</a>
					</p>
				</details>
			</div>
		</>
	);
}
