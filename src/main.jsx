import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store/store'
import './index.css'
import { router } from './router/router.jsx'
import { RouterProvider } from 'react-router'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop
            closeOnClick
            pauseOnHover
            toastClassName={() => "relative flex items-center p-4 mb-2 rounded-2xl border shadow-[0px_4px_16px_rgba(0,0,0,0.08)] backdrop-blur-sm min-h-0"}
            bodyClassName={() => "text-sm font-medium flex items-center gap-2"}
            toastStyle={{}}
        />
        <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router} />
        </PersistGate>
    </Provider>
);
