import * as React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import TodoWrap from "./views/TodoWrap";
import * as Utils from "./utils";

const theme = createMuiTheme();

class App extends React.Component {
    render() {
        // I wouldn't normally I wouldn't do this. This functionality would live in a store and be passed down to the app through a provider of some sort.
        const { todos, complete } = Utils.grabStoredValues();
        return (
            <MuiThemeProvider theme={theme}>
                <TodoWrap storedTodo={todos} storedComplete={complete} />
            </MuiThemeProvider>
        );
    }
}

export default App;
