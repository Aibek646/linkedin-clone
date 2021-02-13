import React from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
import CreareIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewIcon from "@material-ui/icons/CalendarViewDay";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreareIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNoteIcon} title="Photo" color="#c0cbcd" />
          <InputOption Icon={CalendarViewIcon} title="Photo" color="#7fc15e" />
        </div>
      </div>
      {/* Posts */}
      <Post
        name="Sonnt Sangha"
        description="This is a test"
        message="WOW this worked"
      />
    </div>
  );
};

export default Feed;
