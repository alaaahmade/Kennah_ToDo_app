"use client";

import { Provider } from "react-redux";
// import { PersistGate } from 'redux-persist/integration/react';
import { store } from "./store";

type Props = {
  children: React.ReactNode;
};

export function ReduxProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
