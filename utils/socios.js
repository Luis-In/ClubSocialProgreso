import { db } from "./firebase"
import { doc, getDoc } from "firebase/firestore"
import { collection, getDocs } from "firebase/firestore"

async function getSocio(Carnet) {
    const socioRef = doc(db, "Socios", Carnet)
    const socioSnap = await getDoc(socioRef)
    if(!socioSnap.exists()) return
    let socio = socioSnap.data()
    return socio 
}
async function getSocios() {
    let socios = []
    const querySnap = await getDocs(collection(db, "Socios"))
    querySnap.forEach((socio) => {
        socios.push(doc.data())
    })
    return socios
}

export { getSocio, getSocios }