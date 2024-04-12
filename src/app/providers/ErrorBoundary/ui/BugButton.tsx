import { useEffect, useState } from 'react'
import Button from 'shared/ui/Button'

const BugButton = () => {
    const [error, setError] = useState(false)

    useEffect(() => {
        if (error) {
            throw new Error('BugButton triggered error')
        }
    }, [error])

    const handleClick = () => {
        setError(!error)
    }

    return <Button onClick={handleClick}>throw</Button>
}

export default BugButton
