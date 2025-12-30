import stats from '@/data/stats.json';

interface Stat {
  value: string;
  description: string;
}

const StatsSection: React.FC = () => {
  if (!stats) {
    return (
      <section className="py-12 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-20">
            <h3 className="font-heading tracking-tight text-4xl md:text-5xl font-bold">Let the numbers do the talking</h3>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-gray-500">Loading stats...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-20">
          <h3 className="font-heading tracking-tight text-4xl md:text-5xl font-bold">Let the numbers do the talking</h3>
        </div>
        <div className="flex flex-wrap -mx-4">
          {(stats as Stat[]).map((stat, index) => (
            <div key={index} className="w-full xs:w-1/2 md:w-1/3 px-4 mb-10">
              <div className="max-w-xs mx-auto text-center">
                <span className="block mb-4 text-4xl font-bold">{stat.value}</span>
                <span className="text-lg text-gray-500">{stat.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;