
export /**
 * Category
 */
class Category {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        var file = this.createFile();
        if (file > 0) {
            
        }
        else{
            throw "Nie ma pliku `category.json`";
        }
        
    }
    /* tworzy szkielet pliku do ktorego
       beda dopisywane kolejne kategorie */
    createFile(){
        const fs = require('fs');
        return 1;
    }
}