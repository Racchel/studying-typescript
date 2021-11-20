"use strict";
/**
 * name - string
 * duration - number
 * educator - string
 */
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute(// Definindo dessa forma, somos obrigados a 
    name, // passar os valores na mesma ordem que 
    duration, // está na classe que definiu esse método execute()   
    educator) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseService(); // Não precisa instanciar mais
