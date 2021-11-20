/**
 * name - string
 * duration - number
 * educator - string
 */

// interface serve para facilitar a comunicação entre 
// a classe e a função que chama os métodos da classe
interface Course {
    name: string,
    duration?: number,      // com o '?' torno esse parâmentro opcional
                            // só usa quando há certeza que o parâmetro não é tão importante 
    educator: string
}

// uma forma escrever o método execute() sem desestruturar os parâmetros da interface
/*
 class CreateCourseService {
     execute(data:Course){
         console.log(data.name, data.duration, data.educator);
    }
}
*/

// uma forma escrever o método execute() desestruturanndo os parâmetros da interface
// assim, não é obrigatório passar os valores em uma ordem específica
class CreateCourseService {
    execute({                    
        name,                  
        duration = 8,           // usar o ' = <valor>' para definir um valor default
        educator        
    }:Course){                  // Tipando os parâmetros com a interface
        console.log(name, duration, educator);
    }
}

// Instanciando direto no export, não é preciso mais instanciar novamente
export default new CreateCourseService();   