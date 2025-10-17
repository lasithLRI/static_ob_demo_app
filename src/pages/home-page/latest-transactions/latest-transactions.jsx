import './latest-transactions.scss'
import TableComponent from "../../../components/table-component/table-component.jsx";


const LatestTransactions = ({transactions}) => {

    const latestTransactionTableColumns = ["ID","Date","Reference","Bank","Account","Amount"];

    return (

        <>
            <TableComponent headers={latestTransactionTableColumns} tableData={transactions}/>
        </>

    );
}

export default LatestTransactions;