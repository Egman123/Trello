import React, { useState } from 'react'

const App = () => {

  const [currentItem, setCurrentItem] = useState(null);
  const [currentBoard, setCurrentBoard] = useState(null);

  const [boards, setBoards] = useState([
    {id: 1, title: 'Start', items: [{id:1,title: 'React'}, {id: 2, title: 'Angular'}, {id:3, title: 'Vue'} ]},
    {id: 2, title: 'In Process', items: []},
    {id: 3, title: 'Finished', items: []}
  ])

  const dropHandler = (e, board) => {
       let currentIndex = currentBoard.items.indexOf(currentItem);
       currentBoard.items.splice(currentIndex, 1)
       board.items.push(currentItem);
    
       setBoards(boards.map(el => el))
       
  }

  const dragStartHandler = (e, board, item) => {
      setCurrentBoard(board);
      setCurrentItem(item)
  }

  const dragOverHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div className='App'>
       {boards.map(board => 
          <div
           className='Board'
            onDrop={(e) => dropHandler(e, board)}
           onDragOver={(e) => dragOverHandler(e)}
          >
           <div className='Board_Title'>{board.title}</div> 
          {board.items.map(el => 
            <div
              draggable={true}
              onDragStart={(e) => dragStartHandler(e, board, el)}
              onDragOver={(e) => dragOverHandler(e)}
             
            >
             <h1 style={{color: "red"}}>{el.title}</h1> 
            </div> 
          )}  
          </div>
        )}
    </div>
  )
}

export default App