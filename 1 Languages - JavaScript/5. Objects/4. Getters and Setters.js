//Getters and Setters

const pessoa = {
    //Underline is convention to 'private' attribute
    _name: "Leony",

    get name() {return this._name;},
    set name(name) {this._name = name;}
}