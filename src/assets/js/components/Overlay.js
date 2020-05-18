import picostyle from "./picostyle.js";

const m = window.m;
const { css } = picostyle(m, { returnObject: true });

const initial = {
	overlay: {
		overlayActive: false,
		overlayZIndex: "-1",
	},
};

const Actions = update => ({
	toggleOverlay: () => update({
		overlayActive: value => !value,
		overlayZIndex: "2",
	}),
	hideOverlay: active => update({
		overlayZIndex: active ? "2" : "-1",
	}),
});

const OverlayClass = css({
	position: "absolute",
	width: "100vw",
	height: "100vh",
	backgroundColor: "#000",
	transition: "opacity 0.25s",
});

const view = {
	view: ({ attrs: { state, actions } }) => m("div", {
		class: OverlayClass,
		style: {
			opacity: state.overlayActive ? "0.6" : "0",
			zIndex: state.overlayZIndex,
		},
		onclick: actions.toggleOverlay,
		ontransitionend: ({ target: { style: { opacity } } }) => actions.hideOverlay(Number(opacity)),
	}),
};

export const Overlay = { initial, Actions, view };
