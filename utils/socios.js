import { db } from "./firebase"
import { doc, getDoc } from "firebase/firestore"

async function getSocio(Carnet) {
    const socioRef = doc(db, "Socios", Carnet)
    const socioSnap = await getDoc(socioRef)
    if(!socioSnap.exists()) return
    let socio = socioSnap.data()
    return socio 
}

export { getSocio }