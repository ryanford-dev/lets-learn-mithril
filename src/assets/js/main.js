import { Overlay } from "./Overlay.js";
import { Navbar } from "./Navbar.js";
import { MainContent } from "./MainContent.js";
import { Footer } from "./Footer.js";
import merge from "./mergerino.js";

const m = window.m;

const app = {
	initial: {
		Overlay: Overlay.initial,
		Navbar: Navbar.initial,
		MainContent: MainContent.initial,
		Footer: Footer.initial,
	},
	Actions: update => Object.assign(
		{},
		Overlay.Actions(update),
		Navbar.Actions(update),
		MainContent.Actions(update),
		Footer.Actions(update),
	),
};

const update = m.stream();
const states = m.stream.scan(merge, app.initial, update);
const actions = app.Actions(update);

const App = {
	view: ({ attrs: { state, actions } }) => [
		m(Overlay.view, { state, actions }),
		m(Navbar.view, { state, actions }),
		m(MainContent.view, { state, actions }),
		m(Footer.view, { state, actions }),
	]
};

m.mount(document.body, {
	view: () => m(App, { state: states(), actions }),
});
