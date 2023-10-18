import { Box, Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableRow, useTheme } from '@mui/material';
import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext/TodoProvider";
import { Todo, TodoList } from "../../contexts/TodoContext/types";
import { ClassNameMap, withStyles } from '@mui/styles';
import { FaEdit } from "react-icons/fa"
import { RiDeleteBin4Fill } from "react-icons/ri"
import { green, grey, red } from '@mui/material/colors';


const styles = {
    alternateRow: {
        backgroundColor: '#f2f2f2', // Set the background color for alternate rows
        height: '65px'
    },
    normalRow: {
        background: "#fff",
        height: "65px"
    },
    minWidth: {
        width: "10px",
        padding: "5px !important"
    },
    iconColumn: {
        width: "60px",
        height: "30px",
        marginRight: "15px",
        padding: "5px!important"
    },
    greenBackground: {
        backgroundColor: green[700],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40px",
        borderRadius: "5px"
    },
    redBackground: {
        backgroundColor: red[700],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40px",
        borderRadius: "5px"

    },
    icon: { color: "#fff", width: "50px", height: "20px" }
}

interface TodoListProps {
    toggleTodo: (index: number) => void
    editTodo: (todo: Todo) => void
    deleteTodo: (index: number) => void
    classes: ClassNameMap

}
const TodoListContainer = ({ toggleTodo, editTodo, deleteTodo, classes }: TodoListProps) => {
    const { todo } = useContext(TodoContext) as TodoList
    const currentMode = useTheme().palette.mode


    return (
        todo.length > 0 ? <TableContainer component={Paper} sx={{ margin: "30px 0px" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">

                <TableBody>
                    {todo.map((row, index) => (
                        <TableRow sx={{ background: currentMode === "dark" ? (index % 2 === 0 ? grey[700] : "rgba(0,0,0,0)") : "" }} className={index % 2 === 0 ? classes.alternateRow : classes.normalRow}
                            key={row.id}
                        >
                            <TableCell component="th" className={classes.minWidth} scope="row">
                                <Checkbox onChange={() => toggleTodo(index)} color={currentMode === "dark" ? "secondary" : "primary"} checked={row.isCompleted} />
                            </TableCell>
                            <TableCell component="th" scope="row" sx={{ flex: 1, fontSize: 16 }}>
                                {row.title}
                            </TableCell>
                            <TableCell onClick={() => editTodo(row)} className={`${classes.iconColumn}`}>
                                <Box className={classes.greenBackground}>
                                    <FaEdit className={classes.icon}></FaEdit>
                                </Box>
                            </TableCell>
                            <TableCell onClick={() => deleteTodo(index)} className={`${classes.iconColumn}`} >
                                <Box className={classes.redBackground}>
                                    <RiDeleteBin4Fill className={classes.icon}></RiDeleteBin4Fill>
                                </Box>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer > : <></>
    )
}

export default withStyles(styles)(TodoListContainer)
