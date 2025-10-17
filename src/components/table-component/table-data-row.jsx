import {TableCell, TableRow} from "@oxygen-ui/react";

const TableDataRow = ({rowData}) => {
    const cellData = Object.values(rowData);

    return (
        <>
            <TableRow>
                {cellData.map((data, index) => (
                    <TableCell key={index}>{data}</TableCell>
                ))}
            </TableRow>
        </>
    );
}

export default TableDataRow;