
import { Injectable,  } from "@angular/core";
import JSONFormatter from 'json-formatter-js';
import { CopyContentService } from "./copy.service";
import { ColorConfigService } from "src/app/users/config/colorConfig.service";
import { delay, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JsonFormatterService  {
  formatter: any;
  newformatter: any;
  brandName:any;
  constructor(
    private copySer: CopyContentService,
    private _ColorConfigService:ColorConfigService){
    this._ColorConfigService.$colorConfig.subscribe((res: any) => {
      if (res.brand_name) {
          this.brandName = res.brand_name;
      }
    });
  }


  formatJSON(value:any) {
    const config = {
      hoverPreviewEnabled: true,
      hoverPreviewArrayCount: 1,
      hoverPreviewFieldCount: 1,
      theme: '',
      animateOpen: true,
      animateClose: true,
      useToJSON: true,
    };
    this.formatter = new JSONFormatter(value, 1, config);

  }
  newformatJSON(value:any) {
    const config = {
      hoverPreviewEnabled: true,
      hoverPreviewArrayCount: 1,
      hoverPreviewFieldCount: 1,
      theme: '',
      animateOpen: true,
      animateClose: true,
      useToJSON: true,
    };
    this.newformatter = new JSONFormatter(value, 1, config);

  }

  setFormatter(){
       return this.formatter;
  }
  newsetFormatter(){
       return this.newformatter;
  }
  expandAll() {
   return this.formatter.openAtDepth('Infinity');
  }
  expand() {
   return this.newformatter.openAtDepth('Infinity');
  }


  collapseAll() {
    return this.formatter.openAtDepth(0);
  }
  collapse() {
    return this.newformatter.openAtDepth(0);
  }

  copyJsonData() {
   return this.copySer.copyText(JSON.stringify(this.formatter?.json));
  }

  print(id:any){
    let printContents: any;
    let popupWin: any;
    printContents = document.getElementById(id)?.innerHTML;
    popupWin = window.open(
      '',
      '_blank',
      'top=0,left=0,height=100%,width=auto'
    );
    popupWin.document.open();
    popupWin.document.write(`
    <html>
      <head>
        <title>Print tab</title>
        <style>
        </style>
      </head>
      <body onload="window.print();window.close()">${printContents}
      <div class="print-verify" style="position:absolute;bottom:10px;right:10px;">
      <img src="assets/images/check.png" style="margin-bottom:10px;" width="80px" class="verify-img">
      <span style="display:block">Verified Document</span>

      </div>
      </body>
    </html>`);
    popupWin.document.close();
  }
  // <strong style="display:block">${this.brandName}</strong>
  numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
