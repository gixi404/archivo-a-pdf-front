import { ChevronRightIcon, LoaderIcon } from "lucide-preact";

export default function ConvertBtn({
  handleConvert,
  isConverting,
  selectedFile,
}) {
  return (
    <button
      type="button"
      onClick={handleConvert}
      disabled={isConverting}
      className={`px-4 py-3 sm:px-6 sm:py-4 outline-0 rounded-xl text-white font-medium text-lg transition-all duration-300 transform ${
        !selectedFile || isConverting
          ? "bg-indigo-500/50 cursor-default opacity-80"
          : "bg-indigo-600 outline-2 outline-indigo-500 cursor-pointer hover:bg-indigo-500 focus:outline-0 focus:ring-indigo-500 tracking-wider"
      }`}
    >
      {isConverting ? (
        <span className="flex items-center text-lg sm:text-xl">
          <LoaderIcon className="animate-spin mr-3 h-5 w-5 text-white" />
          Convirtiendo...
        </span>
      ) : (
        <div className="flex gap-x-2 justify-center items-center">
          <ChevronRightIcon className="pt-0.5" width={25} height={25} />
          <span className="text-lg sm:text-xl">Convertir a PDF</span>
        </div>
      )}
    </button>
  );
}
