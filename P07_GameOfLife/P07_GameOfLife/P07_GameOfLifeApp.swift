import Foundation

@main
struct GameOfLife {
    static func main() {
        let boardSize = 10;
        var oldBoard = [[Int]]()
        var newBoard = [[Int]]()
        oldBoard = initializeBoard(oldBoard, boardSize)
        newBoard = gameIteration(oldBoard, boardSize)
        
        print("Old Board:\n")
        printBoard(oldBoard)
        print("\n New Board:\n")
        printBoard(newBoard)
    }
    
    static func gameIteration(_ board: [[Int]],_ size: Int) -> [[Int]] {
        var newBoard = board
        for (rowIndex, row) in board.enumerated(){
            for (colIndex, cell) in row.enumerated() {
                let liveNeighbours = countLiveNeighbours(board, x: rowIndex, y: colIndex, size: size)
                if cell == 1 {
                    newBoard[rowIndex][colIndex] = (liveNeighbours == 2 || liveNeighbours == 3) ? 1 : 0
                } else {
                    newBoard[rowIndex][colIndex] = (liveNeighbours == 3) ? 1 : 0
                }
            }
        }
        return newBoard
    }
    
    static func countLiveNeighbours(_ board: [[Int]], x: Int, y: Int, size: Int) -> Int {
        let directions = [(x: -1, y: -1), (x: -1, y: 0), (x: -1, y: 1), (x: 0, y: -1), (x: 0, y: 1), (x: 1, y: -1), (x: 1, y: 0), (x: 1, y: 1)]
        let boardSize = size
        var count = 0
        for direction in directions {
            let newX = x + direction.x
            let newY = y + direction.y
            if newX >= 0 && newY >= 0 && newX < boardSize && newY < boardSize{
                count += board[newX][newY]
            }
        }
        return count
    }

    
    static func initializeBoard(_ board: [[Int]], _ size: Int) -> [[Int]] {
        var newBoard = board
        for _ in 0..<size{
            var row = [Int]()
            for _ in 0..<size{
                let randomValue = Int(arc4random() % 2)
                row.append(randomValue)
            }
            newBoard.append(row)
        }
        return newBoard
    }
    
    static func printBoard(_ board: [[Int]]) {
        for (_, row) in board.enumerated(){
            var output = ""
            for (colIndex, cell) in row.enumerated() {
                output += (cell == 1) ? "X": " "
                if colIndex != row.count - 1{
                    output += " "
                }
            }
            print(output)
        }
    }
}
