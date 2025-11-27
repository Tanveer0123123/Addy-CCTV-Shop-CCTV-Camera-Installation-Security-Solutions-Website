import img6 from "../assets/sumiah.jpg";
import img7 from "../assets/softnice-logo.jpg";
import img12 from "../assets/skymark-logo.png";
import img8 from "../assets/Sakshi.jpg";
import img9 from "../assets/images.jpg";
import img10 from "../assets/sumiah.jpg";
import img11 from "../assets/img11.jpg";


export default function OurClients() {
  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-10">Our Clients</h2>

        {/* Slider Container */}
        <div className="overflow-hidden relative">
          
          {/* Slider Track */}
          <div className="flex gap-16 animate-scroll whitespace-nowrap">

            {/* Dummy Logos */}
            <img src={img6} className="h-20 opacity-80 hover:opacity-100 transition" />
            <img src={img7} className="h-20 opacity-80 hover:opacity-100 transition" />
            <img src={img8} className="h-20 opacity-80 hover:opacity-100 transition" />
            <img src={img9} className="h-20 opacity-80 hover:opacity-100 transition" />
            <img src={img10} className="h-20 opacity-80 hover:opacity-100 transition" />
            <img src={img11} className="h-20 opacity-80 hover:opacity-100 transition" />
            <img src={img12} className="h-20 opacity-80 hover:opacity-100 transition" />

            {/* Duplicate for infinite loop */}
            <img src={img6} className="h-20 opacity-80 hover:opacity-100 transition" />
            <img src={img7} className="h-20 opacity-80 hover:opacity-100 transition" />
            <img src={img8} className="h-20 opacity-80 hover:opacity-100 transition" />
            <img src={img9} className="h-20 opacity-80 hover:opacity-100 transition" />
            <img src={img10} className="h-20 opacity-80 hover:opacity-100 transition" />
            <img src={img11} className="h-20 opacity-80 hover:opacity-100 transition" />
            <img src={img12} className="h-20 opacity-80 hover:opacity-100 transition" />
          </div>
        </div>
      </div>
    </div>
  );
}
