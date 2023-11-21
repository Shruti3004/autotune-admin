import { Admin, Resource } from "react-admin";
import { dataProvider } from "../providers/dataProvider";
import { List, Datagrid, TextField } from 'react-admin';

const DatasetList = (props: any) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="user" />
    </Datagrid>
  </List>
);

const Dashboard = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="datasets" list={DatasetList} />
    </Admin>
  );
};

export default Dashboard;
