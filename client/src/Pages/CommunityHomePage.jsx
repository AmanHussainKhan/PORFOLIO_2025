import React, { useEffect, useState } from "react";
import {
  FaRegHeart,
  FaRegComment,
  FaLaughSquint,
  FaThumbsUp,
} from "react-icons/fa";
import pic from "../assets/pic.png";
import {useNavigate} from 'react-router-dom';

const currentUser = { name: "Aman Khan", email: "aman@example.com" };

const users = [
  { id: 1, name: "Aman Khan", email: "aman@example.com", online: true },
  { id: 2, name: "John Doe", email: "john@example.com", online: false },
  { id: 3, name: "Jane Smith", email: "jane@example.com", online: true },
  { id: 4, name: "User Four", email: "four@example.com", online: false },
];

const initialPosts = [
  {
    id: 1,
    author: "Aman Khan",
    content: "This is my first post about JavaScript!",
    image: null,
    likes: 10,
    comments: [],
  },
  {
    id: 2,
    author: "Aman Khan",
    content: "Just made a beautiful CSS-only layout.",
    image: "https://via.placeholder.com/300",
    likes: 25,
    comments: [],
  },
];

function CommunityHomePage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState(initialPosts);
  const [commentInputs, setCommentInputs] = useState({});
  const [userData, setUserData] = useState("");

  const handleCommentChange = (postId, text) => {
    setCommentInputs({ ...commentInputs, [postId]: text });
  };

  const handleAddComment = (postId) => {
    const text = commentInputs[postId];
    if (!text?.trim()) return;

    const newComment = {
      name: currentUser.name,
      text,
      id: Date.now(),
    };

    const updatedPosts = posts.map((post) =>
      post.id === postId
        ? { ...post, comments: [...post.comments, newComment] }
        : post
    );

    setPosts(updatedPosts);
    setCommentInputs({ ...commentInputs, [postId]: "" });
  };

  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    handleRegisterSubmit();
  }, []);

  const handleRegisterSubmit = async (e) => {
    try {
      const response = await fetch(
        "http://localhost:8080/community/user/profile",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setLoading(false);
        console.log("data fetched", data.data);
        setUserData(data.data);  
      } else {
        //  toast.error(data.message);
      }
    } catch (error) {
      console.error("server error:", error);
      setLoading(false);
    }
  };

  const handleLogout= ()=>{
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <div className="h-screen bg-[#121212] text-white font-mono">
      {loading ? (
        <div>data loading...</div>
      ) : (
        <div className="flex h-screen bg-[#121212] text-white font-mono">
          {/* Right - User List */}

          <div className="w-72 bg-[#1A1A1A] border-l border-gray-700 p-4  overflow-y-auto hidden sm:block">
            <h2 className="text-xl font-bold mb-4">
              <span>
                Welcome!:{" "}
                <span className="text-amber-500">{userData.name}</span>{" "}
              </span>
            </h2>
            <h2 className="text-xl font-bold mb-4">
              <span>Community</span>
            </h2>
            <div className="space-y-4">
              {users.map((user) => (
                <div
                  key={user.id + user.email}
                  className="flex items-center space-x-3 bg-[#2A2A2A] p-3 rounded"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-black font-bold">
                    {user.name[0]}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{user.name}</p>
                    <p className="text-xs text-gray-400">{user.email}</p>
                  </div>
                  <span
                    className={`w-3 h-3 rounded-full ${
                      user.online ? "bg-green-400" : "bg-gray-500"
                    }`}
                  ></span>
                </div>
              ))}
            </div>
          </div>
          {/* Left - Posts */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold mb-4">My Blog Feed</h1>
              <button className="border text-sm py-0.5 px-1 bg-red-700" onClick={handleLogout}>logout</button>
            </div>
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-[#1E1E1E] p-4 mb-6 rounded-lg shadow-lg"
              >
                <h2 className="text-lg font-semibold mb-2">{post.author}</h2>
                <p className="mb-2">{post.content}</p>
                {post.image && (
                  <img
                    src={pic}
                    alt="post"
                    className="rounded w-full max-w-lg mx-auto mb-3"
                  />
                )}

                <div className="flex items-center space-x-6 text-gray-400 text-sm mb-4 mt-2">
                  <div className="flex items-center space-x-2">
                    <FaRegHeart className="text-amber-400" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaRegComment className="text-blue-300" />
                    <span>{post.comments.length}</span>
                  </div>
                </div>

                {/* Comments */}
                {post.comments.length > 0 && (
                  <div className="space-y-3 mb-4">
                    {post.comments.map((comment) => (
                      <div
                        key={comment.id}
                        className="bg-[#2C2C2C] p-3 rounded flex flex-col space-y-1"
                      >
                        <p className="text-sm font-semibold text-amber-400">
                          {comment.name}
                        </p>
                        <p className="text-sm text-gray-200">{comment.text}</p>
                        <div className="flex space-x-3 text-sm text-gray-400 mt-1">
                          <FaThumbsUp /> <FaRegHeart /> <FaLaughSquint />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    value={commentInputs[post.id] || ""}
                    onChange={(e) =>
                      handleCommentChange(post.id, e.target.value)
                    }
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleAddComment(post.id)
                    }
                    className="w-full bg-transparent border border-gray-700 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CommunityHomePage;
