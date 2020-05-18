import picostyle from "./picostyle.js";
import { Dropdown } from "./Dropdown.js";

const m = window.m;
const { Link } = m.route;
const { css } = picostyle(m, { returnObject: true });

const initial = {
	dropdown: Dropdown.initial,
};

const Actions = update => Object.assign(
	{},
	Dropdown.Actions(update),
);

const NavbarClass = css({
	width: "100%",
	height: "3.125rem",
	display: "flex",
	flexShrink: "0",
	justifyContent: "space-between",
	alignItems: "center",
	backgroundColor: "var(--dark-accent)",
	color: "var(--foreground-color)",
	[" .brand"]: {
		padding: "0 1.25rem",
		color: "var(--foreground-color)",
		fontWeight: "700",
		fontSize: "1.25rem",
	},
	["> a"]: {
		height: "100%",
		lineHeight: "3.125rem",
		textDecoration: "none",
	},
	["> a >.brand:hover"]: {
		color: "var(--primary-accent)",
	},
	["> a >.brand:focus"]: {
		color: "var(--primary-accent)",
	},
});

const view = {
	view: ({ attrs: { state, actions } }) => m('nav', {
		class: NavbarClass,
	}, [
		m(Link, { href: "" }, m("span.brand", "Let's Learn")),
		m(Dropdown.view, {
			state,
			actions,
			items: [
				"word length",
			],
		}),
	]),
};

export const Navbar = { initial, Actions, view };
