abstract class Boxeador {
    abstract atacar(): void;
    descansar(): void{
        console.log("El boxeador recupera energia")
    }
}

class Rocky extends Boxeador {
    atacar(): void {
        console.log("Rocky lanza un gancho")
    }
}

class Apollo extends Boxeador {
    atacar(): void {
        console.log("Apollo lanza un upper")
    }
}

const boxeadores : Boxeador []=[
    new Rocky(),
    new Apollo(),
]
console.log(boxeadores);
boxeadores.forEach(boxeador=>boxeador.atacar());



abstract class Saiyajin {
	abstract transformarse(): void;
	detectarKi(): void {
		console.log("Detectando el nivel de energia del enemigo")
	}
}
class Goku extends Saiyajin {
    transformarse(): void {
        console.log("Goku se transforma en Super Saiyajin");
    }
}

class Vegeta extends Saiyajin {
    transformarse(): void {
        console.log("Vegeta se transforma en Super Saiyajin Blue");
    }
}

const guerreros: Saiyajin[] = [
    new Goku(),
    new Vegeta()
];

guerreros.forEach(guerrero => {
    guerrero.detectarKi();
    guerrero.transformarse();
});