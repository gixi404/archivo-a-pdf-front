import { ImageIcon } from "lucide-preact";

export default function Preview({ preview }) {
  return preview ? (
    <div className="w-full md:w-1/2">
      <h2 className="text-xl font-medium text-gray-200 mb-4 border-l-4 border-violet-400 pl-3 ml-0.5">
        Previsualización
      </h2>
      <div className="border border-gray-700 rounded-xl p-4 bg-gray-800 h-64 flex items-center justify-center overflow-hidden shadow-inner">
        <img
          src={preview}
          alt="Preview"
          className="max-h-full max-w-full object-contain rounded-xl"
        />
      </div>
    </div>
  ) : (
    <div className="hidden md:block md:w-1/2">
      <h2 className="text-xl font-medium text-gray-200 mb-4 border-l-4 border-violet-400 pl-3 ml-0.5">
        Previsualización
      </h2>
      <div className="flex-col pt-5 px-4 text-center border border-gray-700 rounded-xl p-4 bg-gray-800 h-64 flex items-center justify-center shadow-inner">
        <ImageIcon
          className="w-12 h-12 mb-4 text-indigo-400/90"
          strokeWidth={1.5}
        />
        <p className="text-gray-400 text-lg italic">
          La previsualización aparecerá aquí
        </p>
        <p className="text-sm text-gray-400">
          (sola las imagenes tienen vista previa)
        </p>
      </div>
    </div>
  );
}
