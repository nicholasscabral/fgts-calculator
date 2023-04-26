import Calculator from "@/components/calculator";
import Navbar from "@/components/navbar";
import Head from "next/head";
import styles from "../styles/home.module.css";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            soluta, reiciendis numquam necessitatibus nisi reprehenderit ex,
            sequi fugiat molestiae recusandae, saepe ipsa labore molestias
            repudiandae explicabo consectetur qui accusantium quis!
          </p>
        </div>
        <div className={styles.container}>
          <h1 className={styles.title}>
            CALCULE SEU FGTS! CONFIRA O VALOR ESTIMADO
          </h1>
          <Calculator />
          <div className={styles.info}>
            <h1>O que é FGTS?</h1>
            <p>
              FGTS é a sigla para Fundo de Garantia do Tempo de Serviço. É um
              fundo criado pelo Governo Federal do Brasil em 1966 com o objetivo
              de proteger o trabalhador em casos de demissão sem justa causa,
              além de servir como uma forma de poupança forçada para o
              trabalhador. Todo trabalhador com carteira assinada é obrigado a
              ter uma conta de FGTS.
            </p>
          </div>
          <div className={styles.info}>
            <h1>Como ter direito ao FGTS?</h1>
            <p>
              Para ter direito ao FGTS, o trabalhador precisa estar registrado
              em carteira de trabalho, seja em contrato de trabalho por tempo
              determinado ou indeterminado. O empregador é obrigado a depositar
              mensalmente o valor correspondente a 8% do salário bruto do
              trabalhador em uma conta individual em nome do trabalhador na
              Caixa Econômica Federal.
            </p>
          </div>
          <div className={styles.info}>
            <h1>Como funciona o saque do FGTS?</h1>
            <p>
              O saque do FGTS pode ser feito em situações específicas, tais
              como:
            </p>
            <ul>
              <li>
                <b>Demissão sem justa causa:</b> o trabalhador tem direito a
                sacar o valor total do FGTS depositado em sua conta, além de uma
                multa de 40% sobre esse valor, paga pelo empregador.
              </li>
              <li>
                <b>Aposentadoria:</b> o trabalhador pode sacar o valor total do
                FGTS depositado em sua conta.
              </li>
              <li>
                <b>Compra da casa própria:</b> o trabalhador pode usar o valor
                do FGTS para financiar a compra de um imóvel.
              </li>
              <li>
                <b>Doenças graves:</b> o trabalhador ou seu dependente podem
                sacar o FGTS para tratamento de doenças graves, tais como
                câncer, AIDS, dentre outras.
              </li>
              <li>
                <b>Situações de calamidade pública:</b> em casos de desastres
                naturais ou outras situações de calamidade pública, o
                trabalhador pode sacar o FGTS.
              </li>
            </ul>
            <p>
              Para solicitar o saque do FGTS, o trabalhador deve comparecer a
              uma agência da Caixa Econômica Federal com a documentação
              necessária para comprovar a situação que dá direito ao saque. Em
              alguns casos, o saque pode ser feito por meio eletrônico, por meio
              do aplicativo FGTS ou do site da Caixa.
            </p>
          </div>
          <div>{/* <h1>FGTS: o que é?</h1> */}</div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum iste
            perspiciatis vero, unde eligendi debitis deleniti sapiente magni,
            iure veritatis voluptates perferendis quia deserunt necessitatibus
            itaque, quibusdam culpa eaque voluptas.
          </p>
        </div>
      </main>
    </>
  );
}
