import { Box, Button, ClassNameMap, TextField, useTheme } from "@mui/material"
import { withStyles } from "@mui/styles";

interface AddTodoProps {
    onChange: (arg: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmit: (arg: any) => void,
    classes: ClassNameMap

    value: string
}
const styles = {
    root: {
        width: "100%",

    },
    input: {
        width: "85%",



    },
    button: {
        width: "15%",
        height: "55px",
        boxShadow: '0px 1px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        padding: "0 !important",
        borderRadius: "4px !important",
        fontSize: "16px !important",
        borderTopLeftRadius: "0px !important",
        borderBottomLeftRadius: "0px !important",

    },

};

const AddTodo = ({ onChange, value, onSubmit, classes }: AddTodoProps) => {
    const currentMode = useTheme().palette.mode

    return (
        <Box className={classes.root}>
            <form onSubmit={onSubmit}>
                <TextField
                    color={currentMode === "dark" ? "secondary" : "primary"}

                    inputProps={{
                        style: {
                            borderTopRightRadius: "0px !important",
                            borderBottomRightRadius: "0px !important",
                            // boxShadow: currentMode === "dark" ? "0 0 0 100px grey[500] inset": "0 0 0 100px #266798 inset"  

                        }
                    }} className={classes.input} name="todoInput" value={value} onChange={onChange} id="outlined-basic" label="Enter Todo Here" variant="outlined" />
                <Button type="submit" className={classes.button} variant="contained" color={currentMode === "dark" ? "secondary" : "primary"} >Submit</Button>
            </form>


        </Box>
    )
}

export default withStyles(styles)(AddTodo)
