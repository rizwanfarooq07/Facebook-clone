import React, { useEffect, useState } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./dataBase";
import { onSnapshot, collection } from "firebase/firestore";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const colRef = collection(db, "posts");

  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc._id, data: doc.data() })));
    });

    // db.collection("posts").onSnapshot((snapshot) =>
    //   setPosts(snapshot.docs.map((doc) => ({ id: doc._id, data: doc.data() })))
    // );
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
};

export default Feed;
