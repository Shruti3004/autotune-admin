import { Admin, ListGuesser, Resource } from "react-admin";
import { dataProvider } from "../providers/dataProvider";

const Dashboard = () => {
  return <Admin dataProvider={dataProvider}>
  <Resource name="datasets" list={ListGuesser}/>
</Admin>
};

export default Dashboard;
