import Button from './Button'
import React from 'react'

const Header = ({ title, onAdd, showAdd }) => {
    const onClick = () => {
        console.log('click')
    }

    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

    return (
        <header className='header'>
            <h1 style={headingStyle}>{date}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
        </header>
  )
}

const headingStyle = {
    color: 'white',
}

export default Header