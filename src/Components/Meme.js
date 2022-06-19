import React from "react";

export default function Meme() {

	const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg",
  })

	const [allMemes, setAllMemes] = React.useState([])

	function handleChange(event) {
    const {name, value } = event.target
		setMeme(prevMeme => ({
			...prevMeme,
        [name]: value
		}))
  }

	React.useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

	function getMemeImage() {
		const randomNumber = Math.floor(Math.random() * allMemes.length)
		const url = allMemes[randomNumber].url
		setMeme(prevMeme => ({
			...prevMeme,
			randomImage: url
		}))
	}

	return (
		<main>
			<div className="form">
				<input 
					type="text" 
					placeholder="Top text"
					className="form-input"
					onChange={handleChange}
					name="topText"
					value={meme.topText}
				/> 
				<input 
					type="text" 
					placeholder="Bottom text"
					className="form-input"
					onChange={handleChange}
					name="bottomText"
					value={meme.bottomText}
				/> 
				<button 
						className="form-button" 
						onClick={getMemeImage}
				>
					Get a new Meme Image 🖼
				</button>
			</div>

			<div className="meme">
				<img src={meme.randomImage} alt="" className="meme-image" />
				<h2 className="meme-text top">{meme.topText}</h2>
				<h2 className="meme-text bottom">{meme.bottomText}</h2>

			</div>
		</main>
	)
}