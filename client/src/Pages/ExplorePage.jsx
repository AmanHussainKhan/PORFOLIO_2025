import React, { useState } from "react";
import { Link } from "react-router-dom";

function ExplorePage() {
  const [activeComponent, setActiveComponent] = useState("<hello coders/>");

  const components = {
    "Join Community": (
      <div className="text-gray-300">
        <p>(under development)</p>
      </div>
    ),
    "My Blogs": (
      <div className="text-gray-300">
        <p>(under development)</p>
      </div>
    ),
    "Buy me a coffee": (
      <div className="text-gray-300">
        <p>(under development)</p>
      </div>
    ),
    Notes: (
      <div className="border h-120">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem a
        perspiciatis repellat cumque nemo eos hic natus veritatis fuga,
        quibusdam odio doloribus mollitia libero provident, nam rerum corporis
        accusamus.
      </div>
    ),
  };

  return (
    <div className="">
      <div className="flex px-7 justify-between w-screen">
        <aside className=" p-4 shadow-md overflow-y-auto">
          {["Join Community", "My Blogs"].map(
            (item) => (
              <div
                key={item}
                className={`p-3 rounded-lg mt-4 cursor-pointer border ${
                  activeComponent === item
                    ? "bg-green-600 text-white"
                    : "hover:bg-[#1E1E1E]"
                }`}
                onClick={() => setActiveComponent(item)}
              >
                {item}
              </div>
            )
          )}
        </aside>
        <main className="flex-5/6 p-6 flex flex-col justify-center">
          <h2 className="text-lg font-semibold mb-4">{activeComponent}</h2>
          <div>{components[activeComponent]}</div>
        </main>
      </div>
    </div>
  );
}

export default ExplorePage;
