import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpGSoVhY7zDpcp7kopM99d_VBh8avOMwlaw&usqp=CAU"
        message="Wow this works!"
        timestamp="This is the timestamp"
        username="Rizwan"
        image="https://i.guim.co.uk/img/media/67d0eadeb4cdce6d2ddacdf4faa8f3c3b630a811/0_80_3000_1802/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f39071145c8494d76603abe505646353"
      />
      <Post
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpGSoVhY7zDpcp7kopM99d_VBh8avOMwlaw&usqp=CAU"
        message="Wow this works!"
        timestamp="This is the timestamp"
        username="Rizwan"
        image="https://i.guim.co.uk/img/media/67d0eadeb4cdce6d2ddacdf4faa8f3c3b630a811/0_80_3000_1802/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f39071145c8494d76603abe505646353"
      />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
