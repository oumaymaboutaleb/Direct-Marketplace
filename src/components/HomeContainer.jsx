import React from 'react';
import ag from './img/ag.png';
import bg from './img/green.png';
import f1 from './img/f1.png';
import { heroData } from '../utils/data';

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className=" py-2 flex-1 flex flex-col items-start justify-start gap-6 ">
        <div className="flex items-center gap-2 justify-center bg-green-100 px-4 py-1 rounded-full">
          <p className="text-base text-green-800 font-semibold">
            Sustainable Agriculture for All
          </p>
          <div className="w-12 h-12 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img src={ag} className="w-full h-full object-contain" alt="" />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
          Buy agricultural products
          <span className="text-green-800 text-[3rem] lg:text-[4.5rem]">
            {' '}
            directly from the producer.
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Falle7.tn is great news for farmers, and even bigger news for
          consumers. Because Falle7 is a place where the farmer and the end
          consumer meet. That's what we call “Direct Farming” Sign up today to
          easily buy <strong>fresh </strong> products. Get started in minutes
          and help our <strong>tunisian</strong> market grow.
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-green-600 to bg-green-700 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Start Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={bg}
          alt="backgound"
          className=" ml-auto  h-420 w-full lg:w-460 lg:h-650 rounded-3xl opacity-40 "
        />

        <div className=" h-full w-full absolute top-0 left-0 flex items-center justify-center px-60 py-8 gap-4 ml-20 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="w-190 h-225 p-4  bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img src={n.imageSrc} className="w-40 -mt-20  " alt="i1" />
                <p className="text-xl font-semibold text-textColor mt-4 ">
                  {n.name}
                </p>
                <p className="text-md text-lighttextGray font-semibold my-3">
                  {n.decp}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  {n.price} <span className="text-sm text-red-600 ">DT</span>
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
export default HomeContainer;
