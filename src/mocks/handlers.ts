import { http, HttpResponse } from 'msw'

export const handlers = [
    http.get('/users', () => {
        return HttpResponse.json([
                { id: 1, nome: 'John Doe', username: 'johndoe', email: 'john.doe@example.com', 
                cargo: 'Desenvolvedor', especialidade: 'Frontend', projetos: 5, 
                img: '/img/John.Doe.jpg' },
                
                { id: 2, nome: 'Jane Smith', username: 'janesmith', email: 'jane.smith@example.com', 
                cargo: 'Designer', especialidade: 'UI/UX', projetos: 3, 
                img: '/img/Jane.Smith.jpg' },
            
                { id: 3, nome: 'Michael Johnson', username: 'michaeljohnson', email: 'michael.johnson@example.com', 
                cargo: 'Gerente de Projetos', especialidade: 'Gestão de Projetos', projetos: 7, 
                img: '/img/Michael.Johnson.jpg' },
            
                { id: 4, nome: 'Emily Davis', username: 'emilydavis', email: 'emily.davis@example.com', 
                cargo: 'Analista de Dados', especialidade: 'Análise de Dados', projetos: 2, 
                img: '/img/Emily.Davis.jpg' },
            
                {id: 5, nome: 'Roberta Silva', username: 'robertasilva', email: 'roberta.silva@example.com', 
                cargo: 'Coordenadora de Marketing', especialidade: 'Marketing Digital', projetos: 4, 
                img: '/img/Roberta.Silva.jpg' },
            
                {id: 6, nome: 'Carlos Oliveira', username: 'carlosoliveira', email: 'carlos.oliveira@example.com', 
                cargo: 'Analista de Marketing', especialidade: 'Marketing Digital', projetos: 6, 
                img: '/img/Carlos.Oliveira.jpg' }
        ])
    })
]