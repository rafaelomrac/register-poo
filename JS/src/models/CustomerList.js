export class CustomerList {
    constructor (list = []) {
        this.#customer = list;

    };

    add (customer) {
        this.#customer.push(customer);
    };

    remove (id) {
        this.#customer.splice(id, 1);
    };

    update (id, updateCustomer) {
        this.#customer[id] = updateCustomer;
    };

    get customer () {
        return [].concat(this.#customer);
    };
}