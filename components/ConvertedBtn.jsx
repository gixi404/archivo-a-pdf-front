import { toast } from "@pheralb/toast";
import { CheckIcon } from "lucide-preact";

export default function ConvertedBtn() {
  return (
    <div
      onClick={() =>
        toast.info({ text: "Selecciona otro archivo para convertir" })
      }
      className="px-4 py-3 sm:px-8 sm:py-4 rounded-xl text-white font-medium text-lg bg-indigo-600/80 outline-0 select-none"
    >
      <div className="flex gap-x-2 justify-center items-center">
        <CheckIcon className="pt-0.5" />
        <span className="text-lg sm:text-xl">Archivo convertido</span>
      </div>
    </div>
  );
}
