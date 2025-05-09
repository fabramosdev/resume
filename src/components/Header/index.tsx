import { ModeToggle } from "../mode-toggle";
import { profile } from "@/resources/profile";
import { Telephone, Envelope } from "@mynaui/icons-react";

export function Header() {
  return (
    <div id="header" className="flex justify-between w-[1024px] pt-10">
      <div className="flex items-center w-full">
        <img
          src={profile.image}
          alt={`Foto de ${profile.name}`}
          className="h-24 w-auto border-indigo-600 border-3 rounded-[50%]"
        />
        <div>
          <p className="font-sans font-medium text-4xl pl-15">{profile.name}</p>
          <p className="font-sans font-medium text-sm pl-15 pt-2">
            {profile.subtile}
          </p>
          <p className="font-sans font-medium text-sm pl-15 pt-2 flex flex-row items-center gap-1">
            <Telephone size={14} />
            <a href={profile.whatsapp} target="_blank">
              {profile.phone}
            </a>
            <span> | </span>
            <Envelope size={14} />
            <a href={profile.mailto}>{profile.mail}</a>
          </p>
        </div>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}
