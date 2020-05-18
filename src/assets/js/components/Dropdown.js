import picostyle from "./picostyle.js";

const m = window.m;
const { css } = picostyle(m, { returnObject: true });

const initial = {
	dropdown: {
	},
};

const Actions = update => ({
});

const ButtonClass = css({
	height: "100%",
	padding: "0",
	border: "0",
	color: "var(--foreground-color)",
	backgroundColor: "transparent",
	fontSize: "1.25rem",
	[":hover"]: {
		color: "var(--primary-accent)",
	},
	[":focus"]: {
		color: "var(--primary-accent)",
	},
	["> span"]: {
		display: "block",
		transform: "rotate(90deg)",
		margin: "0 0.6125rem 0 1.25rem",
		padding: "0",
	}
});

const Button = {
	view: ({ attrs: { actions } }) => m("button", {
		class: ButtonClass,
		onclick: actions.toggleOverlay,
	}, m("span", "|||")),
};

const view = {
	view: ({ attrs: { state, actions, items } }) => m.fragment({}, [
		m(Button, { state, actions }),
	]),
};

export const Dropdown = { initial, Actions, view };
