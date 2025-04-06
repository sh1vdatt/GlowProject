import { FaHeart, FaRegHeart, FaPlus, FaCheck } from "react-icons/fa";

const History = ({ products, toggleBookmark, toggleInUse }) => {
  return (
    <div className="flex-1 overflow-auto bg-cream-50 px-4 py-2">
      {products.map((product) => (
        <div key={product.id} className=" p-2 rounded-xl">
          <div className="flex">
            <div className="w-20 h-20 mr-4 flex-shrink-0 bg-white">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-md text-gray-600 italic">
                    {product.rename}
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  {/* Heart Button */}
                  <button
                    onClick={() => toggleBookmark(product.id)}
                    className="text-2xl mb-2 items-center"
                  >
                    {product.bookmarked ? (
                      <FaHeart className="text-red-400" />
                    ) : (
                      <FaRegHeart className="text-red-400" />
                    )}
                  </button>

                  {/* In-Use Button - Vertically aligned below heart button */}
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => toggleInUse(product.id)}
                      className={`flex items-center justify-center ${
                        product.inUse ? "bg-green-500" : "bg-gray-200"
                      } rounded-full w-8 h-8 mb-1`}
                    >
                      {product.inUse ? (
                        <FaCheck className="text-white text-lg" />
                      ) : (
                        <FaPlus className="text-gray-500 text-lg" />
                      )}
                    </button>
                    <span className="text-sm text-gray-500">In-Use</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center mt-4">
            <div className="flex items-center">
              <span
                className={`${getRatingColorClass(
                  product.rating
                )} text-white text-md font-semibold px-4 py-2 rounded-full`}
              >
                {product.rating}/10
              </span>
              <span className="ml-4 text-lg font-medium text-green-700">
                {getStatusText(product.rating)}
              </span>
            </div>
          </div>
          <hr className="my-4 border-gray-400" />
        </div>
      ))}

      <div className="mb-10">
        <h2 className="font-bold text-2xl mb-2">Skincare tips for you</h2>
      </div>
    </div>
  );
};

const getRatingColorClass = (rating) => {
  if (rating >= 7) return "bg-green-500";
  if (rating >= 5) return "bg-orange-400";
  return "bg-red-400";
};

const getStatusText = (rating) => {
  if (rating >= 7) return "Suitable for you!";
  if (rating >= 5) return "Use with caution!";
  return "Not suitable for you!";
};

export default History;
