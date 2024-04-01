import { ToasterService } from '@core/services/toaster.service';
import { config } from '@core/interfaces/api_baseurl';
import * as FileSaver from 'file-saver';
import {UntypedFormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CustConfg } from '@core/custom-datepicker/ngx-datePicker-CustConfg';
import { find, get, pull } from 'lodash';
import { StoreService } from '@core/services/store.service';
import { AuthService } from '@core/services/auth.service';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { DatePipe } from '@angular/common';
import { RiCustomMdlService } from '@core/custom-otp-modal/ri-custom-mdl/ri-custom-mdl.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  form: any = FormGroup;
  maxDate: any;
  date: any;
  @ViewChild('tagInput') tagInputRef!: ElementRef;
  @ViewChild('filetagInput') filetagInputRef!: ElementRef;
  tags: any =[
    {
        "id": "15032024",
        "label": "15032024"
    },
    {
        "id": "2024",
        "label": "2024"
    },
    {
        "id": "8",
        "label": "8"
    },
    {
        "id": "airtel",
        "label": "airtel"
    },

  ];
  tagsfileupload: any = ['html'];
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker:| BsDatepickerDirective | any;
  @ViewChild('rangePicker') rangePicker: any;
  bsCustConfg: any = CustConfg;
  userdata: any;
  mdlId:any = 'fileupload'
  catogorySelection:any = [
    [{name:'HR'},{name:'IT'},{name:'Management'}],
    [{name:'Harry'},{name:'Sandeep'},{name:'kamal'}]
  ]
  cat2:any =[]
  fileulpoadform:any = FormGroup;
  file: any;
  Swal: any;
  isData: boolean = false;
  Search_Data:any = []
  records: any;

  constructor(
    private store: StoreService,
    private auth: AuthService,
    private fb: UntypedFormBuilder,
    private toaster: ToasterService,
    public _RiCustomMdlService: RiCustomMdlService,
    private datePipe: DatePipe,
    private http: HttpClient

  ) {

    this.form = this.fb.group({
      catagory1: ['', [Validators.required]],
      catagory2: ['', [Validators.required]],
      upload_by:[''],
      search_by:[''],
      start:['0'],
      length:['10'],
      selectdate: new FormControl([new Date(), new Date()],[Validators.required]),
      tag:[undefined ]
    });
    this.fileulpoadform = this.fb.group({
      date: [new Date(), [Validators.required]],
      catagory1: ['', [Validators.required]],
      catagory2: ['', [Validators.required]],
      image: ['', [Validators.required]],
      remarks: ['', ],
      tag: [undefined],
    });

  }
  ngOnInit() {
    this.userdata = this.store.get('details');
    let object :any = {
      term:''
    }
    this.auth.postData(object,'/documentTags').subscribe((res:any)=>{
      if (res.status === true) {
        this.toaster.showSuccess("Tags Fetch Successfully !!", 'Success')
        this.tags = res.data
        this.tagsfileupload = res.data
      } else {
        this.toaster.showSuccess(res.message, 'error')
      }

    })
  }
  selectEvent(e:any){
    if (e.target.value === 'personal') {
      this.cat2 = this.catogorySelection[1]
    }else{
      this.cat2 = this.catogorySelection[0]
    }
  }
  submitForm(){
    if (!this.form.valid) {
      return
    }
    let aar :any= []
    this.tags.forEach((e:any)=>{
      let tagobj = {tag_name:e.label}
      aar.push(tagobj)
    })

    let obj :any ={
      major_head : this.form.get('catagory1')?.value,
      minor_head : this.form.get('catagory2')?.value,
      from_date : this.datePipe.transform(this.form.get('selectdate').value[0],'dd-MM-yyyy'),
      to_date: this.datePipe.transform(this.form.get('selectdate').value[1],'dd-MM-yyyy'),
      tags: aar,
      uploaded_by : this.form.get('upload_by')?.value,
      start : this.form.get('start')?.value,
      length : this.form.get('length')?.value,
      filterId:"",
      search: {
        value : this.form.get('search_by')?.value
      }
    }
    this.auth.postData(obj,'/searchDocumentEntry').subscribe((res:any)=>{
      if (res.status === true) {
        this.isData = true
        this.records = res
        this.toaster.showSuccess("Data Retrive Successfully !!", 'Success')
        if(res.data.length > 0){
          this.Search_Data = res.data
        }
      }else{
        this.toaster.showSuccess(res.message, 'error')
      }
    })
  }
  upload(){
    if (!this.fileulpoadform.valid) {
      return
    }
    let aar :any= []
    this.tagsfileupload.forEach((e:any)=>{
      let tagobj = {tag_name:e.label}
      aar.push(tagobj)
    })
    let obj :any = {
      major_head : this.fileulpoadform.get("catagory1").value,
      minor_head : this.fileulpoadform.get("catagory2").value,
      document_date : this.datePipe.transform(this.fileulpoadform.get('date').value,'dd-MM-yyyy'),
      document_remarks : this.fileulpoadform.get('remarks').value,
      tags : aar,
      user_id:"nitin"
    }
    let fd  = new FormData()
    fd.append('file',this.file);
    fd.append('data',JSON.stringify(obj) )
    this.auth.postData(fd,'/saveDocumentEntry').subscribe((res:any)=>{
      if (res.status === true) {
        this.toaster.showSuccess(res.message, 'Success')
        this._RiCustomMdlService.close(this.mdlId)
      }else{
        this.toaster.showSuccess(res.message, 'error')
      }
    })

  }
  onChange(event: any) {
    this.file = event.target.files[0];
  }
  onDateRangePickerShow() {
    // This is a workaround to show previous month
    var prevMonth = new Date();
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    this.rangePicker._datepicker.instance.monthSelectHandler({
      date: prevMonth,
    });
  }
  focusTagInput(): void {
    this.tagInputRef.nativeElement.focus();
  }
  fileuploadfocusTagInput(): void {
    this.filetagInputRef.nativeElement.focus();
  }

  onKeyUp(event: KeyboardEvent): void {
    const inputValue: string = this.form.controls.tag.value;
    if (event.code === 'Backspace' && !inputValue) {
      this.removeTag();
      return;
    } else {
      if (event.code === 'Comma' || event.code === 'Space') {
        this.addTag(inputValue);
        this.form.controls.tag.setValue('');
      }
    }
  }

  addTag(tag: string): void {
    if (tag[tag.length - 1] === ',' || tag[tag.length - 1] === ' ') {
      tag = tag.slice(0, -1);
    }
    if (tag.length > 0 && !find(this.tags, tag)) {
      this.tags.push(tag);
    }
  }
  removeTag(tag?: string): void {
    if (!!tag) {
      pull(this.tags, tag);
    } else {
      this.tags.splice(-1);
    }
  }
  onKeyUpfileupload(event: KeyboardEvent): void {
    const inputValue: any = this.fileulpoadform.controls.tag.value;
    if (event.code === 'Backspace' && !inputValue) {
      this.fileuploadremoveTag();
      return;
    } else {
      if (event.code === 'Comma' || event.code === 'Space') {
        this.fileuploadaddTag(inputValue);
        this.fileulpoadform.controls.tag.setValue('');
      }
    }
  }
  fileuploadaddTag(tag: string): void {
    if (tag[tag.length - 1] === ',' || tag[tag.length - 1] === ' ') {
      tag = tag.slice(0, -1);
    }
    if (tag.length > 0 && !find(this.tagsfileupload, tag)) {
      this.tagsfileupload.push(tag);
    }
  }

  fileuploadremoveTag(tag?: string): void {
    if (!!tag) {
      pull(this.tagsfileupload, tag);
    } else {
      this.tagsfileupload.splice(-1);
    }
  }

  get getControl() {
    return this.form.controls;
  }
  get getControluploadfile() {
    return this.fileulpoadform.controls;
  }


 download(url:any){
  this.http.get(url,{ responseType: 'blob' }).subscribe(
    (d:any)=>{
      console.log("image url data",d);
      FileSaver.saveAs(d, "image.jpg");

    },
    (err:any)=>{
      console.log("error",err)
    }
  )

}
}
