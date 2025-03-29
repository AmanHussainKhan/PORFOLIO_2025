import React from "react";
import { motion } from "framer-motion";

function BlogPage() {
  return (
    <div className=" bg-[#1E1E1E] p-5 shadow-2xl max-w-4xl rounded">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold border-b-2 border-[#4CAF50] pb-2">
          Blog is under development process...
        </h1>
        <p className="mt-4 text-lg">My name is Aman Hussain Khan</p>
        <p className="mt-4 text-lg">
          Showcasing my work with a touch of elegance.
        </p>
        <div className="w-full mt-7">
          <p className="block w-full text-left whitespace-normal">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            quibusdam recusandae quas veritatis temporibus maiores officiis,
            fugiat voluptas nulla velit? Totam corporis delectus laborum facere
            recusandae id fugit hic nisi!Lorem Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Distinctio eum sequi voluptatem enim,
            officiis sapiente at laborum quasi laudantium quos itaque iste autem
            voluptas perferendis, unde nostrum obcaecati tenetur impedit?
          </p>
        </div>
        <p className=" mt-5 block w-full text-left whitespace-normal">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
          quibusdam recusandae quas veritatis temporibus maiores officiis,
          fugiat voluptas nulla velit? Totam corporis delectus laborum facere
          recusandae id fugit hic nisi!Lorem Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Distinctio eum sequi voluptatem enim,
          officiis sapiente at laborum quasi laudantium quos itaque iste autem
          voluptas perferendis, unde nostrum obcaecati tenetur impedit?
        </p>
      </motion.div>
    </div>
  );
}

export default BlogPage;
