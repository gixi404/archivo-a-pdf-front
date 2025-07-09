import { DownloadIcon } from "lucide-preact";

export default function DownloadPDF({ handleConvert }) {
  return (
    <button
      onClick={handleConvert}
      type="button"
      className="mt-4 inline-flex items-center px-6 py-2.5 cursor-pointer text-sm font-medium rounded-xl text-white bg-indigo-700 hover:bg-indigo-600 focus:outline-none transition-all duration-300"
    >
      <DownloadIcon className="w-4 h-4 mr-2" />
      Descargar PDF
    </button>
  );
}
