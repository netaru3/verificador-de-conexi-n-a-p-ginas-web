import fs from 'fs';
import path from 'path'
export class logs{
    constructor(){};
     static lowpath=path.resolve('logs/low');
     static  midpath='logs/mid';
     static  highpath=path.resolve('logs/high');

     static crearpath(){
        if(!fs.existsSync(this.lowpath)){
            fs.mkdirSync(this.lowpath, {recursive: true}
            );fs.writeFileSync(`${this.lowpath}/conexiones-exitosas.txt`,"")
        };
        if(!fs.existsSync(this.midpath)){
            fs.mkdirSync(this.midpath);
             fs.writeFileSync(`${this.midpath}/texto.txt`,"")
        }
        if(!fs.existsSync(this.highpath)){
            fs.mkdirSync(this.highpath);
            fs.writeFileSync(`${this.highpath}/conexiones-fallidas.txt`,"")
        }
     };
    static savelogs(data, level){
       if(level==="low"){fs.appendFileSync(`${this.lowpath}/conexiones-exitosas.txt`,`${data}:
        Date ${new Date()}\n`)};
       if(level==="mid"){fs.appendFileSync(`${this.midpath}/texto.txt`,`${data}:
         Date ${new Date()}\n`)};
       if(level==="high"){fs.appendFileSync(`${this.highpath}/conexiones-fallidas.txt`,`${data}:
         Date ${new Date()}\n`)}
     }
     static deletepath(){fs.rmSync(this.lowpath, {recursive:true})}
}
