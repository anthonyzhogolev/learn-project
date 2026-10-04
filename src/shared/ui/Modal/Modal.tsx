import { classNames } from 'shared/lib'
import cls from './Modal.module.scss'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Portal } from '../Portal'

interface ModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

const ANIMATION_DELAY = 500;

export const Modal = (props: React.PropsWithChildren<ModalProps>) => {
    const { className, children, isOpen, onClose } = props
    const [isClosing, setIsClosing] = useState(false);

    const mods = { [cls.opened]: isOpen, [cls.isClosing]: isClosing };

    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);



    const handleClose = () => {
        setIsClosing(true);

        timeoutRef.current = setTimeout(() => {
            onClose?.();

            setIsClosing(false);
        }, ANIMATION_DELAY);


    }

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        console.log('e.key', e.key);
        if (e.key === 'Escape') {
            handleClose();
        }
    }, [handleClose])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);

        }
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
            window.removeEventListener('keydown', handleKeyDown);

        }
    }, [isOpen]);


    const handleClickContent = (e: React.MouseEvent) => {
        e.stopPropagation()
    }


    return (<Portal>
        <div onClick={handleClose} className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay} >
                <div className={cls.content} onClick={handleClickContent}>
                    {children}
                </div>
            </div>
        </div >
    </Portal>)
}
