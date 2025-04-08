import { IoIosArrowBack } from "react-icons/io";
import { RiFolderUploadLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const HealthReportsUpload = () => {
  const reportTypes = [
    { id: 1, name: "Complete Blood Count Report" },
    { id: 2, name: "DNA Report" },
  ];

  const handleUploadClick = (reportId) => {
    console.log(`Upload clicked for report ID: ${reportId}`);
    // To implement the file upload functionality
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md bg-stone-100 flex flex-col min-h-screen mx-auto relative">
        <div className="flex items-center p-4 relative">
          <Link to="/comprehensive-level" className="absolute left-4">
            <IoIosArrowBack size={24} className="text-gray-800" />
          </Link>
          <h1 className="text-lg font-medium w-full text-center">
            Upload health reports
          </h1>
        </div>

        {/* Main content */}
        <div className="px-5 py-4">
          <h2 className="text-xl font-medium text-center mb-2">
            Unlock a deeper understanding of your skin health
          </h2>

          <p className="text-gray-700 text-center mb-6">
            Lorem ipsum dolor sit amet consectetur. Dictum neque viverra non
            eleifend massa egestas risus morbi vestibulum. Nunc ut nibh
            fermentum diam molestie ornare risus tortor parturient.
          </p>

          <div className="border-t border-gray-200 my-4"></div>

          {/* Report upload items */}
          {reportTypes.map((report) => (
            <div
              key={report.id}
              className="flex items-center justify-between py-4 border-b border-gray-200"
            >
              <span className="font-normal text-gray-800">{report.name}</span>
              <button
                onClick={() => handleUploadClick(report.id)}
                className="text-gray-500"
              >
                <RiFolderUploadLine size={22} />
              </button>
            </div>
          ))}
        </div>

        <div className="flex-grow"></div>
      </div>
    </div>
  );
};

export default HealthReportsUpload;
