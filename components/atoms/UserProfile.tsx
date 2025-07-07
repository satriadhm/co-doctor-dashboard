import Image from "next/image";

interface UserProfileProps {
  name: string;
  role: string;
  avatar?: string;
}

export default function UserProfile({ name, role, avatar }: UserProfileProps) {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
        {avatar ? (
          <Image src={avatar} alt={name} width={40} height={40} className="w-full h-full rounded-full object-cover" />
        ) : (
          <span className="text-gray-600 font-medium">{name.charAt(0)}</span>
        )}
      </div>
      <div>
        <p className="font-medium text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}
