export interface HistoryRecord {
  id: string;
  fileName: string;
  dateProcessed: string;
  status: "Waiting for Review" | "Fully Corrected" | "Draft";
  numberOfErrors: number;
  action: "View Details" | "Download";
}

export const historyData: HistoryRecord[] = [
  {
    id: "#12345",
    fileName: "Budi_240520.docx",
    dateProcessed: "20 Mei 2024",
    status: "Waiting for Review",
    numberOfErrors: 3,
    action: "View Details",
  },
  {
    id: "#12345",
    fileName: "Budi_240520.docx",
    dateProcessed: "20 Mei 2024",
    status: "Fully Corrected",
    numberOfErrors: 3,
    action: "Download",
  },
  {
    id: "#12345",
    fileName: "Budi_240520.docx",
    dateProcessed: "20 Mei 2024",
    status: "Draft",
    numberOfErrors: 3,
    action: "View Details",
  },
  {
    id: "#12345",
    fileName: "Budi_240520.docx",
    dateProcessed: "20 Mei 2024",
    status: "Waiting for Review",
    numberOfErrors: 3,
    action: "View Details",
  },
  {
    id: "#12345",
    fileName: "Budi_240520.docx",
    dateProcessed: "20 Mei 2024",
    status: "Waiting for Review",
    numberOfErrors: 3,
    action: "View Details",
  },
  {
    id: "#12345",
    fileName: "Budi_240520.docx",
    dateProcessed: "20 Mei 2024",
    status: "Waiting for Review",
    numberOfErrors: 3,
    action: "View Details",
  },
  {
    id: "#12345",
    fileName: "Budi_240520.docx",
    dateProcessed: "20 Mei 2024",
    status: "Waiting for Review",
    numberOfErrors: 3,
    action: "View Details",
  },
  {
    id: "#12345",
    fileName: "Budi_240520.docx",
    dateProcessed: "20 Mei 2024",
    status: "Waiting for Review",
    numberOfErrors: 3,
    action: "View Details",
  },
  {
    id: "#12345",
    fileName: "Budi_240520.docx",
    dateProcessed: "20 Mei 2024",
    status: "Waiting for Review",
    numberOfErrors: 3,
    action: "View Details",
  },
  {
    id: "#12345",
    fileName: "Budi_240520.docx",
    dateProcessed: "20 Mei 2024",
    status: "Waiting for Review",
    numberOfErrors: 3,
    action: "View Details",
  },
];
