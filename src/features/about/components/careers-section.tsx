import Image from 'next/image';

const CareersSection: React.FC = () => {
  return (
    <>
      <div className="container px-4 mb-28 mx-auto">
        <div className="text-center">
          <span className="inline-flex items-center h-7 mb-4 px-2 text-sm font-medium text-yellowGreen-700 bg-yellowGreen-200 rounded-full">CAREERS</span>
          <h1 className="font-heading tracking-tight text-4xl sm:text-5xl font-bold mb-4">Join our global team</h1>
          <p className="text-lg text-gray-500 mb-10">We are on a mission to make organizing assets a delightful experience.</p>
          <a className="group relative flex items-center justify-center px-5 h-12 xs:inline-flex text-base font-semibold text-white bg-gradient-to-br from-cyanGreen-800 to-cyan-800 rounded-lg transition-all duration-300" href="#">
            <div className="absolute top-0 left-0 w-full h-full rounded-lg ring ring-green-300 animate-pulse group-hover:ring-0 transition duration-300"></div>
            <span>See open positions</span>
          </a>
        </div>
      </div>
      <div className="flex -mx-4 mb-28 items-center justify-center">
        <Image
          className="block w-full h-40 md:h-96 mr-4 md:mr-8 object-cover rounded-xl"
          src="/images/careers-image-careers-people1.png"
          alt="Team member working"
          width={300}
          height={384}
        />
        <Image
          className="block w-full h-40 md:h-96 mr-4 md:mr-8 object-cover rounded-xl"
          src="/images/careers-image-careers-people3.png"
          alt="Team collaboration"
          width={300}
          height={384}
        />
        <Image
          className="block w-full h-40 md:h-96 object-cover rounded-xl"
          src="/images/careers-image-careers-people2.png"
          alt="Team meeting"
          width={300}
          height={384}
        />
      </div>
    </>
  );
};

export default CareersSection;