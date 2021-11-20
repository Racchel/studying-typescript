/**
 * name - string
 * duration - number
 * educator - string
 */

interface Course {
    name: string,
    duration: number,
    educator: string
}

// class CreateCourseService {
//     execute(data:Course){
//         console.log(data.name, data.duration, data.educator);
//     }
// }

class CreateCourseService {
    execute({                   // desestrutura da interface os parâmetros
        name,                   // assim, não somos obrigados a passar uma
        duration,               // ordem específica
        educator        
    }:Course){       
        console.log(name, duration, educator);
    }
}

export default new CreateCourseService();   // Não precisa instanciar