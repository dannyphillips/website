import React, { Component } from "react";
import cn from "classnames";
import Palette from "react-palette";
import IMAGE_URL  from "../../assets/procore.png";
import "./Palette.css";

const COLOR_PALETTES = [
  "vibrant",
  "lightVibrant",
  "darkVibrant",
  "muted",
  "lightMuted",
  "darkMuted"
];

class App extends Component {
  state = {
    image: IMAGE_URL,
    activePalette: "vibrant"
  };

  setActivePalette = activePalette => evt => {
    this.setState({ activePalette });
  };

  render() {
    const { image, activePalette } = this.state;

    return (
      <Palette image={image}>
        {palette => (
          <div
            className="app"
            style={{
              backgroundColor: palette[activePalette] || "black",
              backgroundImage: `linear-gradient(${palette[activePalette] ||
                "rgb(10, 5, 7)"}, rgb(10, 5, 7) 85%)`
            }}
          >
            <div className="app__main">
              <div className="app__main__image">
                <img src={image} />
              </div>
              <div
                style={{
                  marginTop: 20
                }}
              >
                {activePalette}
              </div>
              <div className="app__main__palettes">
                {COLOR_PALETTES.map(i => (
                  <div
                    key={i}
                    className={cn("palette", { active: i === activePalette })}
                    style={{
                      backgroundColor: palette[i]
                    }}
                    onClick={this.setActivePalette(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </Palette>
    );
  }
}

export default App;
