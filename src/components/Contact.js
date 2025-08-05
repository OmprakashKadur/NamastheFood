import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4"> Contact Us</h1>
      <form className="flex flex-col max-w-md">
        <input type="text" className="border border-gray-300 p-2 m-2" placeholder ="Name"/>
        <input type="text" className="border border-gray-300 p-2 m-2" placeholder ="Message"/>
        <button className="border border-black  p-2 m-2 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
