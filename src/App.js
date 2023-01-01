import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Box } from "@mui/material";
import { Amplify } from "aws-amplify";
import { Route, Routes } from "react-router-dom";
import awsExports from "./aws-exports";
import { NavBar } from "./components/NavBar";
import FormState from "./contexts/form/formState";
import { ProductsContextProvider } from "./contexts/ProductContext";
import { UsersContextProvider } from "./contexts/UsersContext";
import { FormsList } from "./pages/FormsList";
import { Home } from "./pages/Home";
import UserPage from "./pages/UserPage";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import FormulaElement from "./pages/FormulaElement";
import Products from "./pages/Products";

Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <UsersContextProvider>
      <FormState>
        <ProductsContextProvider>
          <Box>
            <NavBar user={user} signOut={signOut} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/users"
                element={<UserPage user={user} signOut={signOut} />}
              />
              <Route path="/forms" element={<FormsList />} />
              <Route path="/products" element={<Products />} />
              <Route path="/formula-elements" element={<FormulaElement />} />
            </Routes>
          </Box>
        </ProductsContextProvider>
      </FormState>
    </UsersContextProvider>
  );
}
export default withAuthenticator(App);
