import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/services/share-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-col-left',
  templateUrl: './col-left.component.html',
  styleUrls: ['./col-left.component.scss']
})
export class ColLeftComponent implements OnInit {
  isSNcasino: boolean = environment.isSNcasino;
  isbetgame =environment.isbetgame;
  isSlot: boolean = environment.isSlot;
  isPoker: boolean = environment.isPoker;
  Update: any;
  constructor(private shareService: ShareDataService) { }

  ngOnInit(): void {
    this. getlanguages();
  }
  getlanguages() {
    this.shareService._lagugageSub$.subscribe(data => {
      if(data != null){
        this.Update = data
        }
      if(this.Update?.myaccount=="আমার অ্যাকাউন্ট"){
        $("#accountPopup").css('font-size', '9px');
      }else{
        $("#accountPopup").css('font-size', 'inherit');
      }
      // console.log(this.Update);

    })
  }
}
