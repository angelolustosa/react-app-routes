import { MenuBar } from "../components/MenuBar"
import { Table } from "../components/Table";

export const Usuarios = () => {
    console.log('window', window.location.pathname);
  return (
    <div>
        <MenuBar />
        <Table />
    </div>
  )
}
