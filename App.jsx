import { useState } from "react";
import "./App.css";

function App() {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedBox, setSelectedBox] = useState(null);

  const data = {
    Home: [
      {
        title: "React Basics",
        description:
          "React is a JavaScript library used to build user interfaces. It allows developers to create reusable components."
      },
      {
        title: "React Hooks",
        description:
          "Hooks allow you to use state and lifecycle features in functional components."
      },
      {
        title: "React Router",
        description:
          "React Router enables navigation between different pages in a React application."
      }
    ],

    Tutorials: [
      {
        title: "JavaScript",
        description:
          "JavaScript is the programming language of the web."
      },
      {
        title: "HTML",
        description:
          "HTML structures the content of web pages."
      },
      {
        title: "CSS",
        description:
          "CSS styles and designs web pages."
      }
    ],

    About: [
      {
        title: "Company",
        description:
          "We create tutorials and educational content for developers."
      },
      {
        title: "Mission",
        description:
          "Our mission is to make learning web development simple."
      }
    ]
  };

  return (
    <div className="container">
      <h1>My Blog </h1>

      {/* Navigation */}
      <nav className="navbar">
        {Object.keys(data).map((menu) => (
          <button
            key={menu}
            onClick={() => {
              setSelectedMenu(menu);
              setSelectedBox(null);
            }}
          >
            {menu}
          </button>
        ))}
      </nav>

      {/* Content Boxes */}
      {selectedMenu && (
        <div>
          <h2>{selectedMenu}</h2>

          <div className="box-grid">
            {data[selectedMenu].map((item) => (
              <div
                key={item.title}
                className="box"
                onClick={() => setSelectedBox(item)}
              >
                <h3>{item.title}</h3>
                <p>Click to read more</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Full Description */}
      {selectedBox && (
        <div className="details">
          <h2>{selectedBox.title}</h2>
          <p>{selectedBox.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
