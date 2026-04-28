import { getTeamData } from "@/lib/team";

export default function Team() {
  const data = getTeamData();

  return (
    <div className="bg-white shadow-md p-6 md:p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Our Team</h2>
        <p className="text-gray-500 text-sm mt-1">
          The people who keep everything moving
        </p>
      </div>

      {/* Departments */}
      <div className="space-y-8">
        {data.map((dept) => (
          <div key={dept.department}>
            {/* Department title */}
            <h3 className="text-lg font-semibold mb-4 text-center text-gray-700 capitalize">
              {dept.department}
            </h3>

            {/* People (centered automatically) */}
            <div className="flex flex-wrap justify-center gap-6">
              {dept.people.map((person) => (
                <div key={person.image} className="text-center">
                  {/* Image */}
                  <div className="w-[160px] sm:w-[200px] aspect-4/5 overflow-hidden bg-gray-100 mx-auto border border-gray-300">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <h4 className="mt-2 text-sm font-medium text-gray-900">
                    {person.name}
                  </h4>
                  <p className="text-xs text-gray-500">{person.designation}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
