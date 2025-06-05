import{ Suspense } from "react";
import {
  Wifi,
  Fan,
  PlugZap,
  Coffee,
  ParkingCircle,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <Wifi className="w-6 h-6 text-green-500" />,
    label: "High-Speed Wi-Fi",
  },
  {
    icon: <Fan className="w-6 h-6 text-green-500" />,
    label: "Air Conditioning",
  },
  {
    icon: <PlugZap className="w-6 h-6 text-green-500" />,
    label: "Power Backup",
  },
  {
    icon: <Coffee className="w-6 h-6 text-green-500" />,
    label: "Free Beverages",
  },
  {
    icon: <ParkingCircle className="w-6 h-6 text-green-500" />,
    label: "Parking Facility",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    label: "24/7 Security",
  },
];

const TrainingFeatures = () => {
  return (
    <div className="bg-white py-16 bg-gradient-to-r from-gray-900 to-gray-800 relative">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h3 className="text-2xl font-bold text-teal-400 mb-10">
          Features We Provide
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto px-[20px]">
          {features.map((item, index) => (
            <Suspense key={index} fallback={<div className="h-20 bg-gray-100 animate-pulse rounded-lg"></div>}>
              <div className="flex flex-col items-center space-y-2 bg-white rounded-md py-4">
                {item.icon}
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            </Suspense>
          ))} 
        </div>
      </div>
    </div>
  );
};

export default TrainingFeatures;
