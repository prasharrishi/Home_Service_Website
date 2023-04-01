import React from "react";
import "./Introduction.css";

function Introduction() {
  const tareef = [
    {
      heading: "We are Committed",
      caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde mollitia temporibus. Commodi est a voluptatibus laudantium tempora rem vel.",
    },
    {
      heading: "Trusted Proffesionals",
      caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde mollitia temporibus. Commodi est a voluptatibus laudantium tempora rem vel.",
    },
    {
      heading: "Highly Rated Cleaning",
      caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde mollitia temporibus. Commodi est a voluptatibus laudantium tempora rem vel.",
    },
  ];

  return (
    <div className="Introduction">
      <img src="src/assets/Women_Group.png" className="Group-Women" alt="group of womens" />
      <div className="right-introduction">
        <h1 className="mainHeading">
          We are Very Experienced In Cleaning Service
        </h1>

        <div className="subheading">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          suscipit cumque ipsa illo rerum, tempore dolorem pariatur unde?
          Similique quisquam blanditiis veritatis accusamus placeat saepe
          distinctio atque sed repudiandae minus!
        </div>

        {tareef.map((t, index) => (
          <div>
            <div className="another-flex">
              <img src="src/assets/Tick.png" alt="tick" />
              <h3 className="text-another-flex">{t.heading}</h3>
            </div>
            <div className="subheading hehe">{t.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Introduction;
