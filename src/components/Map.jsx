import React from "react";

function Map() {
  return (
    <div className="m-4 md:m-8 xl:mx-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.6251373508244!2d83.88224911129467!3d21.483220480200107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a213c368309af57%3A0xdcd4d19c95624841!2sSambalpur%20University%20Institute%20of%20Information%20Technology%20(SUIIT)%2C%20Burla!5e0!3m2!1sen!2sin!4v1762541629389!5m2!1sen!2sin"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[30rem] rounded-lg map border-2 border-turquise"
      ></iframe>
    </div>
  );
}

export default Map;
