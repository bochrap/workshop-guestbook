import { useState, useEffect } from "react";

export default function App() {
 
    // need to add function which fetches our data and renders it on screen

    // and another function called handleSubmit which adds a new post to the database 

    return <div> 
    <form id="newPostForm">
    <label>Username</label>
    <input name="username" placeholder="Username" />
    <label>Post</label>
    <textarea name="post" placeholder="type your post here"></textarea>
    <button onSubmit={handleSubmit}>Share</button>
  </form>

    <div className="newsfeed">
          <h2>news feed</h2>
          <div id="feed"></div>
    </div>
</div>
}