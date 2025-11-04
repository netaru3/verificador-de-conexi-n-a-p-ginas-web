import fs from 'fs';
import path from 'path'
export class logs{
    constructor(){};
     static lowpath=path.resolve('logs/low');
     static  midpath='logs/mid';
     static  highpath='logs/high';

     static crearpath(){
        if(!fs.existsSync(this.lowpath)){
            fs.mkdirSync(this.lowpath, {recursive: true}
            );fs.writeFileSync(`${this.lowpath}/texto.txt`,"")
        };
        if(!fs.existsSync(this.midpath)){
            fs.mkdirSync(this.midpath);
             fs.writeFileSync(`${this.lowpath}/texto.txt`,"")
        }
        if(!fs.existsSync(this.highpath)){
            fs.mkdirSync(this.highpath);
            fs.writeFileSync(`${this.lowpath}/texto.txt`,"")
        }
     };
    static savelogs(data, level){
       if(level==="low"){fs.appendFileSync(`${this.lowpath}/texto.txt`,`${data}:
        Date ${new Date()}\n`)};
       if(level==="mid"){fs.appendFileSync(`${this.midpath}/texto.txt`,`${data}:
         Date ${new Date()}\n`)};
       if(level==="high"){fs.appendFileSync(`${this.highpath}/texto.txt`,`${data}:
         Date ${new Date()}\n`)}
     }
}
