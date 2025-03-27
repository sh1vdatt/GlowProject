import healthIcon from "../../assets/SkinAnalysisHomepage/health.png";
import productIcon from "../../assets/SkinAnalysisHomepage/product.png";
import ingredientIcon from "../../assets/SkinAnalysisHomepage/ingredient.png";
import environmentIcon from "../../assets/SkinAnalysisHomepage/environment.png";
import hydrationIcon from "../../assets/SkinAnalysisHomepage/hydration.png";

const SkincareAdvice = () => {
  const adviceItems = [
    {
      id: 1,
      title: "Environmental Conditions",
      icon: environmentIcon,
      description:
        "Pollution levels are elevated. Make sure to cleanse thoroughly tonight to remove impurities.",
    },
    {
      id: 2,
      title: "Hydration and Moisture Reminders",
      icon: hydrationIcon,
      description:
        "It's a dry day today! Drink water regularly and consider a hydrating serum to keep your skin moisturized.",
    },
    {
      id: 3,
      title: "Product Usage Suggetions",
      icon: productIcon,
      description:
        "To support your anti-aging goal, apply a retinol-based product tonight. Don't forget to use SPF during the day!",
    },
    {
      id: 4,
      title: "Health and Wellness",
      icon: healthIcon,
      description:
        "Did you get enough rest? Poor sleep affects skin's ability to repair itself, so aim for at least 7-8 hours.",
    },
    {
      id: 5,
      title: "Ingredient Awareness",
      icon: ingredientIcon,
      description:
        "Remember, products with fragrance may irritate sensitive skin. Check labels carefully!",
    },
  ];

  return (
    <div>
      {/* Icons row with title */}
      <div className="bg-stone-100 p-4">
        <h2 className="text-xl font-semibold mb-4">Skincare tips for you</h2>
        <div className="flex justify-between">
          {adviceItems.map((item) => (
            <div
              key={`icon-${item.id}`}
              className="w-16 h-16 rounded-xl border border-gray-300 flex items-center justify-center"
            >
              <img
                src={item.icon || "/placeholder.svg"}
                alt={item.title}
                className="w-10 h-10"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Advice cards */}
      <div className="p-6">
        {adviceItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#f8f8f8] rounded-xl p-4 mb-4 border border-gray-400"
          >
            <div className="flex items-start">
              <div className=" mr-4 flex items-center justify-center">
                <img
                  src={item.icon || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkincareAdvice;
