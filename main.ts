
class Tarea{
    public nombre:string
    public version:number
    
    public getNombre(){
        return this.nombre;
    }
    
    public setNombre(nombre:string){
        this.nombre = nombre;
    }
}


var tareas:Array<any> = [];

function save(){
    let nombre = (<HTMLInputElement> document.getElementById("nombre")).value.toString();
    if(validate(nombre)){
        (<HTMLInputElement> document.getElementById("nombre")).value = "";
        let programa = new Tarea();
        programa.setNombre(nombre);

        tareas.push(programa);

        drawList();
    }
}

function del(index:number){
    tareas.splice(index,1);
    drawList();
}

function validate(nombre:string){
    let flag:boolean = true;
    if(nombre==''){
        (<HTMLElement> document.getElementById("error")).style.display = "block";
        flag = false;
    }else{
        (<HTMLElement> document.getElementById("error")).style.display = "none";
        flag = true;
    }
    
    return flag;
}

function drawList(){
    let programasHTML = tareas.map(function(tarea, index){
        return "<li class='list-group-item'>"+tarea.getNombre()+"<i style='color:red' class='fa fa-remove pull-right pointer' onclick='del("+index+")'></i></li>";
    })
    
    var listadoHTML:string = "<ul class='list-group'>";
    programasHTML.forEach(function(element,index,array){
        listadoHTML = listadoHTML + element;
    });
    listadoHTML = listadoHTML + "</ul>";
    
    if (tareas.length>0){
        listadoHTML = listadoHTML + "<button id='deleteAll' class='btn btn-danger pull-right' onclick='deleteAll()'>Eliminar todas</button>";
    }
    
    let listado = (<HTMLElement> document.getElementById("listado")).innerHTML = listadoHTML;
}

function deleteAll(){
    tareas = [];
    drawList();
}