import './App.css';

function App() {
  return (
    <div class="wall">
      <div class="nav">
        <div class="nav-bar">
          <button onClick={""}>Facebook</button>
          <input type="text"
                 placeholder="Search Facebook">
          </input>
          <button onClick={""}>Home</button>
          <button onClick={""}>Pages</button>
          <button onClick={""}>Watch</button>
          <button onClick={""}>Market</button>
          <button onClick={""}>Home</button>
          <button onClick={""}>Create</button>
          <button onClick={""}>Messages</button>
          <button onClick={""}>Notifications</button>
          <button onClick={""}>Account</button>
        </div>
      </div>
      <div class="user-bar">
        <h4>FirstName LastName</h4>
        <button onClick={""}>Friends</button>
        <button onClick={""}>Groups</button>
        <button onClick={""}>Memories</button>
        <button onClick={""}>See More</button>
        <div class="shortcuts">
          <button onClick={""}>Example Page</button>
          <button onClick={""}>Example Group</button>
          <button onClick={""}>See More</button>
        </div>
      </div>
      <div class="community-bar">
        <h3>Your Pages</h3>
          <button onClick={""}>Example User Page</button>
        <h3>Contacts</h3>
          <button onClick={""}>Friend 1</button>
          <button onClick={""}>Friend 1</button>
      </div>
      <div class="news-feed">
        <div class="create-tab">
          <input class="new-post"
                 type="text"
                 placeholder="What's on your mind?"> 
          </input>
          <button onClick={""}>Live Video</button>
          <button onClick={""}>Photo/Video</button>
          <button onClick={""}>Feeling/Activity</button>
        </div>
      </div>
    </div>
  );
}

export default App;
