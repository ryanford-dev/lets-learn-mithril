import picostyle from "./picostyle.js";

const m = window.m;
const { css } = picostyle(m, { returnObject: true });

const state = {};

const Actions = update => ({

});

const MainContentClass = css({
	width: "100%",
	height: "100%",
	backgroundColor: "var(--background-color)",
	color: "var(--foreground-color)",
});

const view = {
	view: () => m('main', {
		class: MainContentClass,
	}, "Hello World"),
};

export const MainContent = {
	state,
	Actions,
	view
};
