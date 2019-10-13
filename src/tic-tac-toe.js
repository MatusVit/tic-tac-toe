class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = 'x';
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]]

    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] === null) {
            this.matrix[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.currentPlayerSymbol = (this.currentPlayerSymbol === 'x') ? 'o' : 'x';
        }

    }

    isFinished() {
        if (this.getWinner() !== null) return true;
        if (this.isDraw()) return true;
        return false;
        // return (this.getWinner() !== null) || this.isDraw() ? true : false;

    }

   

    getWinner() {
        
        let symbol = (this.currentPlayerSymbol === 'x') ? 'o' : 'x';
        
        let isDiagonalDown = true;
        let isDiagonalUp = true;
        

        for (let i = 0; i < this.matrix.length; i++) {

            let isRow = true;
            let isCol = true;
            for (let j = 0; j < this.matrix.length; j++) {
                // check rows
                isRow = (symbol === this.matrix[i][j]) ? isRow && true : false;

                // check columns
                isCol = (symbol === this.matrix[j][i]) ? isCol && true : false;
            }symbol
            if (isRow) return symbol;
            if (isCol) return symbol;

            // check diagonals
            isDiagonalDown = (symbol === this.matrix[i][i]) ? isDiagonalDown && true : false;

            isDiagonalUp = (symbol === this.matrix[(this.matrix.length-1)-i][i]) ? isDiagonalUp && true : false;
        }
        if (isDiagonalDown) return symbol;
        if (isDiagonalUp) return symbol;

        return null;
    }

    noMoreTurns() {
        for (let arr of this.matrix) {
            if (arr.includes(null)) return false;
        }
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
