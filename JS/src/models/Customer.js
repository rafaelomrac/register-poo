export class Customer {
    #name;
    #age;
    #weight;
    #height;
    #imc;
    #classification;

    static totalCustomer = 0;

    constructor (name, age, weight, height) {
        this.#name = name;
        this.#age = age;
        this.#weight = weight;
        this.#height = height;
        this.#imc = this.calcIMC();
        this.#classification = this.classificationIMC();
        Customer.totalCustomer =+ 1;
    }

    calcIMC () {
        return (this.peso / (this.altura * this.altura)).toFixed(2)
    }

    classificationIMC () {
        let valueIMC = this.imc;
        let classification = "";

        if(valueIMC < 18.5) {
           return classification = 'Abaixo do peso'
        }
        
        if(valueIMC <= 24.9) {
           return classification = 'Peso normal'
        }
        
        if(valueIMC <= 29.9) {
          return  classification = 'Sobrepeso'
        } 
        
        if(valueIMC <= 34.9) {
           return classification = 'Obesidade grau I'
        } 
        
        if(valueIMC <= 39.9) {
            return classification = "Obesidade grau II"
        }
        
        if(valueIMC >= 40) {
          return  classification = "Obesidade grau III ou Mórbida"
        } 
        
        return classification = "Peso inválido";
    };

    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get weight() {
        return this.#weight;
    }

    get height() {
        return this.#height;
    }

    get imc() {
        return this.#imc;
    }

    get classification() {
        return this.#classification
    }

    get totalCustomer() {
        return Customer.totalCusromer
    }

    // set = configurar, editar, alterar
    set name(newName) {
        this.#name = newName;
    }

    set age(newAge) {
        this.#age = newAge;
    }

    set weight(newWeight) {
        this.#weight = newWeight;
    }

    set height(newHeight) {
        this.#height = newHeight;
    }

} 