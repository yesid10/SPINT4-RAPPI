
import ReactDOM from 'react-dom/client'
import AppRouter from './Routes/AppRouter'
import './main.css'
import { Provider } from 'react-redux'
import store from './Components/Redux/store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <AppRouter />
    </Provider>
)
