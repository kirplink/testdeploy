import React, { Component } from "react";
import Image from "./components/Image";
import API from "./utils/API";

var my_images = [
  {
    id: 0,
    alt: "bob",
    src:
      "https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014"
  },
  {
    id: 1,
    alt: "krabs",
    src:
      "https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131"
  },
  {
    id: 2,
    alt: "squid",
    src:
      "https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626"
  },
  {
    id: 3,
    alt: "onim",
    src:
      "https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png"
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      images: my_images,
      images_clicked: [],
      message: "Click a Picture",
      searchTerm: ""
    };
  }

  clickme = id => {
    if (!this.state.images_clicked.includes(id)) {
      this.setState({
        score: this.state.score + 1,
        images_clicked: [...this.state.images_clicked, id],
        message: "Keep it up!"
      });
    } else {
      this.setState({
        score: 0,
        images_clicked: [],
        message: "You Loose! Start Clicking to play again!"
      });
    }
  };

  onInput = event => {
    let value = event.target.value.trim();
    this.setState({
      searchTerm: value
    });
  };

  searchGiphy = event => {
    event.preventDefault();
    API.search(this.state.searchTerm).then(res => {
      const data = res.data.data;
      let images = [];
      data.forEach(gif => {
        let image = {
          id: gif.id,
          src: gif.images.original_still.url,
          alt: gif.slug
        };
        images.push(image);
      });
      this.setState({
        images: images
      });
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <form>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.onInput}
          />
          <input type="submit" onClick={this.searchGiphy} />
        </form>
        <div>Score: {this.state.score}</div>
        {this.state.images.map(img => (
          <Image
            id={img.id}
            alt={img.alt}
            src={img.src}
            clickme={this.clickme}
          />
        ))}
      </div>
    );
  }
}
