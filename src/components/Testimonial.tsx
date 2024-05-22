import Image from 'next/image';
import React from 'react';

const Testimonial = () => {
  return (
    <div>
      <div className="container pt-16 pb-16 grid-cols-2">
        <div className="grid lg:grid-cols-[300px,1fr] gap-4">         

          <div className="border border-gray-300 rounded-2xl p-6">
            <h2 className="text-gray-500 font-bold text-xl mb-4">Remarks</h2>
            <p className="text-gray-600">
              Afreshman Jonathan, a curator of the various designs is here to share with you
              the wonders of an African black mind, share yours too, what do you see yourself
              wearing.
            </p>
            <p className="text-gray-500 italic mt-4">
              &quot;Made for one Owned by one&quot;
            </p>
            <p className="text-gray-600 mt-2">
              Comment below
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
