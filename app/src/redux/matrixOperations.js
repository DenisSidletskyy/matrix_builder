export function setRandomParameters(maxColumnCount) {
    return ({
        columns: Math.floor(Math.random() * (maxColumnCount - 2 + 1) + 2),
        rows: Math.floor(Math.random() * (10 - 2 + 1) + 2),
        cells: Math.floor(Math.random() * ((10 - 2 + 1) + 2) / 2),
    })
}

export function setInitialMatrix({columns, rows}) {

    return [...Array(rows)]
        .map(() => [...Array(columns)]
            .map(() => ({
                id: null,
                type: "common",
                value: Math.floor(Math.random() * 900 + 100),
                nearestMode: false,
                percentMode: false,
                percentValue: null,
            })))
}

export function setCellsId(initialMatrix) {
    return initialMatrix.map((row, i) => row.map((cell, j) => ({...cell, id: `${i}-${j}`})))
}

export function setMatrix(initialMatrix) {

    let averageRow = [...Array(initialMatrix[0].length)].map(() =>
        ({id: null, type: "average", value: 0, percentValue: null}))

    let numericRow = [...Array(initialMatrix[0].length + 1)].map(() =>
        ({id: null, type: "numeric", value: null}))

    initialMatrix.forEach((row, i, matrix) => {
        row.forEach((cell, j) => {
            averageRow[j].value += cell.value
            averageRow[j].id = averageRow[j].id ? averageRow[j].id : `avg-${j}`
        })

        if (i === matrix.length - 1) {
            averageRow.forEach((cell) => {
                cell.value = Math.round(cell.value / (i + 1))
            })
        }
    })

    initialMatrix.push(averageRow)

    initialMatrix.forEach((row, i) => {
        row.push({id: `sum-${i}`, type: "sum", value: row.reduce((prev, curr) => prev + curr.value, 0)})
    })

    initialMatrix.forEach((row) => row.forEach((cell, j) => {
        numericRow[j].value = numericRow[j].value ? numericRow[j].value : j === row.length - 1 ? "sum" : j + 1
        numericRow[j].id = numericRow[j].id ? numericRow[j].id : `num-row-${j}`
    }))

    initialMatrix.unshift(numericRow)

    initialMatrix.forEach((row, i, matrix) => {
        row.unshift({id: `num-col-${i}`, type: "numeric", value: i === 0 ? "#" : !matrix[i + 1] ? "avg" : i })
    })

    return initialMatrix
}

export function increaseValue(initialMatrix, id) {
    return initialMatrix.map(row => row.map(cell => cell.id === id ? {...cell, value: cell.value + 1} : cell))
}

export function deleteRow(initialMatrix, id) {

    initialMatrix.splice(id - 1, 1)

    return initialMatrix
}

export function addRow(initialMatrix) {

    initialMatrix.push([...Array(initialMatrix[0].length)].map((_, j) => ({
            id: `${initialMatrix.length}-${j}`,
            type: "common",
            value: Math.floor(Math.random() * 900 + 100),
            nearestMode: false,
            percentMode: false,
    })))

    return initialMatrix
}

export function showPercents(matrix, id) {

    matrix.forEach((row, i) => {
        if (i === id) {
            row.forEach((cell) => {
                if (cell.type === "common" || cell.type === "average") {
                    cell.percentMode = !cell.percentMode
                    cell.percentValue = Math.round(cell.value / row[row.length - 1].value * 100)
                }
            })
        }
    })

    return matrix
}

export function hidePercents(matrix) {
    return matrix.map(row => row.map(cell => cell.percentMode ? {...cell, percentMode: false, percentValue: null} : cell))
}

export function showNearest(matrix, cells, currentCell) {

    let nearestValues = matrix
        .flat()
        .filter(cell => cell.type === "common")
        .sort((prevCell, nextCell) =>
            Math.abs(currentCell.value - prevCell.value) - Math.abs(currentCell.value - nextCell.value))
        .slice(0, cells)

    matrix.forEach(row => row
        .forEach(cell => nearestValues
            .forEach(nearestCell => {
                if (nearestCell.id === cell.id) {
                    cell.nearestMode = true
                }
            })
        )
    )

    return matrix
}

export function hideNearest(matrix) {
    return matrix.map(row => row.map(cell => cell.nearestMode ? {...cell, nearestMode: false} : cell))
}