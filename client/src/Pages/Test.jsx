// import React from "react";
// import { motion } from "framer-motion";

// const Test = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Sky Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-white h-full w-full"></div>

//       {/* Moving Clouds */}
//       <motion.div
//         className="absolute top-20 left-0 w-98 h-44 bg-white opacity-70 rounded-full"
//         style={{
//           filter: "blur(10px)",
//           boxShadow: "30px 10px 50px white, -30px 10px 50px white",
//         }}
//         initial={{ x: "-100%" }}
//         animate={{ x: "100%" }}
//         transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
//       />

//       <motion.div
//         className="absolute top-40 left-0 w-64 h-32 bg-white opacity-60 rounded-full"
//         style={{
//           filter: "blur(12px)",
//           boxShadow: "40px 15px 60px white, -40px 15px 60px white",
//         }}
//         initial={{ x: "-120%" }}
//         animate={{ x: "100%" }}
//         transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
//       />
//        <motion.div
//         className="absolute top-20 left-0 w-98 h-44 bg-white opacity-70 rounded-full"
//         style={{
//           filter: "blur(10px)",
//           boxShadow: "30px 10px 50px white, -30px 10px 50px white",
//         }}
//         initial={{ x: "+100%" }}
//         animate={{ x: "100%" }}
//         transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
//       />
//         <motion.div
//         className="absolute top-40 left-0 w-64 h-32 ml-5 bg-white opacity-60 rounded-full"
//         style={{
//           filter: "blur(12px)",
//           boxShadow: "40px 15px 60px white, -40px 15px 60px white",
//         }}
//         initial={{ x: "+120%" }}
//         animate={{ x: "100%" }}
//         transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
//       />
//     </div>
//   );
// };

// export default Test;

import React from "react";

// Define some styles for readability and layout
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    color: "#333",
    lineHeight: "1.6",
  },
  header: {
    backgroundColor: "#3e8e41",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
  },
  headerTitle: {
    fontSize: "2.5rem",
    margin: 0,
  },
  main: {
    padding: "20px",
  },
  articleCard: {
    background: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    marginBottom: "20px",
    padding: "20px",
  },
  articleTitle: {
    fontSize: "1.8rem",
    color: "#333",
    marginBottom: "10px",
  },
  articleExcerpt: {
    fontSize: "1rem",
    color: "#555",
  },
  gallerySection: {
    marginTop: "40px",
    textAlign: "center",
  },
  galleryTitle: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
  },
  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
  },
  galleryImage: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
};

// Main landing page component
const LandingPage = () => {
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>My Awesome Blog</h1>
      </header>

      {/* Main Content Section */}
      <main style={styles.main}>
        <div style={styles.articleCard}>
          <h2 style={styles.articleTitle}>How to Create a Blog with React</h2>
          <p style={styles.articleExcerpt}>
            Learn how to set up your own blog website using React. This guide
            will take you through all the necessary steps from the start to
            finish.
          </p>
        </div>

        <div style={styles.articleCard}>
          <h2 style={styles.articleTitle}>
            5 JavaScript Tips Every Developer Should Know
          </h2>
          <p style={styles.articleExcerpt}>
            Discover some advanced JavaScript tips that can make your coding
            more efficient and clean. Perfect for developers at any level.
          </p>
        </div>

        <div style={styles.articleCard}>
          <h2 style={styles.articleTitle}>Understanding Web Accessibility</h2>
          <p style={styles.articleExcerpt}>
            Web accessibility is crucial for creating inclusive websites. In
            this article, we’ll discuss the key concepts and how to implement
            accessibility features.
          </p>
        </div>

        {/* Image Gallery Section */}
        <section style={styles.gallerySection}>
          <h2 style={styles.galleryTitle}>Image Gallery</h2>
          <div style={styles.galleryGrid}>
            <img
              src="https://via.placeholder.com/400x300"
              alt="Gallery Image 1"
              style={styles.galleryImage}
            />
            <img
              src="https://via.placeholder.com/400x300"
              alt="Gallery Image 2"
              style={styles.galleryImage}
            />
            <img
              src="https://via.placeholder.com/400x300"
              alt="Gallery Image 3"
              style={styles.galleryImage}
            />
            <img
              src="https://via.placeholder.com/400x300"
              alt="Gallery Image 4"
              style={styles.galleryImage}
            />
            <img
              src="https://www.istockphoto.com/photo/the-craggies-in-the-blue-ridge-mountains-gm1403500817-456042604"
              alt="Gallery Image 5"
              style={styles.galleryImage}
            />
            <img
              src="https://via.placeholder.com/400x300"
              alt="Gallery Image 6"
              style={styles.galleryImage}
            />
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <p>&copy; 2025 My Awesome Blog. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
