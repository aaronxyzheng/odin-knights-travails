function shortestPath(input, output) {
    let queue = [input];
    let graph = [
        [ 0, 0, 0, 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0, 0, 0, 0]
    ]

    let moveGraph = [
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]]
    ]

    graph[input[0]][input[1]] = 1;;

    while(queue.length > 0) {
        const current = queue.shift();

        if(current[0] === output[0] && current[1] === output[1]) {; // If current matches the output
            console.log("You can make it in " + (graph[current[0]][current[1]] - 1) + " moves!")
            
            // Tracing back the move Graph to find order of steps
            const moveHistory = [];
            let currentHistory = moveGraph[output[0]][output[1]]
            while(currentHistory.length > 0) {
                moveHistory.push(currentHistory);
                currentHistory = moveGraph[currentHistory[0]][currentHistory[1]]
            }
            moveHistory.reverse();


            // Printing the steps of orders
            for(let area of moveHistory) {
                console.log(area);
            }

            console.log(output);

            return;
        }


        for(let square of availableSquares(current)) {
            if(graph[square[0]][square[1]] === 0) {
                graph[square[0]][square[1]] = graph[current[0]][current[1]] + 1;
                queue.push(square)

                moveGraph[square[0]][square[1]] = current;
            }
        }
    }
}


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


shortestPath([0,0],[7,7])