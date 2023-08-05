'use client'
import store from '@/Store/CartSlice';
import { Provider } from 'react-redux';

const ReduxProvider = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default ReduxProvider;