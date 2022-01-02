import Head from "next/head"
import Login from "../../components/Login"
import styles from "../../styles/Socios.module.css"

const Socios = () => {
    return (
        <>
            <Head>
                <title>Socios | Club Social Progreso</title>
                <meta name="description" content="Socios | Club Social Progreso, Riberalta, Bolivia" />
            </Head>
            <section className={styles.socios}>
                <Login />
            </section>
        </>
    );
}
 
export default Socios;