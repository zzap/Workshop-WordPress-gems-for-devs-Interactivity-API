/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

const {
    state: wpgemsState,
    actions: wpgemsActions,
    callbacks: wpgemsCallbacks
} = store('wpgems');

const { state } = store('other', {
    state: {
        toggleCount: wpgemsState.toggleCount,
        get themeText() {
            return state.isDark ? state.darkText : state.lightText;
        },
        get toggleCount() {
            return wpgemsState.toggleCount;
        }
    },
    actions: {
        toggleOpen() {
            const context = getContext();
            context.isOpen = !context.isOpen;
        },
        toggleTheme() {
            state.isDark = !state.isDark;
        },
    },
    callbacks: {
        logIsOpen: () => {
            const { isOpen } = getContext();
            // Log the value of `isOpen` each time it changes.
            console.log(`Is open: ${isOpen}`);
        },
    },
});
