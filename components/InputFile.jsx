import { UploadIcon, FileTypeIcon } from "lucide-preact";

export default function InputFile({ selectedFile, handleFileChange }) {
  function formatSize(bytes) {
    const kb = bytes / 1024;
    if (kb < 1024) return `${kb.toFixed(1)} KB`;
    const mb = kb / 1024;
    return `${mb.toFixed(2)} MB`;
  }

  function handleDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFileChange({ target: { files: [file] } });
  }

  return (
    <div className="w-full md:w-1/2 mb-8 md:mb-0">
      <h2 className="text-xl font-medium text-gray-200 mb-4 border-l-4 border-violet-400 pl-3 ml-0.5">
        Selecciona el archivo
      </h2>
      <div
        className="flex items-center justify-center w-full"
        onDragOver={e => e.preventDefault()}
        onDrop={handleDrop}
      >
        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-violet-400/80 border-dashed rounded-xl cursor-pointer text-gray-200 hover:bg-gray-700/60 hover:border-gray-500 transition-all duration-300 group bg-gray-800/80">
          <div className="flex flex-col items-center justify-center pt-5 pb-6 px-4 text-center">
            <UploadIcon
              className="w-12 h-12 mb-4 text-violet-400 group-hover:text-violet-300 transition-colors duration-300"
              strokeWidth={1.5}
            />
            <p className="font-semibold text-lg sm:text-xl text-gray-200 group-hover:text-white transition-colors duration-300 text-balance mb-2">
              Haz clic aquí o arrastra el archivo
            </p>
            {selectedFile && (
              <div
                title={selectedFile.name}
                className="mt-4 flex items-center text-[15px] border border-indigo-400 text-indigo-200 font-medium bg-indigo-900/30 px-4 py-2 rounded-xl"
              >
                <FileTypeIcon className="size-5 mr-2" />
                <div className="w-full max-w-[250px] lg:max-w-[350px] flex items-center space-x-1">
                  <span className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    {selectedFile.name}
                  </span>
                  <span className="flex-shrink-0">
                    | {formatSize(selectedFile.size)}
                  </span>
                </div>
              </div>
            )}
          </div>
          <input
            type="file"
            className="hidden"
            accept=".png,.jpg,.jpeg,.webp,.docx,.doc,.txt,.xlsx,.xls,.ods,.csv,.pptx,.ppt,.odp,.odt,.rtf"
            onChange={handleFileChange}
          />
        </label>
      </div>
    </div>
  );
}
