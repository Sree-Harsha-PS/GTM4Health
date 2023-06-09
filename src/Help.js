import React, { useState, useEffect } from "react"
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header2 from "./components/Header2";
import MenuBar from "./components/MenuBar";

const HelpPage = () => {
    const Title = "Help"
    const Features = ["feature one","feature two","feature three","feature four","feature five","feature six",]
    const [user, setUser] = useState(null);

    useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        setUser(storedUser);
      }
    }, []);

  return (
    <div className="content page-view">
      <Header2 user={user}/>
      <MenuBar />
      <div className="card-container">
        <Card title = {Title} features = {Features} />
      </div>
      <Footer />
    </div>
  );
};

export default HelpPage;