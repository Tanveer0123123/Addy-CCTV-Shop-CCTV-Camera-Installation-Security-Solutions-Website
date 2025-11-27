// export default function Services() {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">Our Services</h1>

//       <div className="grid md:grid-cols-3 gap-6">
//         <div className="p-6 bg-white shadow rounded-lg">CCTV Installation</div>
//         <div className="p-6 bg-white shadow rounded-lg">CCTV Repairing</div>
//         <div className="p-6 bg-white shadow rounded-lg">Remote Monitoring Setup</div>
//         <div className="p-6 bg-white shadow rounded-lg">AMC (Maintenance)</div>
//         <div className="p-6 bg-white shadow rounded-lg">Home Security Setup</div>
//       </div>
//     </div>
//   );
// }

import { FaCamera, FaTools, FaWifi, FaCogs } from "react-icons/fa";

const services = [
  { icon: <FaCamera />, title: "CCTV Installation", desc: "Professional setup with DVR/NVR." },
  { icon: <FaTools />, title: "CCTV Repair", desc: "Fixing issues & replacing parts." },
  { icon: <FaWifi />, title: "Remote Monitoring", desc: "View cameras on mobile anytime." },
  { icon: <FaCogs />, title: "AMC Service", desc: "Yearly maintenance plans." },
];

export default function Services() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
          {services.map((s, i) => (
            <div key={i} className="bg-gray-100 p-6 text-center rounded-xl hover:shadow-xl transition">
              <div className="text-blue-600 text-4xl mx-auto">{s.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="text-gray-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
