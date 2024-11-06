"use client";

import { Loader2 } from "lucide-react";

import { useTeam } from "~/hooks/useTeam";

interface TeamProps {
  className?: string;
}

export function Team({ className = "bg-neutral-50" }: TeamProps) {
  const { members, isLoading, error } = useTeam();
  console.log("verifie si member est defini", members);
  console.log("Hook useTeam called");

  if (error) {
    return (
      <section className={`py-16 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="py-12 text-center">
            <h2 className="text-2xl font-bold text-red-600">Error loading team members</h2>
            <p className="text-gray-600 mt-2">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className={`py-16 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-12">
            <Loader2 className="animate-spin size-8 text-blue-600" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold">Notre équipe</h2>

        <div className="grid grid-cols-1 gap-16 self-center text-center sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {members.map((member) => (
            <div
              className="flex flex-col items-center gap-4 rounded-t-full bg-blue-50 p-4 pt-12 transition-transform hover:scale-105"
              key={member.id}
            >
              <div className="from-blue-500 flex size-24 items-center justify-center rounded-full bg-gradient-to-br to-blue-600 text-white">
                <span className="text-2xl font-bold">
                  {member.Nom.split(" ")
                    .map((name) => name[0])
                    .join("")}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-gray-900 text-xl font-bold">{member.Nom}</h3>
                {member.Role && <p className="font-medium text-blue-600">{member.Role}</p>}
              </div>

              {member.Description && <p className="text-gray-600">{member.Description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
