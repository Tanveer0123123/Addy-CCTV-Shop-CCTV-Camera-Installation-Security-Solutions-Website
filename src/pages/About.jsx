import aboutImg from "../assets/img1.jpg"; // <-- apni image ka naam yahan rakho

export default function About() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="  max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div>
          <img
            src={aboutImg}
            alt="About Addy CCTV"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            About Us
          </p>

          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            High Quality CCTV Solutions for Home & Office
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Addy CCTV Shop provides high-quality surveillance systems designed to deliver long-term protection and peace of mind. We bring more than 6 years of strong industry experience in CCTV installation, system configuration, camera maintenance, and annual maintenance contracts (AMC). Over the years, we have helped hundreds of homes, shops, schools, offices, and businesses create a safer environment with reliable security technology.
            <br /><br />
            Our team focuses on delivering trusted solutions with careful planning, proper site inspection, and the right selection of cameras based on customer needs. Whether it is indoor monitoring, outdoor coverage, night vision support, or smart motion detection features — we ensure you get the perfect setup for complete protection.
          </p>

          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}
