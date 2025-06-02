/**
 * External dependencies
 */
import { type ReadonlySignal } from '@preact/signals';
/**
 * Structure that manages reactivity for a property in a state object. It uses
 * signals to keep track of property value or getter modifications.
 */
export declare class PropSignal {
    /**
     * Proxy that holds the property this PropSignal is associated with.
     */
    private owner;
    /**
     * Relation of computeds by scope. These computeds are read-only signals
     * that depend on whether the property is a value or a getter and,
     * therefore, can return different values depending on the scope in which
     * the getter is accessed.
     */
    private computedsByScope;
    /**
     * Signal with the value assigned to the related property.
     */
    private valueSignal?;
    /**
     * Signal with the getter assigned to the related property.
     */
    private getterSignal?;
    /**
     * Structure that manages reactivity for a property in a state object, using
     * signals to keep track of property value or getter modifications.
     *
     * @param owner Proxy that holds the property this instance is associated
     *              with.
     */
    constructor(owner: object);
    /**
     * Changes the internal value. If a getter was set before, it is set to
     * `undefined`.
     *
     * @param value New value.
     */
    setValue(value: unknown): void;
    /**
     * Changes the internal getter. If a value was set before, it is set to
     * `undefined`.
     *
     * @param getter New getter.
     */
    setGetter(getter: () => any): void;
    /**
     * Returns the computed that holds the result of evaluating the prop in the
     * current scope.
     *
     * These computeds are read-only signals that depend on whether the property
     * is a value or a getter and, therefore, can return different values
     * depending on the scope in which the getter is accessed.
     *
     * @return Computed that depends on the scope.
     */
    getComputed(): ReadonlySignal;
    /**
     *  Update the internal signals for the value and the getter of the
     *  corresponding prop.
     *
     * @param param0
     * @param param0.get   New getter.
     * @param param0.value New value.
     */
    private update;
}
//# sourceMappingURL=signals.d.ts.map