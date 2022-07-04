import { CloudDownloadIcon, PrinterIcon } from '@heroicons/react/outline';

const cvUrl = '/TOM_HOWLAND_20220702.pdf';

const CvPage = () => {
  return (
    <div className='bg-slate-700 absolute inset-0 flex justify-center flex-col gap-8 p-8'>
      <div className='flex justify-center items-center gap-4'>
        <a
          href={cvUrl}
          download
          className='justify-center inline-flex whitespace-nowrap text-white hover:underline underline-offset-4'
        >
          &larr;&nbsp;Back to home
        </a>
        <div className='flex-1'></div>
        <button
          onClick={(_) => {
            try {
              (
                document.getElementById('iframe') as HTMLIFrameElement
              ).contentWindow!.print();
            } catch (error) {
              alert('Something went wrong!');
            }
          }}
          className=' pl-4 items-center justify-center inline-flex whitespace-nowrap text-gray-500  bg-gray-200  border-0 py-2 px-6 focus:outline-none hover:bg-gray-300  hover:text-gray-900 rounded text-lg'
        >
          <PrinterIcon className='w-4 h-4 my-1 mr-3 inline text-inherit' />
          Print
        </button>
        <a
          href={cvUrl}
          download
          className=' pl-4 items-center justify-center inline-flex whitespace-nowrap text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'
        >
          <CloudDownloadIcon className='w-4 h-4 my-1 mr-3 inline text-white' />
          Download
        </a>
      </div>
      <iframe
        id='iframe'
        style={{
          flex: 1,
          width: '100%',
        }}
        src={cvUrl}
      ></iframe>
    </div>
  );
};

export default CvPage;
