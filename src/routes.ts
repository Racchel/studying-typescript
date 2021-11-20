import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {

    /* funciona com o CreateCourseServiceOld*/
    // CreateCourseService.execute("NodeJS", 10, "Dani"); 

    CreateCourseService.execute({           // com a interface  
        name: "NodeJS",                     // preciso passar um objeto
        duration: 2,                        // com os valores
        educator: "Racchel"
    })

    return response.send();
}