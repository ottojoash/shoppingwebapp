import Image from 'next/image';
import React from 'react';

const Testimonial = () => {
  return (
    <div className="bg-white text-black">  {/* Changed to bg-white for background and text-black for text color */}
      <div className="container pt-16 pb-16 grid-cols-2">
        <div className="grid lg:grid-cols-[300px,1fr] gap-4">

          <div className="border border-gray-300 rounded-2xl p-6 bg-white"> {/* Added bg-white to ensure background color */}
            <h2 className="text-black font-bold text-xl mb-4">Remarks</h2> {/* Changed text color to black */}
            <p className="text-black"> {/* Changed text color to black */}
              Afreshman Jonathan, a curator of the various designs is here to share with you
              the wonders of an African black mind, share yours too, what do you see yourself
              wearing.
            </p>
            <p className="text-black italic mt-4"> {/* Changed text color to black */}
              &quot;Made for one Owned by one&quot;
            </p>
            <p className="text-black mt-2"> {/* Changed text color to black */}
              Comment below
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
