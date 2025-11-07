import React from "react";

function Map() {
  return (
    <div className="m-4 md:m-8 xl:mx-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.467619188757!2d88.45873177489857!3d22.52119737899311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0274a1c0115249%3A0x975599390971e184!2sBengal%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1689419844307!5m2!1sen!2sin"
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
