import { useState } from "react"
import Link from "next/link"
import { AppBar, Container, Toolbar, Box, Menu, MenuItem, Typography, Button, IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import styles from "../styles/Home.module.css"

const Nav = () => {
    const [anchorElNav, setAnchorElNav] = useState(null)
    function handleOpenNav(e) {
        setAnchorElNav(e.currentTarget)
    }
    function handleCloseNav() {
        setAnchorElNav(null)
    }
    return (
        <AppBar position="sticky" enableColorOnDark>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
                        <IconButton
                            size="large"
                            aria-label="Menu de Navegación"
                            aria-controls="Nav-menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNav}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left"
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNav}
                            sx={{
                                display: {xs: "block", md: "none"}
                            }}
                        >
                            <MenuItem
                                onClick={handleCloseNav}
                            >
                                <Typography textAlign="center">
                                    <Link href="/socios"><a>Socios</a></Link>
                                </Typography>
                            </MenuItem>
                            <MenuItem
                                onClick={handleCloseNav}
                            >
                                <Typography textAlign="center">
                                    <Link href="/eventos"><a>Eventos</a></Link>
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box 
                        sx={{flexGrow: 1, gap: 2, display: {xs: "none", md: "flex"}}}
                    >
                        <Button
                            onClick={handleCloseNav}
                            sx={{my: 2, color: "white", display: "block"}}
                            variant="contained"
                        >
                            <Link href="/socios"><a>Socios</a></Link>
                        </Button>
                        <Button
                            onClick={handleCloseNav}
                            sx={{my: 2, color: "white", display: "block"}}
                            variant="contained"
                        >
                            <Link href="/eventos"><a>Eventos</a></Link>
                        </Button>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 2, display: {xs: "flex"}}}
                    >
                        <Link href="/"><a>Club Social Progreso</a></Link>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
 
export default Nav;