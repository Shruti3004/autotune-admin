import { Admin, Resource } from "react-admin";
import { dataProvider } from "./providers/dataProvider";

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="login/github" />
  </Admin>
);

export default App;
