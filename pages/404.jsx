import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 4000)
    })
    return (
        <>
            <Head>
                <title>404 Página no encontrada | Club Social Progreso</title>
                <meta name="description" content="404 Página no encontrada | Club Social Progreso, Riberalta, Bolivia" />
            </Head>
            <div>
                <h1>Ups</h1>
                <h2>Página no encontrada</h2>
            </div>
        </>
    );
}
 
export default NotFound;