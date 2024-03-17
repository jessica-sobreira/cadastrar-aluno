import { RouterProvider } from "react-router-dom";
// import { routes } from "./routes/routes";
import { CssBaseline, ThemeProvider } from "@mui/material";


export const Root = () => {
    return (
        // <ThemeProvider theme={theme}>
            // <CssBaseline />
            <RouterProvider router={routes} />
        // </ThemeProvider>
    );
};