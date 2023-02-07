//función para unir arreglo izquierdo y derecho.
//arreglo izquierdo y derecho deben estar ordenados.
function merge(leftArr, rightArr) {
    let output = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // console.log(`en merge => recibo leftArr: ${leftArr} -- recibo rightArr: ${rightArr}`);

    //El ciclo terminará cuando uno de los dos arreglos se recorra por completo, ya que el índice de alguno
    //irá incrementando en cada iteración
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {

        const leftItem = leftArr[leftIndex];
        const rightItem = rightArr[rightIndex];

        // console.log(`comparando en merge => ${leftItem} < ${rightItem}`);

        //se evalua por el item que es menor, y este ese agrega el arreglo output. El resultado
        //de esto es que los elementos menores se agregan primero (ordenando de menor a mayor)
        if (leftItem < rightItem) {
            output.push(leftItem);
            leftIndex++;
        } else {
            output.push(rightItem)
            rightIndex++;
        }        
    }
    //al terminar el ciclo el arreglo outputg tendra los elementos menores ordenados. Por lo tanto,
    //a través del operador ...spread configuramos un nuevo arreglo para retornar. Este nuevo arreglo,
    //toma primero los elementos de output, y luego los elementos de cada arreglo (left y right).
    //El método slice hará que se tomen los elementos de cada arreglo desde el estado en el que quedó
    //cada índice (leftIndex y rightIndex). En el caso del índice que fue incrementando dentro del ciclo
    //while (el que contenía los elementos menores entre los dos arreglos), este no tomará elementos, lo
    //cual esta bien, porque ya estan en el arreglo output. En el caso del índice que no incrementó y quedó
    //en cero (el de los elementos mayores), el método slice si tomará sus elementos, desde la posición cero
    //hasta el final. Obtenemos finalmente todos los elementos ordenamos de menor a mayor y lo retornamos.

    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}

function mergeSort(array) {
    //caso base => largo del arreglo menor a 1? entonces retornar arreglo que contiene único elemento.
    if (array.length <= 1) return array;

    //no es caso base?, entonces dividir el arreglo en dos
        //primero averiguar el punto medio del arreglo
        const middleIndex = Math.floor(array.length / 2);
        //**al dividir el arreglo, tendriamo entonces arreglo derecho y arreglo izquierdo**
        
        //obtengo arreglo dizquierdo con metodo slice indicando desde la posicion cero,
        //hasta el medio del arreglo original, excluyendo el elemento del segundo argumento (middleIndex)
        const leftArr = array.slice(0, middleIndex);
        
        //obtengo el arreglo derecho, no paso el segundo argumento a metodo slice, solo paso 1 argumento
        //lo que dará como resultado un arreglo desde la posicion middleIndex hasta el final del arreglo
        //original.
        const rightArr = array.slice(middleIndex);

    // console.log(`Retornando desde mergeSort leftArr: ${leftArr} -- rightArr: ${rightArr}`);

    //Llamadas recursivas para ordenar y mezclar
    return merge(
        mergeSort(leftArr),
        mergeSort(rightArr)
    );
}


const arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

console.log("****Resultado Ordenado: ", mergeSort(arr));