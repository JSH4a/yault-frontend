import React from 'react'

const Header = ({ toggleModal, numberOfCards }) => {
  return (
    <header className='header'>
        <div className='container'>
            <h3>Cards ({numberOfCards})</h3>
            <button onClick={() => toggleModal(true)} className='btn'>
                <i className='bi bi-plus-square'></i>Add card
            </button>
        </div>
    </header>
  )
}

export default Header