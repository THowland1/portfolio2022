import { CloudDownloadIcon, PrinterIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from "react";

const cvUrl = "/TOM_HOWLAND_20230522.pdf";

const CvPage = () => {
  const [todayDatestamp] = useState(() => {
    const now = new Date();
    return now.toISOString().substring(0, 10).replace(/-/g, "");
  });
  return (
    <div className="bg-slate-700 absolute inset-0 flex justify-center flex-col gap-6 p-8">
      <div className="flex  gap-4 flex-col sm:flex-row">
        <Link passHref href="/">
          <span className="justify-start items-center flex-1 inline-flex whitespace-nowrap text-white hover:underline underline-offset-4">
            &larr;&nbsp;Back to home
          </span>
        </Link>
        <div className="flex gap-4">
          <button
            onClick={(_) => {
              try {
                (
                  document.getElementById("iframe") as HTMLIFrameElement
                ).contentWindow!.print();
              } catch (error) {
                alert("Something went wrong!");
              }
            }}
            className="flex-1 pl-4 items-center justify-center inline-flex whitespace-nowrap text-gray-500  bg-gray-200  border-0 py-2 px-6 focus:outline-none hover:bg-gray-300  hover:text-gray-900 rounded text-lg"
          >
            <PrinterIcon className="w-4 h-4 my-1 mr-3 inline text-inherit" />
            Print
          </button>

          <a
            href={cvUrl}
            download={`TOM_HOWLAND_${todayDatestamp}.pdf`}
            className="flex-1  pl-4 items-center justify-center inline-flex whitespace-nowrap text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
          >
            <CloudDownloadIcon className="w-4 h-4 my-1 mr-3 inline text-white" />
            Download
          </a>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          position: "relative",
          flex: 1,
          width: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            boxShadow: "inset 0 0 16px #0006",
            pointerEvents: "none",
          }}
        ></div>
        <iframe
          id="iframe"
          style={{
            flex: 1,
            width: "100%",
          }}
          src={cvUrl}
        ></iframe>
      </div>
    </div>
  );
};

export default CvPage;
