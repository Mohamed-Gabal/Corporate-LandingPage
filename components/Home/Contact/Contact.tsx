import { Contact_Info } from "@/constant/constant";
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-200">
      <div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-center mt-16">
        {/* Contact Form */}
        <form data-aos="fade-right" className="bg-gray-900 rounded-xl p-6 lg:col-span-2">
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            className="border-2 mt-6 border-gray-600 w-full px-6 py-3 rounded-full mb-6 text-white placeholder:text-white outline-none"
          />

          <label htmlFor="email" className="sr-only">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="border-2 border-gray-600 w-full px-6 py-3 rounded-full mb-6 text-white placeholder:text-white outline-none"
          />

          <label htmlFor="subject" className="sr-only">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject"
            className="border-2 border-gray-600 w-full px-6 py-3 rounded-full mb-6 text-white placeholder:text-white outline-none"
          />

          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Comments"
            className="border-2 border-gray-600 w-full px-6 py-3 rounded-3xl mb-6 text-white placeholder:text-white outline-none"
          />

          <button type="submit" className="w-full px-6 py-3 bg-[#b69974] hover:bg-[#a08560] transition duration-300 text-white rounded-full cursor-pointer uppercase">
            Submit
          </button>
        </form>

        {/* Cards */}
        <div data-aos="fade-left" className="lg:col-span-1 space-y-4">
          {Contact_Info.map((item) => (
            <ContactCard key={item.id} label={item.label} value={item.value} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Contact;