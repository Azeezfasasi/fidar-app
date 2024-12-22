import React from "react";
import jpj from '../../images/jpj.svg';
import png from '../../images/png.svg';
import cut from '../../images/cut.svg';
import compress from '../../images/compress.svg';
import merge from '../../images/merge.svg';
import powerpoint from '../../images/powerpoint.svg';
import { Link } from "react-router-dom";

function Overview() {
    return (
        <>
            <div className="text-gray-500 text-left font-medium text-lg my-5">
                Convert Files
            </div>
            <div className="w-full flex flex-row flex-nowrap gap-4 items-start justify-around h-34 relative overflow-x-scroll overflow-y-hidden md:overflow-hidden pt-[7px] pb-[7px]">
                <Link to="/pages/jpgtopdf" className="flex flex-row items-start justify-start w-[100%] md:w-1/3 min-w-[60%] md:min-w-[33.3%] h-32 shadow-md relative">
                    <div className="w-full bg-white rounded-lg shadow-md absolute inset-0"></div>
                    <div className="w-[100%] md:w-[90%] flex flex-row gap-4 items-center justify-start m-auto relative">
                        <div className="bg-red-200 rounded-full w-16 h-16 shadow-md relative">
                            <img className="w-6 h-7 absolute left-5 top-4" src={jpj} alt="JPG to PDF" />
                        </div>
                        <div className="flex flex-col gap-0 items-start justify-start">
                            <div className="text-gray-900 font-semibold text-lg">JPG TO PDF</div>
                            <div className="text-gray-500 text-sm">
                                Convert a JPG <br /> to PDF
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/pages/pngtopdf" className="flex flex-col items-start justify-start w-[100%] md:w-1/3 min-w-[60%] md:min-w-[33.3%] h-32 shadow-md relative">
                    <div className="bg-white rounded-lg shadow-md absolute inset-0"></div>
                    <div className="w-[100%] md:w-[90%] flex flex-row gap-4 items-center justify-start m-auto relative">
                        <div className="bg-orange-200 rounded-full w-16 h-16 shadow-md relative">
                            <img className="w-6 h-7 absolute left-5 top-4" src={png} alt="PNG to PDF" />
                        </div>
                        <div className="flex flex-col gap-0 items-start justify-start">
                            <div className="text-gray-900 font-semibold text-lg">PNG to PDF</div>
                            <div className="text-gray-500 text-sm">
                                Convert a PNG <br /> to PDF
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/pages/splittopdf" className="flex flex-col items-start justify-start w-[100%] md:w-1/3 min-w-[60%] md:min-w-[33.3%] h-32 shadow-md relative">
                    <div className="bg-white rounded-lg shadow-md absolute inset-0"></div>
                    <div className="w-[100%] md:w-[90%] flex flex-row gap-4 items-center justify-start m-auto relative">
                        <div className="bg-red-200 rounded-full w-16 h-16 shadow-md relative">
                            <img className="w-6 h-7 absolute left-5 top-4" src={cut} alt="Split to PDF" />
                        </div>
                        <div className="flex flex-col gap-0 items-start justify-start">
                            <div className="text-gray-900 font-semibold text-lg">Split to PDF</div>
                            <div className="text-gray-500 text-sm">
                                Split into one or <br /> multiple PDFs
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            {/* Row 2 */}
            <div className="flex flex-row gap-4 items-start justify-around h-34 relative overflow-hidden mt-4 overflow-x-scroll overflow-y-hidden md:overflow-hidden pt-[7px] pb-[7px]">
                <Link to="/pages/powerpointtopdf" className="flex flex-col items-start justify-start w-[100%] md:w-1/3 min-w-[60%] md:min-w-[33.3%] h-32 shadow-md relative">
                    <div className="bg-white rounded-lg shadow-md absolute inset-0"></div>
                    <div className="w-[100%] md:w-[90%] flex flex-row gap-4 items-center justify-start m-auto relative">
                        <div className="bg-purple-200 rounded-full w-16 h-16 shadow-md relative">
                            <img className="w-6 h-7 absolute left-5 top-4" src={powerpoint} alt="PowerPoint to PDF" />
                        </div>
                        <div className="flex flex-col gap-0 items-start justify-start">
                            <div className="text-gray-900 font-semibold text-lg">Power Point...</div>
                            <div className="text-gray-500 text-sm">
                                Convert PowerPoint <br /> to PDF
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/pages/mergepdf" className="flex flex-col items-start justify-start w-[100%] md:w-1/3 min-w-[60%] md:min-w-[33.3%] h-32 shadow-md relative">
                    <div className="bg-white rounded-lg shadow-md absolute inset-0"></div>
                    <div className="w-[100%] md:w-[90%] flex flex-row gap-4 items-center justify-start m-auto relative">
                        <div className="bg-blue-200 rounded-full w-16 h-16 shadow-md relative">
                            <img className="w-6 h-7 absolute left-5 top-4" src={merge} alt="Merge PDF" />
                        </div>
                        <div className="flex flex-col gap-0 items-start justify-start">
                            <div className="text-gray-900 font-semibold text-lg">Merge PDF</div>
                            <div className="text-gray-500 text-sm">
                                Merge files into a <br /> single file
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/pages/compresspdf" className="flex flex-col items-start justify-start w-[100%] md:w-1/3 min-w-[60%] md:min-w-[33.3%] h-32 shadow-md relative">
                    <div className="bg-white rounded-lg shadow-md absolute inset-0"></div>
                    <div className="w-[100%] md:w-[90%] flex flex-row gap-4 items-center justify-start m-auto relative">
                        <div className="bg-teal-200 rounded-full w-16 h-16 shadow-md relative">
                            <img className="w-6 h-7 absolute left-5 top-4" src={compress} alt="Compress PDF" />
                        </div>
                        <div className="flex flex-col gap-0 items-start justify-start">
                            <div className="text-gray-900 font-semibold text-lg">Compress PDF</div>
                            <div className="text-gray-500 text-sm">
                                Compress a JPG <br /> to PDF
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Overview;
