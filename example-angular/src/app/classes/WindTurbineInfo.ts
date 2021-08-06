export class WindTurbineInfo{
    id:bigint;
    accessPoint:string;
    windPowerPlant:string;
    folderName:string;
    tensionLine:string;
    turbineName:string;
    haveTorquer:boolean;
    constructor(id:bigint,accessPoint:string,windPowerPlant:string,folderName:string,tensionLine:string,turbineName:string,haveTorquer:boolean){
        this.id=id;
        this.accessPoint=accessPoint;
        this.windPowerPlant=windPowerPlant;
        this.folderName=folderName;
        this.tensionLine=tensionLine;
        this.turbineName=turbineName;
        this.haveTorquer=haveTorquer
    } 
}