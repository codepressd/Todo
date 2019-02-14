import * as React from "react";
import { withStyles, WithStyles, Theme } from "@material-ui/core/styles";
import { TodoTitle, TodoToggle, TodoList } from "../components";

/**
 *  Alert - I wouldn't normally style like this. This would be spread out to be component specific.
 *
 *  I just didn't want to be doig a ton of withStyles wrappiing and adding more boilerplate. I'm passing
 *  down these styles for the sake of speed...
 */
const styles = {
    wrap: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "#4c3d73",
    },
    todoContainer: {
        display: "flex",
        flexDirection: "column" as React.CSSProperties["flexDirection"],
        height: "90%",
        width: "50%",
        borderRadius: 4,
        background: "#fff",
    },
    todoTitleArea: {
        display: "flex",
        alignItems: "center",
        fontSize: "20px",
        borderBottom: "2px solid #f2f2f2",
        width: "100%",
        height: "10%",
        "& .title": {
            marginLeft: "20px",
            width: "50%",
        },
        "& .form": {
            marginRight: "20px",
            width: "50%",
            "& input": {
                width: "90%",
                padding: "5px",
                outline: "none",
            },
        },
    },
    todoList: {
        display: "flex",
        flexDirection: "column" as React.CSSProperties["flexDirection"],
        width: "100%",
        height: "80%",
        overflow: "scroll",
        "& .no-items": {
            marginTop: "30px",
            textAlign: "center" as React.CSSProperties["textAlign"],
        },
        "& .todo-item": {
            display: "flex",
            flexDirection: "row" as React.CSSProperties["flexDirection"],
            alignItems: "center",
            justifyContent: "space-between",
            height: "40px",
            border: "2px solid #f2f2f2",
            margin: "5px",
            "& .todo-value": {
                marginLeft: "10px",
                width: "100%",
            },
            "& .todo-action-wrap": {
                display: "flex",
                flexDirection: "row" as React.CSSProperties["flexDirection"],
                alignItems: "center",
                marginRight: "10px",
                "& .todo-action": {
                    cursor: "pointer",
                },
            },
        },
    },
    todoToggle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "10%",
        "& .list-type": {
            display: "flex",
            justifyContent: "center",
            borderTop: "2px solid #f2f2f2",
            height: "100%",
            width: "50%",
            cursor: "pointer",
        },
        "& .list-type-active": {
            display: "flex",
            justifyContent: "center",
            borderTop: "2px solid #4c3d73",
            color: "#4c3d73",
            height: "100%",
            width: "50%",
            cursor: "pointer",
        },
    },
};

// This would usually be a helper function in a utils file.
const stylesWrap = (theme: Theme) => styles;

const createToggle = (setState: React.Dispatch<React.SetStateAction<string>>) => (
    listType: "TODO" | "COMPLETE",
) => () => {
    setState(listType);
};

type multiClick = (
    setState: React.Dispatch<React.SetStateAction<any>>,
    data: Set<string>,
) => (action: "ADD" | "DELETE") => (value: string) => void;

const createMultiClick = (
    setState: React.Dispatch<React.SetStateAction<any>>,
    data: Set<string>,
) => (action: "ADD" | "DELETE") => (value: string) => {
    const newData = new Set(data);
    action === "ADD" ? newData.add(value) : newData.delete(value);
    setState(newData);
};

const TodoWrap = withStyles(stylesWrap)((props: WithStyles<typeof styles>) => {
    const { classes } = props;
    const [todos, setTodos] = React.useState(new Set());
    const [complete, setComplete] = React.useState(new Set());
    const [toggle, setToggle] = React.useState("TODO");
    return (
        <div className={classes.wrap}>
            <div className={classes.todoContainer}>
                <TodoTitle
                    onSubmit={createMultiClick(setTodos, todos)}
                    title="Playing Hooky"
                    className={classes.todoTitleArea}
                />
                <TodoList
                    active={toggle}
                    todos={todos}
                    completes={complete}
                    onTodoClick={createMultiClick(setTodos, todos)}
                    onCompleteClick={createMultiClick(setComplete, complete)}
                    className={classes.todoList}
                />
                <TodoToggle
                    active={toggle}
                    onClick={createToggle(setToggle)}
                    className={classes.todoToggle}
                />
            </div>
        </div>
    );
});

export default TodoWrap;
