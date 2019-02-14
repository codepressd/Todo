import * as React from "react";
import { withStyles, WithStyles, Theme } from "@material-ui/core/styles";

import * as Utils from "../utils";
import { styles } from "../styles";
import { TodoTitle, TodoToggle, TodoList } from "../components";

// This would usually be a helper function in a theme file.
const stylesWrap = (theme: Theme) => styles;

interface ITodoWrap {
    storedTodo?: Set<string>;
    storedComplete?: Set<string>;
}

const TodoWrap = withStyles(stylesWrap)((props: ITodoWrap & WithStyles<typeof styles>) => {
    const { classes, storedTodo, storedComplete } = props;
    const [todos, setTodos] = React.useState(storedTodo ? storedTodo : new Set());
    const [complete, setComplete] = React.useState(storedComplete ? storedComplete : new Set());
    const [toggle, setToggle] = React.useState("TODO");

    return (
        <div className={classes.wrap}>
            <div className={classes.todoContainer}>
                <TodoTitle
                    onSubmit={Utils.createMultiClick(setTodos, todos, "TODO")}
                    title="Playing Hooky"
                    className={classes.todoTitleArea}
                />
                <TodoList
                    active={toggle}
                    todos={todos}
                    completes={complete}
                    onTodoClick={Utils.createMultiClick(setTodos, todos, "TODO")}
                    onCompleteClick={Utils.createMultiClick(setComplete, complete, "COMPLETE")}
                    className={classes.todoList}
                />
                <TodoToggle
                    active={toggle}
                    onClick={Utils.createToggle(setToggle)}
                    className={classes.todoToggle}
                />
            </div>
        </div>
    );
});

export default TodoWrap;
