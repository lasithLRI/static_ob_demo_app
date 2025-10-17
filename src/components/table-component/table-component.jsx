import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@oxygen-ui/react";
import TableDataRow from "./table-data-row.jsx";

const TableComponent = ({headers,tableData}) => {
    return (
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {headers.map((column,index) => (
                                <TableCell key={index}>{column}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((row,index) => (
                            <TableDataRow key={index} rowData={row}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TableComponent;