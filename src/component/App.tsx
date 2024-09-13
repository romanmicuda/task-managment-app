import React from "react";
import SideBar from "./SideBar";
import "../index.css";
import SearchBar from "./SearchBar";
import TodoReminders from "./TodoReminders";
import NotificationManager from "./NotificationManager";

function App() {
  return (
    <div>
      <SearchBar />
      <SideBar />
      <TodoReminders />
      <NotificationManager />
    </div>
  );
}

export default App;
