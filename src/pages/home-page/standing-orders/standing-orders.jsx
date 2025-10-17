import TableComponent from "../../../components/table-component/table-component.jsx";


const StandingOrders = ({standingOrdersData})=>{

    const standingOrdersTableColumns = ["ID","Reference","Bank","Next Date","Status","Amount"];

    return (
        <>
        <TableComponent headers={standingOrdersTableColumns} tableData={standingOrdersData}/>
        </>
    );
}

export default StandingOrders;