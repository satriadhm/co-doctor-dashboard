import TableCell from "../atoms/TableCell";
import StatusBadge from "../atoms/StatusBadge";
import ActionButton from "../atoms/ActionButton";
import { HistoryRecord } from "../../constants/historyData";

interface HistoryTableRowProps {
  record: HistoryRecord;
  onActionClick: (record: HistoryRecord) => void;
}

export default function HistoryTableRow({
  record,
  onActionClick,
}: HistoryTableRowProps) {
  return (
    <tr className="hover:bg-gray-50">
      <TableCell>{record.id}</TableCell>
      <TableCell>{record.fileName}</TableCell>
      <TableCell>{record.dateProcessed}</TableCell>
      <TableCell>
        <StatusBadge status={record.status} />
      </TableCell>
      <TableCell>{record.numberOfErrors}</TableCell>
      <TableCell>
        <ActionButton
          action={record.action}
          onClick={() => onActionClick(record)}
        />
      </TableCell>
    </tr>
  );
}
