import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";
interface PortalProps {
    container?: HTMLElement
}

export const Portal = ({ container = document.body, children }: PropsWithChildren<PortalProps>) => {
    return createPortal(children, container);
};

