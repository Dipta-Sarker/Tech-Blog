import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import route from './routes/routes';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <RouterProvider router={route} />
        <ToastContainer />
      </Provider>
    </div>
  );
}

export default App;
