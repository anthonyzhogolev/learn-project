import React, { type ReactNode, type ErrorInfo } from 'react'

interface ErrorBoundaryProps {
    children: ReactNode
    fallback: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError (_: Error) {
    // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
        console.log(error, errorInfo)
    }

    render () {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return this.props.fallback
        }

        return this.props.children
    }
}
