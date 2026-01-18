
function availableSquares(input) { // Example [3,3]
    const allSquares = [
        [input[0] + 2, input[1] + 1],
        [input[0] + 1, input[1] + 2],
        [input[0] + 2, input[1] - 1],
        [input[0] + 1, input[1] - 2],
        [input[0] - 2, input[1] + 1],
        [input[0] - 1, input[1] + 2],
        [input[0] - 2, input[1] - 1],
        [input[0] - 1, input[1] - 2],
    ];

    const validSquares = [];
    for(let square of allSquares) {
        if(square[0] <= 7 && square[0] >= 0 && square[1] <= 7 && square[1] >= 0) {
            validSquares.push(square)
        }
    }

    return validSquares
    
}

