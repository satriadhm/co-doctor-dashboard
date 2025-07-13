import HistoryTableHeader from "../molecules/HistoryTableHeader";
import HistoryTableRow from "../molecules/HistoryTableRow";
import { HistoryRecord } from "../../constants/historyData";

interface HistoryTableProps {
  records: HistoryRecord[];
  onActionClick: (record: HistoryRecord) => void;
}

export default function HistoryTable({
  records,
  onActionClick,
}: HistoryTableProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <table className="min-w-full">
        <HistoryTableHeader />
        <tbody>
          {records.map((record, index) => (
            <HistoryTableRow
              key={`${record.id}-${index}`}
              record={record}
              onActionClick={onActionClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
