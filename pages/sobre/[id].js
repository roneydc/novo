import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { useContext } from 'react'

export default function SobreItem({list}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Informações do contato                
        </h1>
        <ul>
          <img src='/user.png' width='300'></img>
          
          <c>
          
            <p>Nome: {list.name}</p>
            <p>Telefone: {list.tel}</p>
            <p>Idade: {list.idade}</p>
            <p>Altura: {list.altura}</p>
          </c>
        </ul>
        <rodape>
          <b>Pagina em modo Teste @Corporetion 2021</b>
        </rodape>
        

      </main>


    
    </div>
  )
}
export async function getServerSideProps(context){
    const res= await fetch('http://novo-sandy.vercel.app/api/bancoDados');
    const json = await res.json();
  
    return {
      props:{
        list: json.list[context.params.id]
      }
    }
  }
  
