import { combineReducers } from 'redux'

    const loggedIn = (state = false) => state

    export default combineReducers({ loggedIn })

    // import { combineReducers } from 'redux'

//     const loggedIn = (state = false, action) => {
//         switch(action.type) {
//             case 'LOGON_MODE':
//                 return loggedIn = true
//             case 'LOGOFF_MODE':
//                 return loggedIn = false
//     }
//     }

//     export default combineReducers({ loggedIn })