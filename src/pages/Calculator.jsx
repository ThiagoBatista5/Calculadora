//resetando a calculadora e chamando  de setDisplay
export function Ac(setDisplay) {
    setDisplay('0')
}
//adicionado um simbolo de operação ao Display e concatenando o Operador
export function Operador(Operador, setDisplay) {
    setDisplay(prev => prev + Operador)
}
//adicionado um digito. se o display tiver 0, ele substituir se não ele cotatena
export function Numero(n, setDisplay) {
    setDisplay(prev => prev == '0' ? String(n) : prev + n)
}
//pegando a string e passando no eval para calcula o resultado. try/cath evita que quebre caso a expressão seja inválida.
export function Somar(display, setDisplay) {
    try {
        setDisplay(String(eval(display)))
    } catch {
        setDisplay('erro')
    }
}
