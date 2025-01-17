var no = /** @class */ (function () {
    function no(valor, proximo) {
        if (valor === void 0) { valor = null; }
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
            prox.cadeia(novo);
        }
    };
    lista.prototype.index = function (pos) {
        var prox = this.cabeça;
        for (var x = 0; x != pos || prox == null; x++) {
            prox = prox.proximo;
        }
        return prox.valor;
    };
    lista.prototype.modify = function (value, pos) {
        var prox = this.cabeça;
        for (var x = 0; x != pos || prox == null; x++) {
            prox = prox.proximo;
        }
        prox.valor = value;
    };
    lista.prototype.remove = function (pos) {
        var prox = this.cabeça;
        for (var x = 0; x != pos - 1 || prox == null; x++) {
            prox = prox.proximo;
        }
        prox.cadeia(prox.proximo.proximo);
        this.tamanho--;
    };
    lista.prototype.__total__ = function () {
        var prox = this.cabeça;
        var retorno = [];
        while (prox != null) {
            retorno.push(prox.valor);
            prox = prox.proximo;
        }
        return retorno;
    };
    lista.prototype.to_string = function () {
        var prox = this.cabeça;
        var retorno = '';
        while (prox != null) {
            retorno += String(prox.valor);
            prox = prox.proximo;
        }
        return retorno;
    };
    lista.prototype.__len__ = function () {
        return this.tamanho;
    };
    lista.prototype.enumerate = function () {
        var prox = this.cabeça;
        var x = 0;
        while (prox != null) {
            console.log(String(x) + ':', prox.valor);
            prox = prox.proximo;
            x++;
        }
    };
    lista.prototype.split = function (a) {
        var prox = this.cabeça;
        var retorno = [];
        var listinha = [];
        while (prox != null) {
            if (prox.valor != a) {
                listinha.push(prox.valor);
            }
            else {
                retorno.push(listinha);
                listinha = [];
            }
            prox = prox.proximo;
        }
        retorno.push(listinha);
        return retorno;
    };
    lista.prototype.ultra_split = function (a) {
        var prox = this.cabeça;
        var retorno = [];
        var fluxo_inicial = new no();
        var fluxo = fluxo_inicial;
        while (prox != null) {
            if (prox.valor != a) {
                if (fluxo.valor == null) {
                    fluxo.valor = prox.valor;
                    if (prox.proximo.valor != a) {
                        fluxo.proximo = prox.proximo;
                    }
                }
                else {
                    fluxo.valor = prox.valor;
                }
            }
            else {
                retorno.push(fluxo_inicial);
                fluxo_inicial = new no();
                fluxo = fluxo_inicial;
            }
            prox = prox.proximo;
        }
        return retorno;
    };
    return lista;
}());
var lista1 = new lista();
lista1.add(2, 3);
lista1.add(1, 0);
lista1.add(20, 1);
lista1.add(2, 1);
console.log(lista1.ultra_split(2));
lista1.add(1, 1);
console.log(lista1);
console.log(lista1.index(1));
lista1.remove(1);
console.log(lista1);
lista1.modify(20, 1);
console.log(lista1.index(1));
console.log(lista1);
console.log(lista1.__total__());
lista1.enumerate();
console.log(lista1.__len__());
