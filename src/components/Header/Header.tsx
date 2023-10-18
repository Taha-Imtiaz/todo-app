import { AppBar, Box, Switch, Toolbar, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"
import { ClassNameMap, withStyles } from "@mui/styles";


interface HeaderProps {
    currentTheme: string
    onChange: () => void
    classes: ClassNameMap
}
const styles = {
    root: {
        border: 0,
        borderRadius: 3,
        color: 'white',
        padding: '6px 20px !important',
        fontSize: "16px !important"
    },
}

const Header = ({ currentTheme, onChange }: HeaderProps) => {


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ background: grey[800] }}>
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        admin
                    </Typography>
                    {/* <Button className={classes.root} variant="contained" color={currentTheme === 'dark' ? "secondary" : "primary"} >Logout</Button> */}
                    <Switch checked={currentTheme === 'dark'} color={currentTheme === 'dark' ? "secondary" : "primary"} onChange={onChange} />
                </Toolbar>
            </AppBar>
        </Box>

    )
}

export default withStyles(styles)(Header)
