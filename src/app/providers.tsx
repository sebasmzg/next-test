'use client';
import { ReactNode } from "react";
import { NextUIProvider } from '@nextui-org/react';
import {SessionProvider} from 'next-auth/react';
import {FC} from 'react';
import {Provider} from 'react-redux';
import { store } from '@/redux/store';

interface Props {
  children: ReactNode;
}

const Providers: FC<Props> = ({ children }:Props) => {
    return(
        <SessionProvider>
            <Provider store={store}>
                <NextUIProvider>
                    <div className="min-h-screen">{children}</div>
                </NextUIProvider>
            </Provider>
        </SessionProvider>
    );       
}

export default Providers;
