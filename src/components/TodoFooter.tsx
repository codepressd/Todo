import * as React from "react";

interface ITodoToggle {
    className: string;
    active: string;
    onClick: (listType: "TODO" | "COMPLETE") => () => void;
}

export const TodoToggle = (props: ITodoToggle) => {
    const { active, onClick, className } = props;
    return (
        <div className={className}>
            <div
                className={active === "TODO" ? "list-type-active" : "list-type"}
                onClick={onClick("TODO")}
            >
                <p>TODO</p>
            </div>
            <div
                className={active === "COMPLETE" ? "list-type-active" : "list-type"}
                onClick={onClick("COMPLETE")}
            >
                <p>COMPLETE</p>
            </div>
        </div>
    );
};
