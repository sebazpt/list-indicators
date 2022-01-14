import { Component, OnInit } from '@angular/core';
import { IndicatorsDataService } from '../core/services/indicators-data.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-indicators-list',
  templateUrl: './indicators-list.component.html',
  styleUrls: ['./indicators-list.component.scss']
})
export class IndicatorsListComponent implements OnInit {
  fechaActual = new Date();
  indicators:any;
  indicatorsList: any;
  indicatorDataShow: any;
  codigoIndicador: any;
  fechaIndicador: any; 
  nombreIndicador: any; 
  unidadMedidaIndicador: any; 
  valorIndicador: any;
  indicatorHistorySelected:any  

  constructor(
    private indicatorsData : IndicatorsDataService
  ) { }

  ngOnInit() {

    this.indicatorsData.getIndicators().subscribe(
      (response) => {
        this.indicatorsList = response;
        //this.indicatorsList = Object.keys(response).filter( el=> el !=='autor' && el !=='version' && el !=='fecha' );
        this.indicatorsList = Object.entries(response); 
        console.log(this.indicatorsList)
      });
  }

  indicatorInfo(e:any) {
    console.log("IndicatorRow>>>",e.target.id);
    /* console.log("IndicatorList>>>",this.indicatorsList); */
    let indicatorData:any = Object.entries(this.indicatorsList);
        
    this.codigoIndicador = indicatorData[e.target.id][1][1].codigo,
    this.fechaIndicador = indicatorData[e.target.id][1][1].fecha,
    this.nombreIndicador = indicatorData[e.target.id][1][1].nombre,
    this.unidadMedidaIndicador = indicatorData[e.target.id][1][1].unidad_medida,
    this.valorIndicador = indicatorData[e.target.id][1][1].valor
    
    console.log("IndicatorDataShow>>>", this.valorIndicador);
  }

  indicatorHistory(is:any) {
    console.log("IndicatorHistory>>>",is);
    this.nombreIndicador = is.nombre;
    this.unidadMedidaIndicador = is.unidad_medida
    /* console.log("IndicatorList>>>",this.indicatorsList); */

    this.indicatorsData.getIndicator(is.codigo).subscribe(
      (response) => {
        let history = Object.entries(response);
        history =  Object.entries(history[5]);       
        this.indicatorHistorySelected = history[1][1] ;
        //this.indicatorsList = Object.keys(response).filter( el=> el !=='autor' && el !=='version' && el !=='fecha' );
        //this.indicatorsList = Object.entries(response); 
        console.log(this.indicatorHistorySelected)
      });
    
  }

}
