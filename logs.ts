import fs from 'fs';
export class logs{
    constructor(){};
    private static readonly lowpath='logs/low';
    private static readonly midpath='logs/mid';
    private static readonly highpath='logs/high';

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
    static savelogs(data:string, level:string){
       if(level==="low"){fs.appendFileSync(`${this.lowpath}/texto.txt`,`${data}:
        Date ${new Date()}\n`)};
       if(level==="mid"){fs.appendFileSync(`${this.midpath}/texto.txt`,`${data}:
         Date ${new Date()}\n`)};
       if(level==="high"){fs.appendFileSync(`${this.highpath}/texto.txt`,`${data}:
         Date ${new Date()}\n`)}
     }
}