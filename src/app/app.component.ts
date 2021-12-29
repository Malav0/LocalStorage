import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LocalStorage';
  fixed:any=50
  selectvalue:any
  fixednum:any
  select:any
  getvalue:any
  

  
  
  constructor(){

  }

  setData(){
    localStorage.setItem("value",JSON.stringify(this.fixed))
  }

  addData(){
    console.log(this.selectvalue)
     this.fixed =  JSON.parse(localStorage.getItem('value') || '[]');
     this.fixednum = Number(this.fixed)
     this.select= Number(this.selectvalue)
     this.fixednum = this.select + this.fixednum
     console.log(this.fixednum)
    localStorage.setItem("value",JSON.stringify(this.fixednum));
    
  }

  updateData(){
    console.log(this.selectvalue)
    this.fixed =  JSON.parse(localStorage.getItem('value') || '[]');
    this.fixednum = Number(this.fixed)
    this.select= Number(this.selectvalue)
    this.fixednum = this.select
    console.log(this.fixednum)
    localStorage.setItem("value",JSON.stringify(this.fixednum));
    
  }
  
  deleteData(){
    
    JSON.parse(localStorage.getItem('value') || '[]');
    localStorage.removeItem('value');
  }

  getData(){
    this.getvalue=JSON.parse(localStorage.getItem('value') || '[]');
    console.log(this.getvalue)
  }
}
