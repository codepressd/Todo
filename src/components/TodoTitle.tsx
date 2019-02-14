import * as React from "react";

interface ITodoTitleArea {
    title: string;
    onSubmit: (action: "ADD" | "DELETE") => (value: string) => void;
    className: string;
}

const handleSubmit = (funcToRun: (action: "ADD" | "DELETE") => (value: string) => void) => (
    e: React.FormEvent<HTMLFormElement>,
) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const value = data.get("input") as string; // This shouldn't need to be type casted??
    value && funcToRun("ADD")(value);
};

export const TodoTitle = (props: ITodoTitleArea) => {
    const { title, className, onSubmit } = props;
    return (
        <div className={className}>
            <p className="title">{title}</p>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <input id="name" placeholder="Add a todo" name="input" />
            </form>
        </div>
    );
};
