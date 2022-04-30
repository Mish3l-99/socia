import React from "react";
import Post from "./Post";
import { RiSendPlaneFill } from "react-icons/ri";

const postsArray = [
  {
    poster: "Joffery Bartheon",
    posterProfile: "https://picsum.photos/510",
    location: "Kingslanding",
    time: "A fortnigh",
    likedBy: "Aerys Targaryen",
    others: 120,
    caption: "Kill all of them I command it!",
    postImg: "https://picsum.photos/350/200",
  },
  {
    poster: "Cersi Lannister",
    posterProfile: "https://picsum.photos/520",
    location: "Kingslanding",
    time: "2 moons",
    likedBy: "Jaime Lannister",
    others: 1120,
    caption: "Hear me roar!",
    postImg: "https://picsum.photos/400/300",
  },
  {
    poster: "Brienne",
    posterProfile: "https://picsum.photos/530",
    location: "Winterfell",
    time: "2 moons",
    likedBy: "Tormond",
    others: 1120,
    caption: "Fuck Loyalty!",
    postImg: "https://picsum.photos/400/250",
  },
];

const Posts = () => {
  return (
    <div>
      {/* create post */}
      <div className="create-post">
        <form action="">
          <div className="w-8 h-8">
            <img
              className="object-fit rounded"
              src="https://picsum.photos/200"
              alt="/"
            />
          </div>
          <input type="text" placeholder="What is on your mind, modern ape" />
          <button type="submit" className="p-2 btn-primary">
            <RiSendPlaneFill />
          </button>
        </form>
      </div>

      {/* render posts */}
      {postsArray.map((post, index) => {
        return (
          <Post
            key={index + 1}
            poster={post.poster}
            posterProfile={post.posterProfile}
            location={post.location}
            time={post.time}
            likedBy={post.likedBy}
            others={post.others}
            caption={post.caption}
            postImg={post.postImg}
          />
        );
      })}
    </div>
  );
};

export default Posts;
