/**
 * External dependencies
 */
import { type VNode } from 'preact';
import { type Signal } from '@preact/signals';
/**
 * Relates each router region with its current vDOM content. Used by the
 * `router-region` directive.
 *
 * Keys are router region IDs, and values are signals with the corresponding
 * VNode rendered inside. If the value is `null`, that means the regions should
 * not be rendered. If the value is `undefined`, the region is already contained
 * inside another router region and does not need to change its children.
 */
export declare const routerRegions: Map<string, Signal<VNode<{}> | null | undefined>>;
declare const _default: () => void;
export default _default;
//# sourceMappingURL=directives.d.ts.map