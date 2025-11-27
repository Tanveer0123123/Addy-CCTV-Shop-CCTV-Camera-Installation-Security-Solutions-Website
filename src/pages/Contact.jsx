export default function Contact() {
  return (
    <div className="w-full bg-[#f8f8f8] py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>

        {/* Main Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* ---------------- LEFT: FORM ---------------- */}
          <form className="bg-white p-8 shadow-lg rounded-xl space-y-5">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border p-3 rounded-lg"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border p-3 rounded-lg"
              />
            </div>

            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border p-3 rounded-lg"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border p-3 rounded-lg"
              />
            </div>

            <textarea
              placeholder="Comments / Questions"
              className="w-full border p-3 rounded-lg h-32"
            ></textarea>

            <button className="w-full bg-[#0a1a58] text-white py-3 rounded-lg hover:bg-[#07123c]">
              Send Message
            </button>
          </form>

          {/* ---------------- RIGHT: CONTACT INFO ---------------- */}
          <div className="bg-white p-8 shadow-lg rounded-xl">
            <h2 className="text-3xl font-semibold mb-6">Get A Free Quote</h2>

            {/* Phone */}
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-[#0a1a58] text-white p-3 rounded-full">
                📞
              </div>
              <div>
                <p className="font-semibold">Contact Us</p>
                <p className="text-lg">+91 8770146887</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-[#0a1a58] text-white p-3 rounded-full">
                ✉️
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-lg">cctvhomesystem6@gmail.com</p>
              </div>
            </div>

            {/* Office Location */}
            <div className="flex items-start gap-4">
              <div className="bg-[#0a1a58] text-white p-3 rounded-full">
                📍
              </div>
              <div>
                <p className="font-semibold">Our Office Location</p>
                <p className="text-lg">
                  C-Sector, Indrapuri, Bhopal, Madhya Pradesh – 462021
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* GOOGLE MAP WITHOUT API KEY */}
        <div className="mt-10 w-full">
          <a
            href="https://www.google.com/maps?q=C-Sector,+Indrapuri,+Bhopal,+Madhya+Pradesh+462021"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              title="map"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=C-Sector,+Indrapuri,+Bhopal,+Madhya+Pradesh+462021&output=embed"
            ></iframe>
          </a>
        </div>



      </div>
    </div>
  );
}
