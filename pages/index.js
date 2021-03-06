import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home({list}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Contatos</title>
        <meta name="description" content="Lista de contatos" />
        <link rel="icon" href="/tel.png" />
        
      </Head>
      <main className={styles.main}>
        <h1>
          Lista de Contatos
        </h1>

        <ul>
          {list.map(item => (
            <li key={item.id}>
              <a href={`/sobre/${item.id}`}>
                <img src='/tel.png' width='45'></img>
                <a>{item.name}</a> 
                <b>Tel: {item.tel}</b>


              </a>
            </li>
          ))}
        </ul>
        

        <rodape>
          <b>Pagina em modo Teste @Corporetion 2021</b>
        </rodape>

      </main>
 
    </div>
  )
}
export async function getServerSideProps() {
  const res = await fetch('https://novo-sandy.vercel.app/api/bancoDados');
  const json = await res.json();

  return {
    props: {
      list: json.list
    }
  }
}
