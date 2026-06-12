import { FaArrowRight } from "react-icons/fa";
import { ContactInfoItem } from "@/types/navigation";

type Props = Omit<ContactInfoItem, 'id'>;

const ContactCard = ({ label, value }: Props) => {
  return (
    <div className="p-6 bg-blue-800 flex items-center space-x-4">
      <div className="w-15 h-15 rounded-full bg-[#d8ff36] flex items-center justify-center flex-col">
        <FaArrowRight className="text-blue-800" />
      </div>
      <div>
        <p className="text-sm text-white font-semibold">{label}</p>
        <h3 className="text-[20px] font-bold text-white">{value}</h3>
      </div>
    </div>
  );
};
export default ContactCard;