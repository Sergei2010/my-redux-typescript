import React from 'react'

// import ReactDOM from 'react-dom'
// import { createRoot } from 'react-dom/client'

import ReactDOM from "react-dom/client"
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'

/* ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
 */
/* const container = document.getElementById('root')
const root = createRoot(container)

root.render(
	<Provider store={store}>
		<App />
	</Provider>
) */

const root = ReactDOM.createRoot(document.getElementById("root")!)  // '!' -> ненулевое утверждение 
root.render(
	<Provider store={store}>
		<App />
	</Provider>,
  );
