/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

const { state: stateWPGems } = store( 'wpgems' );

const { state } = store( 'other', {
	state: {
		toggleCount: stateWPGems.toggleCount,
		get themeText() {
			return state.isDark ? state.darkText : state.lightText;
		},
		get toggleCount() {
			return stateWPGems.toggleCount;
		}
	},
	actions: {
		toggleOpen() {
			const context = getContext();
			context.isOpen = ! context.isOpen;
		},
		toggleTheme() {
			state.isDark = ! state.isDark;
		},
	},
	callbacks: {
		logIsOpen: () => {
			const { isOpen } = getContext();
			// Log the value of `isOpen` each time it changes.
			console.log( `Is open: ${ isOpen }` );
		},
	},
} );
