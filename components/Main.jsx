import InputFile from "./InputFile";
import ConvertedBtn from "./ConvertedBtn";
import ConvertBtn from "./ConvertBtn";
import SuccessflyLetter from "./SuccessflyLetter";
import { useState } from "preact/hooks";
import { toast } from "@pheralb/toast";
import Preview from "./Preview";

const API_URL = import.meta.env.VITE_API_URL;

export default function Main() {
  const [preview, setPreview] = useState(null),
    [selectedFile, setSelectedFile] = useState(null),
    [isConverting, setIsConverting] = useState(false),
    [isConverted, setIsConverted] = useState(false);

  function handleFileChange(event) {
    const file = event.target.files[0];
    const validTypes = [
      "image/png",
      "image/jpeg",
      "image/webp",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/msword",
      "text/plain",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel",
      "application/vnd.oasis.opendocument.spreadsheet",
      "text/csv",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "application/vnd.ms-powerpoint",
      "application/vnd.oasis.opendocument.presentation",
      "application/vnd.oasis.opendocument.text",
      "application/rtf",
    ];

    if (file && validTypes.includes(file.type)) {
      setSelectedFile(file);

      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => setPreview(reader.result);
        reader.readAsDataURL(file);
      } else setPreview(null);

      setIsConverted(false);
    } else {
      toast.info({ text: "Formato no soportado" });
      setSelectedFile(null);
      setPreview(null);
      setIsConverting(false);
      setIsConverted(false);
    }
  }

  async function handleConvert() {
    if (!selectedFile) {
      toast.info({ text: "Selecciona un archivo para convertir" });
      return;
    }

    setIsConverting(true);

    const body = new FormData();
    body.append("file", selectedFile);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        body,
        headers: { Accept: "application/pdf" },
      });

      if (!res.ok) {
        toast.error({
          text: "Ocurrió un error en la conversión",
          description: "Por favor, reintentalo.",
        });
        throw new Error("La conversión falló");
      }

      const blob = await res.blob(),
        url = window.URL.createObjectURL(blob),
        a = document.createElement("a"),
        fileName = selectedFile.name.replace(/\.[^/.]+$/, "");

      a.href = url;
      a.download = `${fileName}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
      toast.success({ text: "Archivo convertido a PDF" });
      console.log(`Conversión de '${fileName}' a PDF exitosa`);
      setIsConverted(true);
    } catch (err) {
      toast.error({
        text: "Ocurrió un error en la conversión",
        description: "Por favor, reintentalo.",
      });
      console.error(`catch 'handleConvert' ${err.message}`);
    } finally {
      setIsConverting(false);
    }
  }

  return (
    <main className="flex-grow py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:space-x-8 mb-8">
          <InputFile
            selectedFile={selectedFile}
            handleFileChange={handleFileChange}
          />
          <Preview preview={preview} />
        </div>
        <div className="flex justify-center mt-10">
          {isConverted ? (
            <ConvertedBtn />
          ) : (
            <ConvertBtn
              handleConvert={handleConvert}
              isConverting={isConverting}
              selectedFile={selectedFile}
            />
          )}
        </div>
        {isConverted && <SuccessflyLetter handleConvert={handleConvert} />}
      </div>
    </main>
  );
}
