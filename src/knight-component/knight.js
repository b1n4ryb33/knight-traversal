function knight(){

    let _board = [];


    const move = (from, to) => {

        if(cob(from) || cob(to)){
            throw new Error("cant move from/to out of the board");
        }

        let queue = [[from, 0, [from]]];
        let visited = new Set();
        visited.add(from.toString());

        while (queue.length > 0) {
            console.log("stepped with queue size: " + queue.length);
            let [currentPos, currentDist, currentPath] = queue.shift();

            if (currentPos[0] === to[0] && currentPos[1] === to[1]) {
                return { distance: currentDist, path: currentPath };
            }

            let nextMoves = calculateNextMoves(currentPos);
            nextMoves.forEach(nextMove => {
                if (!visited.has(nextMove.toString())) {
                    visited.add(nextMove.toString());
                    queue.push([nextMove, currentDist + 1, [...currentPath, nextMove]]);
                }
            });
        }

        return { distance: -1, path: [] };

    }

    const calculateNextMoves = (cord) => {
        let moves = [];

        moves = [
            [cord[0] + 2, cord[1] + 1], [cord[0] + 2, cord[1] - 1], [cord[0] + 1, cord[1] + 2], [cord[0] + 1, cord[1] - 2],
            [cord[0] - 2, cord[1] + 1], [cord[0] - 2, cord[1] - 1], [cord[0] - 1, cord[1] + 2], [cord[0] - 1, cord[1] - 2]
            ]

        return moves.filter(move => !cob(move));
    }

    const _initBoard = () => {
        for (let i = 0; i < 8; i++){
            for (let y = 0; y < 8; y++){
                _board.push([i, y]);
            }
        }
    }

    const cob = (coordinates) => {
        return !_board.some(field => {
            return field[0] == coordinates[0] && field[1] == coordinates[1];
        });
    }

    const printBoard = () => {
        _board.forEach(field => console.log(field));
    }

    _initBoard();

    return { move, printBoard, calculateNextMoves };
}

export { knight };