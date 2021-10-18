var num = document.querySelector('input#number')
var lista = document.querySelector('select#list')
var res = document.querySelector('div#res')
var values = []

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
document.querySelector
function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNum(num.value) && !inList(num.value, values)) {
        values.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `The value ${num.value} has been added`
        lista.appendChild(item)
    } else {
        window.alert('Invalid value. Try again.')
    }
    num.value = ''
    // "Focus" on element
    num.focus()
}

function end(){
    if (values.length == 0){
        window.alert('Adicione values antes de finalizar!')
    } else{
        let tot = values.length
        let greater = values[0]
        let lower = values[0]
        for(let pos in values) {
            sum += values[pos]
            if (values[pos] > greater){
                greater = values[pos]
            }        
            if (values[pos] < lower){
                lower = values[pos]
            }
        }
        avg = sum / tot
        res.innerHTML = ''
        res.innerHTML += `<p>There are ${tot} numbers registered</p>`
        res.innerHTML += `<p>The greatest valued is ${greater}</p>`
        res.innerHTML += `<p>The lowest value informed is ${lower}</p>`
        res.innerHTML += `<p>The sum of all values is ${sum}</p>`
        res.innerHTML += `<p>The mean is ${avg}</p>`
    }
}