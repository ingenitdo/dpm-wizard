import { createHashHistory } from 'history';

const hashHistory = createHashHistory( {
  basename: '',
  hashType: 'slash',
  getUserConfirmation: ( message, callback ) => callback( window.confirm( message ) )
} );

export { hashHistory };
