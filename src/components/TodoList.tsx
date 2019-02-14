import * as React from "react";

import { TodoItem } from "./TodoItem";

interface ITodoList {
    active: string;
    todos: Set<string>;
    completes: Set<string>;
    onTodoClick: (action: "ADD" | "DELETE") => (value: string) => void;
    onCompleteClick: (action: "ADD" | "DELETE") => (value: string) => void;
    className: string;
}

export const TodoList = (props: ITodoList) => {
    const { className, active, todos, completes, onCompleteClick, onTodoClick } = props;
    const displayTodos = Array.from(todos);
    const displayComplete = Array.from(completes);
    return (
        <div className={className}>
            <div className="inner-wrap">
                {active === "TODO" &&
                    displayTodos.length > 0 &&
                    displayTodos.map(todo => (
                        <TodoItem
                            key={todo} // I wouldn't do this in production but I know they will be unique due to the set
                            active={active}
                            value={todo}
                            onCompleteClick={onCompleteClick}
                            onTodoClick={onTodoClick}
                        />
                    ))}
                {active === "COMPLETE" &&
                    displayComplete.length > 0 &&
                    displayComplete.map(complete => (
                        <TodoItem
                            key={complete} // I wouldn't do this in production but I know they will be unique due to the set
                            active={active}
                            value={complete}
                            onCompleteClick={onCompleteClick}
                            onTodoClick={onTodoClick}
                        />
                    ))}
                {active === "TODO" && displayTodos.length === 0 && (
                    <div className="no-items">You don't have any Todos. Try adding some above.</div>
                )}
                {active === "COMPLETE" && displayComplete.length === 0 && (
                    <div className="no-items">You don't have any todos complete.</div>
                )}
            </div>
        </div>
    );
};
