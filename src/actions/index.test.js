import moxios from 'moxios';

import { storeFactory } from '../../test/testUtils';
import { getSecretWord } from './';

describe('getSecretWord action creator', () => {
  beforeEach(() => {
    // axios instance would go here if it was used in this app
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('adds response word to state', () => {
    const secretWord = 'party';
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    // getSecretWord() returns a function that returns a promise...
    // it's important, to test the return from the promise
    // otherwise, errors may pass through the test, before the promise is resolved
    return store.dispatch(getSecretWord())
      .then(() => {
        const newState = store.getState();
        expect(newState.secretWord).toBe(secretWord);
      });
  });
});