import mirror from "../../../../assets/signup/SkinAnalysis/mirror.png";
import ClearSkin from "../../../../assets/signup/SkinAnalysis/ClearSkin.png";
import Youthful from "../../../../assets/signup/SkinAnalysis/youthful.png";
import Hydration from "../../../../assets/signup/SkinAnalysis/hydration.png";
import Soothing from "../../../../assets/signup/SkinAnalysis/soothing.png";
import Pore from "../../../../assets/signup/SkinAnalysis/pore.png";
import Environmental from "../../../../assets/signup/SkinAnalysis/environmental.png";

const SkinGoalsContent = ({ formData, updateFormData }) => {
  const { skinGoals = [] } = formData;

  const skinGoalsOptions = [
    {
      id: 1,
      title: "Clear and Smooth Skin",
      description:
        "Covers acne, breakouts, scars, pigmentation, and uneven texture.",
      icon: ClearSkin,
    },
    {
      id: 2,
      title: "Youthful Appearance",
      description: "Focuses on fine lines, wrinkles, sagging, and firming.",
      icon: Youthful,
    },
    {
      id: 3,
      title: "Hydration and Radiance",
      description: "Addresses dryness, dullness, and achieving glowing skin.",
      icon: Hydration,
    },
    {
      id: 4,
      title: "Soothing and Protection",
      description:
        "Includes redness, sensitivity, rosacea, and barrier repair.",
      icon: Soothing,
    },
    {
      id: 5,
      title: "Pore and Oil Control",
      description: "Targets excess oil, clogged pores, and enlarged pores.",
      icon: Pore,
    },
    {
      id: 6,
      title: "Environmental Defense",
      description:
        "Protects against sun damage, pollution, and premature aging.",
      icon: Environmental,
    },
  ];

  const toggleGoal = (goalId) => {
    let updatedGoals;
    if (skinGoals.includes(goalId)) {
      updatedGoals = skinGoals.filter((id) => id !== goalId);
    } else {
      updatedGoals = [...skinGoals, goalId];
    }
    updateFormData({ skinGoals: updatedGoals });
  };

  return (
    <>
      <div className="flex items-start mb-4">
        <div className="flex items-center justify-center mr-4">
          <img src={mirror || "/placeholder.svg"} alt="Mirror Icon" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            What's your skin goals?
          </h2>
          <p className="text-gray-600">You can select multiple goals.</p>
        </div>
      </div>

      <div className="space-y-4 mb-10">
        {skinGoalsOptions.map((goal) => (
          <button
            key={goal.id}
            className={`w-full p-4 rounded-xl border flex items-center transition-all duration-200 ${
              skinGoals.includes(goal.id)
                ? "bg-gray-100 border-amber-400 shadow-sm"
                : " border-gray-300 hover:bg-gray-50"
            }`}
            onClick={() => toggleGoal(goal.id)}
          >
            <img
              src={goal.icon || "/placeholder.svg"}
              alt={goal.title}
              className="w-10 h-10 object-contain"
            />
            <div className="ml-3 text-left">
              <h3 className="font-medium text-gray-800">{goal.title}</h3>
              <p className="text-sm text-gray-600">{goal.description}</p>
            </div>
          </button>
        ))}
      </div>
    </>
  );
};

export default SkinGoalsContent;
