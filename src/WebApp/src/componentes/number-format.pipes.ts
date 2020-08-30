import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { formatNumber } from '@angular/common';
@Pipe({
  name: 'ptBrNumberFormat'
})
export class ptBrNumberformatComponent implements PipeTransform {

  constructor() { }

   transform(number : any){
    let hasMinus = String(number).charAt(0) === '-' ? true:false;
    number =  String(number).charAt(0) === '-' ?
            + String(number).substring(1, number.length)  : number;

        var strNumber = formatNumber(number, "", "0");
        strNumber = strNumber.replace(".", "#");
        strNumber = strNumber.replace(",", ".");
        strNumber = strNumber.replace("#", ",");

        if(hasMinus){
          return '-'+ strNumber;
        }else
        {
          return strNumber;
        }
    }
}