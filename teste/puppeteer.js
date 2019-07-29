const puppeteer = require('puppeteer');
require('dotenv').config();

async function getBoletim(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://suap.ifrn.edu.br/');
    await page.type('input[name=username]',process.env.USER);
    await page.type('input[name=password]',process.env.PASSWORD);
    await page.click('input[value=Acessar]');
    await page.goto('https://suap.ifrn.edu.br/edu/aluno/'+process.env.USER+'/?tab=boletim');
    const notasData = await page.evaluate( async ()=>{
        const materias = document.querySelectorAll('tbody')[1].children;
        const data = [];
        for(const materia of materias){
            var m = {};
            m.materia = materia.children[1].innerText;
            m.ch = materia.children[2].innerText;
            m.aulas_dadas = materia.children[3].innerText;
            m.faltas = materia.children[4].innerText;
            m.situacao = materia.children[6].innerText;
            switch(materia.children.length){
                case 20:
                    m.n1 = materia.children[7].innerText;
                    m.n2 = materia.children[9].innerText;
                    m.n3 = materia.children[11].innerText;
                    m.n4 = materia.children[13].innerText;
                    m.media = materia.children[15].innerText;
                    m.nota_final = materia.children[16].innerText;
                    m.media_final = materia.children[18].innerText;
                    m.tipo = 'anual';
                    break;
                case 15:
                    m.n1 = materia.children[7].innerText;
                    m.media = materia.children[10].innerText;
                    m.nota_final = materia.children[11].innerText;
                    m.media_final = materia.children[13].innerText;
                    m.tipo = 'unica';
                    break;
                case 17:
                    if(materia.children[7].innerText == ""){
                        m.n1 = materia.children[8].innerText;
                        m.n2 = materia.children[10].innerText;
                        m.periodo = 2;  
                    }else{
                        m.n1 = materia.children[7].innerText;
                        m.n2 = materia.children[9].innerText;
                        m.periodo = 1;
                    }
                    m.media = materia.children[12].innerText;
                    m.nota_final = materia.children[13].innerText;
                    m.media_final = materia.children[15].innerText;
                    m.tipo = 'semestral';
                    break;
                default:
                    m.tipo = 'none'
            }
            data.push(m);
        }
        return data;
    });
    await browser.close();
    return notasData;
};

async function getHorarios(){
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://suap.ifrn.edu.br/');
    await page.type('input[name=username]',process.env.USER);
    await page.type('input[name=password]',process.env.PASSWORD);
    await page.click('input[value=Acessar]');
    await page.goto('https://suap.ifrn.edu.br/edu/aluno/'+process.env.USER+'/?tab=locais_aula_aluno');
    const horariosData = await page.evaluate( async ()=>{
        const materias = document.querySelectorAll('tbody')[1].children;
        const data = [];
        var m = {};
        for(materia of materias){
            // var n = {};
            // var o = {};
            console.log(materia)
            let sala = materia.children[2].innerText;
            let disciplina = materia.children[1].innerText;
            m[sala]?null:m[sala] = {};
            m[sala][disciplina] = 1
            // console.log(m)
            // o.horario = materia.children[3].innerText;
            // console.log(o)
            // n[disciplina] = o; 
            // console.log(n);
            // m[sala] = n;
            // console.log(m);
            
            // m[sala].materia = materia.children[1].innerText;
            // m[sala].
            // .horario = 
            data.push(m);
        }
        console.log(m)
        console.log(data)
    return data;
  })
//   await browser.close();
  return horariosData;
};
getHorarios();

module.exports = {
    getBoletim
}