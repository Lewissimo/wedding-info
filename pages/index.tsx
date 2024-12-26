import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Podgląd PDF</title>
        <meta name="description" content="Podgląd pliku PDF" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ width: "100vw", height: "100vh", margin: 0, padding: 0 }}>
        <iframe
          src="/noclegi.pdf"
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      </main>
    </>
  );
}
