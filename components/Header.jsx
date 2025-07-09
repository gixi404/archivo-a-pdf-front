export default function Header() {
  return (
    <header className="bg-gray-800 border-b border-gray-700 pl-4 md:pl-6 lg:pl-28">
      <div className="max-w-7xl mx-auto py-5">
        <div className="flex gap-x-4 justify-start items-center w-full">
          <img src="/favicon.ico" width={28} height={28} className="pb-1" />
          <h1 className="text-3xl font-bold text-gray-100 tracking-tight">
            Archivo a PDF
          </h1>
        </div>
        <p className="hidden sm:block mt-2 text-sm text-gray-300/90 pl-1 w-full text-start">
          Formatos soportados:
          png,&nbsp;jpg,&nbsp;jpeg,&nbsp;webp,&nbsp;docx,&nbsp;doc,&nbsp;txt,&nbsp;xlsx,&nbsp;xls,&nbsp;ods,&nbsp;csv,&nbsp;pptx,&nbsp;ppt,&nbsp;odp,&nbsp;odt,&nbsp;rtf.
        </p>
      </div>
    </header>
  );
}
