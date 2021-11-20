"use strict";
/**
 * name - string
 * duration - number
 * educator - string
 */
Object.defineProperty(exports, "__esModule", { value: true });
// class CreateCourseService {
//     execute(data:Course){
//         console.log(data.name, data.duration, data.educator);
//     }
// }
class CreateCourseService {
    execute({ // desestrutura da interface os parâmetros
    name, // assim, não somos obrigados a passar uma
    duration, // ordem específica
    educator }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseService(); // Não precisa instanciar
