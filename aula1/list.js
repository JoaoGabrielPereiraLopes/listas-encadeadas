var no = /** @class */ (function () {
    function no(valor, proximo) {
        if (proximo === void 0) { proximo = null; }
        this.valor = valor;
        this.proximo = proximo;
    }
    no.prototype.cadeia = function (a) {
        this.proximo = a;
    };
    return no;
}());
var lista = /** @class */ (function () {
    function lista() {
        this.cabeça = null;
        this.tamanho = 0;
    }
    lista.prototype.add = function (valor, pos) {
        var novo = new no(valor);
        this.tamanho++;
        if (this.tamanho - 1 == 0) {
            this.cabeça = novo;
            return;
        }
        else if (pos <= 0) {
            novo.cadeia(this.cabeça);
            this.cabeça = novo;
            return;
        }
        else {
            var prox = this.cabeça;
            for (var x = 0; x != pos - 1 || prox == null; x++) {
                prox = prox.proximo;
            }
            novo.cadeia(prox.proximo);
            console.log(novo.proximo);
            prox.cadeia(novo);
        }
    };
    lista.prototype.__len__ = function () {
        return this.tamanho;
    };
    return lista;
}());
var lista1 = new lista();
var lista1 = new lista();
lista1.add(2, 3);
lista1.add(1, 0);
lista1.add(20, 1);
console.log(lista1);
