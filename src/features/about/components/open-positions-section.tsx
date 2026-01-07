import jobsData from '@/data/jobs.json';

interface Position {
  title: string;
  link: string;
}

interface Department {
  department: string;
  positions: Position[];
}

interface JobsData {
  jobsByDepartment: Department[];
  totalOpenPositions: number;
}

const OpenPositionsSection: React.FC = () => {
  if (!jobsData) {
    return (
      <div className="container px-4 mb-28 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div>
            <div className="flex items-center mb-4">
              <h3 className="font-heading mr-2 text-4xl font-bold text-gray-900">Open Positions</h3>
            </div>
            <p className="text-lg text-gray-600 mb-16">We believe that the freedom to work remotely allows for deeper and more meaningful work.</p>
            <div className="flex items-center justify-center">
              <div className="text-gray-600">Loading positions...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const { jobsByDepartment, totalOpenPositions } = jobsData as JobsData;
  return (
    <div className="container px-4 mb-28 mx-auto">
      <div className="max-w-4xl mx-auto">
        <div>
          <div className="flex items-center mb-4">
            <h3 className="font-heading mr-2 text-4xl font-bold text-gray-900">Open Positions</h3>
            <span className="inline-block px-3 py-1 text-gray-700 bg-gray-100 rounded-full">{totalOpenPositions}</span>
          </div>
          <p className="text-lg text-gray-500 mb-16">We believe that the freedom to work remotely allows for deeper and more meaningful work.</p>
          {jobsByDepartment.map((department, deptIndex) => (
            <div key={deptIndex} className={`${deptIndex < jobsByDepartment.length - 1 ? 'mb-16 pb-8 border-b border-gray-100' : 'pb-8 border-b border-gray-100'}`}>
              <h6 className="text-lg font-medium text-gray-500 mb-6">{department.department}</h6>
              {department.positions.map((position, posIndex) => (
                <div key={posIndex} className={`flex flex-col xs:flex-row ${posIndex < department.positions.length - 1 ? 'mb-6' : ''} xs:items-center xs:justify-between`}>
                  <h5 className="text-lg font-medium mb-3 xs:mb-0">{position.title}</h5>
                  <a className="group inline-flex items-center text-base font-bold text-yellowGreen-700 hover:text-yellowGreen-600" href={position.link}>
                    <span className="mr-2">View job</span>
                    <span className="transform group-hover:translate-x-0.5 transition duration-200">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.99984 10.0001H15.4165M15.4165 10.0001L10.4165 5.00012M15.4165 10.0001L10.4165 15.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </span>
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpenPositionsSection;