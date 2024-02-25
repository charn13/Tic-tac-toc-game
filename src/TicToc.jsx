import React, { useState } from 'react';

const TicToc = () => {
    const [box, setbox] = useState(Array(9).fill(''));
    const [move, setMove] = useState('X');
    const [showFireworks, setShowFireworks] = useState(false); 
    
    const click = (n) => {
        let square = [...box];
    
        if(box[n] !== '') {
            alert('Already Clicked');
            return;
        }
    
        square[n] = move;
        setbox(square);
        
        if(move === 'X') {
            setMove('O');
        } else {
            setMove('X');
        }
    
        if(checkWin(square)) {
            alert("Winner");
            setShowFireworks(true); // Show fireworks when there's a winner
            square.fill('');
            setbox(square);
        }  
        if(checkDraw(square)) {
            alert("Match Draw");
            square.fill('');
            setbox(square);
        }  
    };
    
    const checkDraw = (box) => {
        let count = 0;
        box.forEach(element => {
            if(element !== '') {
                count++;
            }
        });
    
        return count >= 9;
    };
    
    const checkWin = (box) => {
        const conditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
    
        return conditions.some(([a, b, c]) => {
            return box[a] !== '' && box[a] === box[b] && box[a] === box[c];
        });
    };
    
    const resetGame = () => {
        setbox(Array(9).fill(''));
        setMove('X');
       };
    
    return (
        <>
            <h1 className='text-center'>TIC TAC TOE</h1>
            <table className='m-auto'>
                <tbody>
                    <tr>
                        <td onClick={() => click(0)} className="box box1">{box[0]}</td>
                        <td onClick={() => click(1)} className="box box2">{box[1]}</td>
                        <td onClick={() => click(2)} className="box box3">{box[2]}</td>
                    </tr>
                    <tr>
                        <td onClick={() => click(3)} className="box box2">{box[3]}</td>
                        <td onClick={() => click(4)} className="box box1">{box[4]}</td>
                        <td onClick={() => click(5)} className="box box2">{box[5]}</td>
                    </tr>
                    <tr>
                        <td onClick={() => click(6)} className="box box1">{box[6]}</td>
                        <td onClick={() => click(7)} className="box  box2 ">{box[7]}</td>
                        <td onClick={() => click(8)} className="box box1 ">{box[8]}</td>
                    </tr>
                </tbody>
            </table>
            <button className='mt-5' onClick={resetGame}>RESET</button>
         
        </>
    );
};

export default TicToc;
