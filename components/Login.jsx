import { useState } from "react";
import { useRouter } from "next/router"
//MUI
import { Card, Button, CardMedia, TextField } from "@mui/material"
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from "@mui/lab"
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import esLocale from "date-fns/locale/es"
import { format } from "date-fns"

import { getSocio } from "../utils/socios"

import styles from "../styles/Socios.module.css"

const Login = () => {
    const router = useRouter()
    const [datos, setDatos] = useState({
        Carnet: "",
        FechaNacimiento: undefined
    })
    const [socio, setSocio] = useState()
    const [error, setError] = useState("")
    async function loginSocio(e) {
        e.preventDefault()
        let socio = await getSocio(datos.Carnet)
        if(socio.Carnet !== datos.Carnet && 
            socio.FechaNacimiento !== format(datos.FechaNacimiento, "dd/MM/yyyy")
        ) return
        setSocio(socio)
        router.push(`/socios/${socio.Carnet}`)
    }

    return (
        <Card sx={{ maxWidth: 350 }}>
            <form onSubmit={loginSocio} className={styles.loginForm}>
                <CardMedia
                    component="img"
                    title="Club Social Progreso" 
                    image="/escudo_club_social_progreso.png"
                    height="300"
                    alt="Escudo Club Social Progreso"
                />
                <div className={styles.inputs}>
                    <span>{error}</span>
                    <TextField 
                        required 
                        label="Carnet de Identidad" 
                        type="number"
                        onInput={(e)=> {
                            let Carnet = e.target.value.toString()
                            setDatos({...datos, Carnet})
                        }}
                    />
                    <LocalizationProvider 
                        dateAdapter={AdapterDateFns}
                        locale={esLocale}
                    >
                        <DatePicker
                            required
                            disableFuture
                            label="Fecha de Nacimiento"
                            openTo="day"
                            value={datos.fechaNacimiento}
                            views={['day', 'month', 'year']}
                            onChange={(newVal) => {
                                setDatos({...datos, FechaNacimiento: newVal})
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>
                <Button
                    type="submit"
                    variant="contained">
                    Iniciar Sesión
                </Button>
            </form>
        </Card>
    );
}
 
export default Login;