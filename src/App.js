import "./App.css";
import Header from "./components/Header/Header.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Profile from "./components/Profile/Profile.jsx";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import MyPosts from "./components/Profile/MyPosts/MyPosts.jsx";
import Chats from "./components/Chats/Chats.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {

  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <div className="app-wrapper__content">
        <Routes>
          <Route
            path="/profile/*"
            element={<Profile state={props.state.profilePage} addPost={props.addPost}/>}
          />
          <Route
            path="/chats/*"
            element={<Chats state={props.state.messagesPage} />}
          />
          <Route path="/news/*" element={<News />} />
          <Route path="/music/*" element={<Music />} />
          <Route path="/settings/*" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
