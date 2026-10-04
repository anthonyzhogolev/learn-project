import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import type { StateSchema } from "../config/StateSchema";
interface StoreProviderProps {
    initialState: StateSchema
}

export const StoreProvider = (props: React.PropsWithChildren<StoreProviderProps>) => {
    const { children, initialState } = props;
    const store = createReduxStore(initialState);

    return <Provider store={store}>{children}</Provider>
}