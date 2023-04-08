import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import { TransactionsProvider } from "./context/TransactionContext";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
 



ReactDOM.render(
  <TransactionsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionsProvider>,
  document.getElementById("root"),
);
