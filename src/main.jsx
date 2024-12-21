import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Provider } from 'react-redux'
import { store } from './tools/store.jsx'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
   </Provider>
)
