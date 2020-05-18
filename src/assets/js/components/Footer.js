import picostyle from "./picostyle.js";

const m = window.m;
const { css } = picostyle(m, { returnObject: true });

const initial = {
	footer: {},
};

const Actions = update => ({

});

const FooterClass = css({
	width: "100%",
	height: "1.5rem",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "var(--dark-accent)",
	color: "var(--background-color)",
});

const view = {
	view: () => m('footer', {
		class: FooterClass,
	}, m("small",
		m.trust(`Made with &hearts; by Ryan Ford &copy; ${new Date().getFullYear()}`),
	)),
};

export const Footer = { initial, Actions, view };
