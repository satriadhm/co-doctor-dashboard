import TableHeader from "../atoms/TableHeader";

export default function HistoryTableHeader() {
  return (
    <thead className="bg-white">
      <tr>
        <TableHeader>ID Record</TableHeader>
        <TableHeader>File Name</TableHeader>
        <TableHeader>Date Processed</TableHeader>
        <TableHeader>Status</TableHeader>
        <TableHeader>Number of Errors</TableHeader>
        <TableHeader>Action</TableHeader>
      </tr>
    </thead>
  );
}
