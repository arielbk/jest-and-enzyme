import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import rootReducer from '../src/reducers';

/**
 * Create a testing store with imported reducers, middleware, and initial state
 * globals: rootReducer
 * @param {object} initialState - Initial state for store
 * @function storeFactory
 * @returns {Store} - Redux store
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
}
// Passing this as a prop directly to the component no longer works:
// `Invariant Violation: Passing redux store in props has been removed and does not do anything.`
// Instead -- wrap the unconnected component in its own Provider with this custom store

/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute to search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => (
  wrapper.find(`[data-test='${val}']`)
);

/**
 * 
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
}