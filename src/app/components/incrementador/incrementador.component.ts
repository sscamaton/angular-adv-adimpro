import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {
  @Input('valor') progreso: number = 40;
  @Output() ValorSalida: EventEmitter<number> = new EventEmitter();

cambiarValor(valor: number){

  if(this.progreso >= 100 && valor >= 0){
     this.ValorSalida.emit(100);
     this.progreso = 100;

     return;
  }

  if(this.progreso <= 0 && valor <= 0){
    this.ValorSalida.emit(0);
    this.progreso = 0;

    return;
 }
 
  this.progreso = this.progreso + valor;
  this.ValorSalida.emit(this.progreso);
}

onChange(NuevoValor:number){
  if (NuevoValor>= 100 ){
    this.progreso = 100;
  }else if(NuevoValor<= 0){
    this.progreso = 0;
  }else{
    this.progreso = NuevoValor;
  }
    this.ValorSalida.emit(this.progreso);
}

}
