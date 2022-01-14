import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndicatorsDataService {
  private indicator: any;

  private indicatorsUrl = 'https://mindicador.cl/api/';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET indicators from the server */
  getIndicators() {
    return this.http.get(this.indicatorsUrl);
  }

  /** GET indicator from the server */
  getIndicator(indicatorSelected: any) {
    this.indicator = indicatorSelected;
    return this.http.get(this.indicatorsUrl + this.indicator);
  }
}
