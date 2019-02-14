import * as React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import TodoWrap from "./views/TodoWrap";

// This would live somewhere else if this was real world app

const theme = createMuiTheme();

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <TodoWrap />
            </MuiThemeProvider>
        );
    }
}

export default App;
