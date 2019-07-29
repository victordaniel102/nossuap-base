const puppeteer = require('puppeteer');
require('dotenv').config();


async function teste (){
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://suap.ifrn.edu.br/');
  await page.type('input[name=username]',process.env.USER);
  await page.type('input[name=password]',process.env.PASSWORD);
  await page.click('input[value=Acessar]');
  await page.goto('https://suap.ifrn.edu.br/edu/aluno/20161011110031/?tab=boletim');
  const notasData = await page.evaluate( async ()=>{
    const materias = document.querySelectorAll('tbody')[1].children;
    const data = [];
    console.log(materias);
    for(const materia of materias){
        console.log(materia)
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
                if(1){//2 semestre
                    m.n1 = materia.children[8].innerText;
                    m.n2 = materia.children[10].innerText;
                }
                m.media = materia.children[10].innerText;
                m.nota_final = materia.children[11].innerText;
                m.media_final = materia.children[13].innerText;
                m.tipo = 'unica';
                break;
            default:
                m.tipo = 'none'
        }
        if( == 20){
            
        } else {
            m.materia = materia.children[1].innerText;
            m.tipo = 'semestral'
        }
        data.push(m);

    }
    console.log(data)
  })

//   await browser.close();
};
teste();