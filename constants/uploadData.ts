export interface AnalysisOption {
  id: string;
  label: string;
  checked: boolean;
}

export interface AnalysisModeOption {
  id: string;
  label: string;
  value: string;
}

export interface ErrorDetail {
  id: string;
  text: string;
  highlighted: string;
  suggestion: string;
  isExpanded: boolean;
}

export const analysisOptions: AnalysisOption[] = [
  { id: "diagnosis", label: "Diagnosis", checked: true },
  { id: "management", label: "Management", checked: true },
  { id: "treatment", label: "Treatment", checked: true },
  { id: "pharmacotherapy", label: "Pharmacotherapy", checked: true },
  { id: "causative", label: "Causative Organism", checked: true },
];

export const analysisModeOptions: AnalysisModeOption[] = [
  { id: "auto", label: "Auto Detection and Correction", value: "auto" },
  { id: "detection", label: "Detection Only", value: "detection" },
];

export const samplePatientText = `Seorang pria berusia 23 tahun datang dengan keluhan kehilangan kesadaran mendadak saat melempar bola bisbol. Tidak ada riwayat cedera. Kesadaran kembali setelah resusitasi kardiopulmoner. Riwayat medis masa lalu negatif untuk masalah neurologis dan kardiovaskular. Pemeriksaan status mental, proses berpikirnya terorganisir dan logis. Afeknya datar. Pasien didiagnosis dengan stenosis aorta setelah pemeriksaan fisik menunjukkan gelombang A yang menonjol pada denyut vena jugularis dan impuls apikal ganda. Tidak ada murmur yang terdengar. Pemeriksaan menunjukkan hematoma sekuran telapak tangan di kaki kirinya. Pemeriksaan perut menunjukkan pembesaran hepar dengan bruit dan edema perifer. Laboratorium menunjukkan leukositosis. Konsentrasi hemoglobinnya 9.5 g/dL, jumlah leukositnya 2.300/mm3, jumlah trombositnya 55.000/mm3 dan konsentrasi fibrinogennya 120 mg/dL. Analisis sitogenetik leukosit menunjukkan translokasi respirokal kromosom 15 dan 17.`;

export const errorDetails: ErrorDetail[] = [
  {
    id: "1",
    text: "Pasien didiagnosis dengan stenosis aorta setelah pemeriksaan fisik menunjukkan gelombang A yang menonjol pada denyut vena jugularis dan impuls apikal ganda. Tidak ada murmur yang terdengar.",
    highlighted: "stenosis aorta",
    suggestion: "kardiomiopati hipertrofik",
    isExpanded: true,
  },
  {
    id: "2",
    text: "Pasien didiagnosis dengan stenosis aorta setelah pemeriksaan fisik menunjukkan gelombang A yang menonjol pada denyut vena jugularis dan impuls apikal ganda. Tidak ada murmur yang terdengar.",
    highlighted: "stenosis aorta",
    suggestion: "kardiomiopati hipertrofik",
    isExpanded: false,
  },
];
