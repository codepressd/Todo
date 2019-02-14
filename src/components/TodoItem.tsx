import * as React from "react";
import Delete from "@material-ui/icons/Delete";
import Check from "@material-ui/icons/CheckCircleOutline";
import Return from "@material-ui/icons/KeyboardReturn";

import { multiFire } from "../utils";

interface ITodoItem {
    active: string;
    value: string;
    onTodoClick: (action: "ADD" | "DELETE") => (value: string) => void;
    onCompleteClick: (action: "ADD" | "DELETE") => (value: string) => void;
}

export const TodoItem = (props: ITodoItem) => {
    const { active, value, onTodoClick, onCompleteClick } = props;
    return (
        <div className="todo-item">
            <div className="todo-value">{value}</div>
            <div className="todo-action-wrap">
                <div
                    onClick={
                        active === "TODO"
                            ? multiFire(onTodoClick("DELETE"), onCompleteClick("ADD"))(value)
                            : multiFire(onTodoClick("ADD"), onCompleteClick("DELETE"))(value)
                    }
                    className="todo-action"
                    title={active === "TODO" ? "Add To Complete" : "Return To Todos"}
                >
                    {active === "TODO" ? <Check /> : <Return />}
                </div>
                <div
                    onClick={
                        active === "TODO"
                            ? multiFire(onTodoClick("DELETE"))(value)
                            : multiFire(onCompleteClick("DELETE"))(value)
                    }
                    className="todo-action"
                    title="Delete"
                >
                    <Delete />
                </div>
            </div>
        </div>
    );
};
