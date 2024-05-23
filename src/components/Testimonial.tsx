import Image from 'next/image';
import React from 'react';

const Testimonial = () => {
  return (
    <div className="bg-black text-white">  {/* Added bg-black for background and text-white to change text color */}
      <div className="container pt-16 pb-16 grid-cols-2">
        <div className="grid lg:grid-cols-[300px,1fr] gap-4">

          <div className="border border-gray-300 rounded-2xl p-6">
            <h2 className="text-gray-300 font-bold text-xl mb-4">Remarks</h2> {/* Adjusted text color for visibility */}
            <p className="text-gray-400"> {/* Adjusted text color for better visibility on black background */}
              Afreshman Jonathan, a curator of the various designs is here to share with you
              the wonders of an African black mind, share yours too, what do you see yourself
              wearing.
            </p>
            <p className="text-gray-300 italic mt-4"> {/* Adjusted text color for better visibility */}
              &quot;Made for one Owned by one&quot;
            </p>
            <p className="text-gray-400 mt-2"> {/* Adjusted text color for visibility */}
              Comment below
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
