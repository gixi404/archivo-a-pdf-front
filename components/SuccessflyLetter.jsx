import DownloadPDF from "./DownloadPDF";

export default function SuccessflyLetter({ handleConvert }) {
  return (
    <section className="w-full flex justify-center items-center mt-10">
      <div className="w-full max-w-xl bg-gray-800 rounded-xl border border-indigo-500/30 flex flex-col justify-center items-center p-4">
        <h3 className="text-lg font-medium text-gray-200">
          ¡Archivo convertido a PDF!
        </h3>
        <p className="mt-2 text-sm text-gray-400 w-full text-center text-pretty">
          Si la descarga no inició automáticamente,
          <br /> haz clic en este botón
        </p>
        <DownloadPDF handleConvert={handleConvert} />
      </div>
    </section>
  );
}
