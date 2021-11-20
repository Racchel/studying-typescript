/**
 * name - string
 * duration - number
 * educator - string
 */

class CreateCourseService {
    execute (                   // Definindo dessa forma, somos obrigados a 
        name:string,            // passar os valores na mesma ordem que 
        duration: number,       // está na classe que definiu esse método execute()   
        educator:string
    ){    
        console.log(name, duration, educator);
    }
}

export default new CreateCourseService();   // Não precisa instanciar mais