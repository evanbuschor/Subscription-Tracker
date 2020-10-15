import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";
import "./Home.css";
const Home = () => {
	const { user } = useContext(AuthContext);
	console.log("home:", user);
	return (
		<div className="home">
			<h1>Home, protected</h1>
			<p className="home__paragraph">
				I'm baby vegan post-ironic street art chambray mumblecore
				mustache, portland bushwick umami sustainable knausgaard.
				Kickstarter marfa iceland, slow-carb raclette lomo YOLO
				sartorial affogato seitan pabst quinoa typewriter cliche. Subway
				tile semiotics activated charcoal, retro literally craft beer
				cardigan echo park put a bird on it letterpress kale chips
				poutine blue bottle kombucha. Deep v bicycle rights tumeric,
				woke stumptown kickstarter flexitarian. Tote bag cred squid
				kombucha disrupt, pitchfork leggings glossier vaporware pork
				belly. Shoreditch chambray lyft affogato swag keytar direct
				trade YOLO edison bulb neutra hot chicken craft beer.
			</p>
			<p className="home__paragraph">
				Subway tile gochujang cold-pressed health goth next level
				selvage. Green juice ramps selfies williamsburg ugh. 8-bit
				brooklyn iPhone roof party air plant man bun. Portland banh mi
				banjo 8-bit selfies kinfolk single-origin coffee williamsburg
				irony cornhole humblebrag flexitarian. Pabst waistcoat offal
				shaman mixtape pour-over poke raw denim heirloom 3 wolf moon
				keffiyeh.
			</p>
			<p className="home__paragraph">
				Pabst brunch occupy, freegan artisan lumbersexual twee wolf.
				Pop-up try-hard dreamcatcher vice paleo banjo swag leggings,
				narwhal selvage. Heirloom swag synth banjo normcore polaroid hot
				chicken thundercats. Put a bird on it poutine normcore jianbing
				slow-carb authentic messenger bag roof party cold-pressed
				leggings vape mixtape. Forage banh mi hot chicken hell of.
				Butcher offal jianbing flexitarian.
			</p>
			<p className="home__paragraph">
				Palo santo hell of blue bottle echo park farm-to-table, portland
				twee kale chips ennui. Wolf listicle swag live-edge poutine
				snackwave green juice cliche fixie. Brooklyn green juice disrupt
				knausgaard swag fingerstache wayfarers. Yuccie asymmetrical art
				party, pop-up biodiesel normcore slow-carb hell of literally
				paleo truffaut scenester organic. Portland mustache sriracha,
				butcher austin everyday carry selvage flannel pabst irony
				schlitz organic tilde pug XOXO. Unicorn swag bushwick, listicle
				selfies lumbersexual sriracha pitchfork narwhal roof party
				artisan activated charcoal banjo keytar.
			</p>
			<p className="home__paragraph">
				Lyft sartorial yr quinoa, flannel thundercats shaman prism
				schlitz crucifix. Franzen tumeric man braid, aesthetic tofu vape
				small batch la croix. Cred taiyaki DIY cloud bread bicycle
				rights pour-over neutra, viral bitters polaroid hella PBR&amp;B.
				Art party tote bag coloring book activated charcoal live-edge
				normcore cornhole humblebrag keytar neutra.
			</p>
		</div>
	);
};

export default Home;
