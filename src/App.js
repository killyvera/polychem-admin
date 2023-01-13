import { withAuthenticator } from "@aws-amplify/ui-react";
import { Box } from "@mui/material";
import { Amplify } from "aws-amplify";
import { Route, Routes } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { AppContextProvider } from "./contexts/AppContext";

// Pages
import Home from "./pages/Home";
import Users from "./pages/Users";
import Forms from "./pages/Forms";
import FormulaElements from "./pages/FormulaElements";
import Products from "./pages/Products";

import awsExports from "./aws-exports";

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <AppContextProvider>
      <NavBar user={user} signOut={signOut} />
      <Box sx={{ padding: "5rem 1.75rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/products" element={<Products />} />
          <Route path="/formula-elements" element={<FormulaElements />} />
        </Routes>
      </Box>
    </AppContextProvider>
  );
}
export default withAuthenticator(App);
