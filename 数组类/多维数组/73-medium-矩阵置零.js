// 73 medium 矩阵置零

// 给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。
//
// 示例 1:
// 输入:
//     [
//         [1,1,1],
//         [1,0,1],
//         [1,1,1]
//     ]
// 输出:
//     [
//         [1,0,1],
//         [0,0,0],
//         [1,0,1]
//     ]
// 示例 2:
//
// 输入:
//     [
//         [0,1,2,0],
//         [3,4,5,2],
//         [1,3,1,5]
//     ]
// 输出:
//     [
//         [0,0,0,0],
//         [0,4,5,0],
//         [0,3,1,0]
//     ]
// 进阶:
//
//     一个直接的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
// 一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
// 你能想出一个常数空间的解决方案吗？


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let hash = {}
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] === 0 && hash[i+','+j] !== 'haha'){
                // 整行置零
                for(let k = 0; k < matrix[i].length; k++){
                    if(matrix[i][k] !== 0){
                        // if(k>j){
                            hash[i+','+k] = 'haha'
                        // }
                        matrix[i][k] = 0
                    }
                }
                // 全列置零
                for(let m = 0; m < matrix.length; m++){
                    if(matrix[m][j]!==0){
                        // 标记一下这是个假的0
                        // if(m > i){
                            hash[m+','+j] = 'haha'
                        // }
                        matrix[m][j] = 0;
                    }
                }
            }
        }
    }
    return matrix
};

console.log(setZeroes([
    [9,8,5,1,8,0,7,3,4,1,2,0],
    [1,4,3,3,8,1,6,9,3,5,7,3],
    [2,5,0,9,5,9,6,4,8,4,7,6],
    [4,5,2,0,8,4,3,1,0,6,4,8],
    [9,0,9,5,7,7,0,9,2,2,0,9],
    [2,7,6,2,1,3,0,7,0,2,7,0],
    [6,0,2,8,9,6,6,0,9,6,7,6],
    [3,8,8,7,0,8,9,4,7,5,6,0],
    [0,9,7,3,1,7,3,0,9,7,8,8],
    [6,7,1,5,3,8,3,8,6,1,7,9],
    [2,6,3,9,1,2,2,4,1,9,7,4],
    [8,0,4,8,8,5,8,4,2,9,1,7]]))