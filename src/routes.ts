// desestrutura o Request e Response do express
import { Request, Response } from 'express';

// importa a classe que tem o método execute()
import CreateCourseService from './CreateCourseService';

// precisa tipar o request e o response
// porque não está sendo usado o app = express() - que tem o tipo "dentro"
export function createCourse(request: Request, response: Response) {

    /* funciona com o CreateCourseServiceOld*/
    // CreateCourseService.execute("NodeJS", 10, "Dani"); 

    // executando o método execute da classe CreateCourseService
    CreateCourseService.execute({           // com a interface precisa passar um 
                                            // objeto com os valores
        name: "NodeJS",                      
        duration: 2,                        
        educator: "Racchel"
    })

    CreateCourseService.execute({
        name: "ReactJS",
        educator: "Bu"
    })

    // retorna o response
    return response.send();
}