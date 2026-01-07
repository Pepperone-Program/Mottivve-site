import Image from 'next/image';
import team from '@/data/team.json';

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

const TeamSection: React.FC = () => {
  if (!team) {
    return (
      <section className="relative py-12 md:py-24">
        <Image
          className="absolute top-0 right-0"
          src="/images/team-shadow-green.png"
          alt=""
          width={200}
          height={200}
        />
        <div className="relative container px-4 mx-auto">
          <h1 className="font-heading tracking-tight text-4xl sm:text-5xl font-bold mb-4">Meet our team</h1>
          <p className="text-lg text-gray-600 mb-20">Our team has led and delivered large-scale software and design projects in multiple startups.</p>
          <div className="flex items-center justify-center">
            <div className="text-gray-600">Loading team...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-12 md:py-24">
      <Image
        className="absolute top-0 right-0"
        src="/images/team-shadow-green.png"
        alt=""
        width={200}
        height={200}
      />
      <div className="relative container px-4 mx-auto">
        <h1 className="font-heading tracking-tight text-4xl sm:text-5xl font-bold mb-4">Meet our team</h1>
        <p className="text-lg text-gray-600 mb-20">Our team has led and delivered large-scale software and design projects in multiple startups.</p>
        <div className="flex flex-wrap -mx-4 -mb-8">
          {(team as TeamMember[]).map((member, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
              <div className="p-8 bg-white border-2 border-gray-100 rounded-xl">
                <Image
                  className="block h-36 w-36 mb-8 mx-auto"
                  src={member.avatar}
                  alt={member.name}
                  width={144}
                  height={144}
                />
                <div className="text-center">
                  <span className="block text-2xl font-bold mb-2">{member.name}</span>
                  <span className="block text-lg text-gray-700 font-medium">{member.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;