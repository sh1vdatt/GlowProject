export function SatisfactionSurvey() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 text-center">
      <h2 className="text-4xl md:text-5xl font-marbley text-purple-400 mb-12">
        Are you satisfied with the condition of
        <br />
        your skin?
      </h2>
      <div className="flex justify-center gap-4">
        <button className="px-12 py-3 bg-lime-200 rounded-full text-gray-700 font-medium hover:bg-lime-300 transition-colors">
          Yes
        </button>
        <button className="px-12 py-3 bg-lime-200 rounded-full text-gray-700 font-medium hover:bg-lime-300 transition-colors">
          Not Sure
        </button>
      </div>
    </section>
  );
}
