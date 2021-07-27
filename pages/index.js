import Head from "next/head";
import styles from "../styles/main.module.css";

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

					<pre className={styles.menu__endpoint}>
						<code>https://rajaongkir-api.vercel.app/api/provinsi</code>
					</pre>

					<br />
					<br />

					<p className={styles.menu__desc}>Contoh :</p>

					<p className={styles.menu__desc}>
						<a
							target="_blank"
							href="https://rajaongkir-api.vercel.app/api/provinsi"
						>
							https://rajaongkir-api.vercel.app/api/provinsi
						</a>
					</p>

					<br />
					<br />
					<br />

					<p className={styles.menu__desc}>
						Mengambil data provinsi berdasarkan ID.
					</p>

					<pre className={styles.menu__endpoint}>
						<code>
							https://rajaongkir-api.vercel.app/api/provinsi?provinsiId=province_id
						</code>
					</pre>

					<br />
					<br />

					<p className={styles.menu__desc}>Contoh :</p>

					<p className={styles.menu__desc}>
						<a
							target="_blank"
							href="https://rajaongkir-api.vercel.app/api/provinsi?provinsiId=21"
						>
							https://rajaongkir-api.vercel.app/api/provinsi?provinsiId=21
						</a>
					</p>
				</details>

				<br />

				<details className={styles.menu}>
					<summary className={styles.menu__name}>Kota/kabupaten</summary>

					<p className={styles.menu__desc}>Mengambil semua kota/kabupaten.</p>

					<pre className={styles.menu__endpoint}>
						<code>https://rajaongkir-api.vercel.app/api/kota</code>
					</pre>

					<br />
					<br />

					<p className={styles.menu__desc}>Contoh :</p>

					<p className={styles.menu__desc}>
						<a
							target="_blank"
							href="https://rajaongkir-api.vercel.app/api/provinsi?provinsiId=21"
						>
							https://rajaongkir-api.vercel.app/api/kota
						</a>
					</p>

					<br />
					<br />
					<br />

					<p className={styles.menu__desc}>
						Mengambil data kota/kabupaten berdasarkan ID provinsi.
					</p>

					<pre className={styles.menu__endpoint}>
						<code>
							https://rajaongkir-api.vercel.app/api/kota?provinsiId=province_id
						</code>
					</pre>

					<br />
					<br />

					<p className={styles.menu__desc}>Contoh :</p>

					<p className={styles.menu__desc}>
						<a
							target="_blank"
							href="https://rajaongkir-api.vercel.app/api/provinsi?provinsiId=21"
						>
							https://rajaongkir-api.vercel.app/api/provinsi?provinsiId=21
						</a>
					</p>

					<br />
					<br />
					<br />

					<p className={styles.menu__desc}>
						Mengambil data kota/kabupaten berdasarkan ID kota/kabupaten.
					</p>

					<pre className={styles.menu__endpoint}>
						<code>
							https://rajaongkir-api.vercel.app/api/kota?kotaId=city_id
						</code>
					</pre>

					<br />
					<br />

					<p className={styles.menu__desc}>Contoh :</p>

					<p className={styles.menu__desc}>
						<a
							target="_blank"
							href="https://rajaongkir-api.vercel.app/api/kota?kotaId=1"
						>
							https://rajaongkir-api.vercel.app/api/kota?kotaId=1
						</a>
					</p>

					<br />
					<br />
					<br />

					<p className={styles.menu__desc}>
						Mengambil data kota/kabupaten berdasarkan ID provinsi dan ID
						kota/kabupaten.
					</p>

					<pre className={styles.menu__endpoint}>
						<code>
							https://rajaongkir-api.vercel.app/api/kota?provinsiId=province_id&kotaId=city_id
						</code>
					</pre>

					<br />
					<br />

					<p className={styles.menu__desc}>Contoh :</p>

					<p className={styles.menu__desc}>
						<a
							target="_blank"
							href="https://rajaongkir-api.vercel.app/api/kota?provinsiId=21&kotaId=1"
						>
							https://rajaongkir-api.vercel.app/api/kota?provinsiId=21&kotaId=1
						</a>
					</p>
				</details>

				<br />

				<details className={styles.menu}>
					<summary className={styles.menu__name}>Cek ongkos kirim</summary>

					<p className={styles.menu__desc}>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://gist.github.com/apriliandi246/255a47f02dc7e5b2cd5ea8573724d74d"
						>
							Go to the example.
						</a>
					</p>
				</details>

				<br />
			</div>
		</>
	);
}
