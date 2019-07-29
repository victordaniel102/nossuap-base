const puppeteer = require('./puppeteer');
puppeteer.getBoletim().then(res=>{
    console.log(res);
});