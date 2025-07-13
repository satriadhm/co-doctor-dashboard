import { ErrorDetail } from "../../constants/uploadData";

interface ErrorCorrectionItemProps {
  error: ErrorDetail;
  onToggleExpand: (id: string) => void;
  onApplySuggestion: (id: string) => void;
  onMarkAsNotError: (id: string) => void;
}

export default function ErrorCorrectionItem({
  error,
  onToggleExpand,
  onApplySuggestion,
  onMarkAsNotError,
}: ErrorCorrectionItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <div
        className="p-4 cursor-pointer hover:bg-gray-50"
        onClick={() => onToggleExpand(error.id)}
      >
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-700">
            {error.text.length > 100
              ? `${error.text.substring(0, 100)}...`
              : error.text}
          </p>
          <span className="text-gray-400">{error.isExpanded ? "−" : "+"}</span>
        </div>
      </div>

      {error.isExpanded && (
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <p className="text-sm text-gray-700 mb-4">
            Pasien didiagnosis dengan{" "}
            <span className="bg-red-200 text-red-800 px-1 rounded">
              {error.highlighted}
            </span>{" "}
            setelah pemeriksaan fisik menunjukkan gelombang A yang menonjol pada
            denyut vena jugularis dan impuls apikal ganda. Tidak ada murmur yang
            terdengar. Sá ada.
          </p>

          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                LLM Correction Suggestions:
              </h4>
              <div className="bg-white p-3 rounded border">
                <span className="text-[#6E62E5] font-medium">
                  {error.suggestion}
                </span>
                <div className="flex items-center space-x-2 mt-2">
                  <button className="text-green-600 hover:text-green-700">
                    👍
                  </button>
                  <button className="text-red-600 hover:text-red-700">
                    👎
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Manual Correction
              </h4>
              <div className="bg-white p-3 rounded border">
                <span className="text-gray-700">{error.suggestion}</span>
              </div>
            </div>

            <div className="flex space-x-2">
              <button
                onClick={() => onApplySuggestion(error.id)}
                className="bg-[#6E62E5] text-white px-4 py-2 rounded text-sm hover:bg-[#5A52D5] transition-colors"
              >
                Apply LLM Suggestion
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded text-sm hover:bg-gray-600 transition-colors">
                Save Manual Correction
              </button>
              <button
                onClick={() => onMarkAsNotError(error.id)}
                className="bg-gray-400 text-white px-4 py-2 rounded text-sm hover:bg-gray-500 transition-colors"
              >
                Mark as Not Error
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
