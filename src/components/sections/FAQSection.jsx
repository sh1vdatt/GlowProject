import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export function FAQSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-lime-50 rounded-3xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
        <h2 className="text-3xl md:text-4xl font-marbley text-purple-400 mb-6 md:mb-0 md:w-1/3 leading-snug">
          Frequently
          <br />
          Asked
          <br />
          Questions
        </h2>

        {/* Right Section: FAQ Accordion */}
        <div className="w-full md:w-2/3">
          <Accordion
            type="single"
            collapsible={true}
            className="w-full space-y-4"
          >
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="text-lg font-schibsted hover:no-underline">
                What is Project Glow?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                The idea for Project Glow Skin originated from a personal
                challenge one of our founders faced while traveling. Confronted
                with unfamiliar climates and indecipherable product labels, he
                envisioned a solution that could transcend language barriers and
                uncertainty by deeply understanding an individual's unique skin
                attributes. This vision led to the creation of a platform that
                combines cutting-edge technology with a holistic approach to
                skincare.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b-0">
              <AccordionTrigger className="text-lg font-schibsted hover:no-underline">
                How do you protect and improve my skin?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We use advanced AI technology to analyze your skin condition and
                recommend personalized skincare routines.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b-0">
              <AccordionTrigger className="text-lg font-schibsted hover:no-underline">
                How are you science-backed?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Our platform is built on peer-reviewed research and developed in
                collaboration with dermatologists.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b-0">
              <AccordionTrigger className="text-lg font-schibsted hover:no-underline">
                Is my personal data kept confidential and secure?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, we use industry-standard encryption and security measures
                to protect your personal information.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
