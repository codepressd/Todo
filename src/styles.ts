export /**
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
