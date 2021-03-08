import React from 'react'
import Button from 'react-bootstrap/Button'

export default function PaginationBtn({ paginate, direction }) {
    return (
        <Button type="button" className="bg-googreads rounded-0 mx-1" onClick={paginate}>
            {direction} Page
        </Button>
    )
}
