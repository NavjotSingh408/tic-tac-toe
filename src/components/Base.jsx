import React, { useState } from "react";
import DrawBox from "./DrawBox";
import '../styles/App.css'

function BaseBox() {
    const [symbol, setSymbol] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);

    const resetGame = () => {
        setSymbol(Array(9).fill(null));
        setIsWin(false);
        setIsX(true)
    }

    const checkWinner = () => {
        let winArr = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (const arr of winArr) {
            console.log(arr);
            let [a, b, c] = arr;
            if (symbol[a] !== null && symbol[a] === symbol[b] && symbol[a] === symbol[c]) {
                return <h1>Player '{symbol[a]}' Won</h1>;
            }
        }
        return false;
    }

    let isWin;

    let truSize = symbol.filter((item) => item !== null);
    if (truSize.length >= 3) {
      if (truSize.length !==9) {
          isWin = checkWinner();        
      }
      else{
        isWin = <h1>Match Draws</h1>
      }
    }
    

    const handleClick = (ind) => {
        if (symbol[ind] !== null) {
            return;
        }
        let trr = [...symbol];
        trr[ind] = isX ? 'X' : 'O';
        setSymbol(trr);
        setIsX(!isX);
    }

    return (
        <>
            {isWin ? (
                <>
                    <div className="turn-show">
                        {isWin}
                    </div>
                    <button className='play-again' onClick={resetGame}>Play Again</button>
                </>
            ) : (
                <>
                    <div className="turn-show">
                        <h1>Player '{isX ? 'X' : 'O'}' Turn</h1>
                    </div>
                    <div className="Outer-Base">
                        <div className="inner-row">
                            <DrawBox value={symbol[0]} index={0} onCli={() => { handleClick(0) }} />
                            <DrawBox value={symbol[1]} index={1} onCli={() => { handleClick(1) }} />
                            <DrawBox value={symbol[2]} index={2} onCli={() => { handleClick(2) }} />
                        </div>
                        <div className="inner-row">
                            <DrawBox value={symbol[3]} index={3} onCli={() => { handleClick(3) }} />
                            <DrawBox value={symbol[4]} index={4} onCli={() => { handleClick(4) }} />
                            <DrawBox value={symbol[5]} index={5} onCli={() => { handleClick(5) }} />
                        </div>
                        <div className="inner-row">
                            <DrawBox value={symbol[6]} index={6} onCli={() => { handleClick(6) }} />
                            <DrawBox value={symbol[7]} index={7} onCli={() => { handleClick(7) }} />
                            <DrawBox value={symbol[8]} index={8} onCli={() => { handleClick(8) }} />
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default BaseBox;