import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { ReportService } from 'src/app/services/report.service';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-sncasino-bethistory',
  templateUrl: './sncasino-bethistory.component.html',
  styleUrls: ['./sncasino-bethistory.component.scss']
})
export class SncasinoBethistoryComponent implements OnInit {

    BETSTATUS = "1";
    stype = '';
    bets = []
    betId: number;
  
    selectfromdate: Date;
    selecttodate: Date;
    selecttotime: Date;
    selectfromtime: Date;
  
    loader: boolean = false;
    betstatus: any;
    bettingHistory: any = [];
    month;
  Update: any;
  
    constructor(
      private reportService: ReportService,
      private shareService: ShareDataService,
      private mainService: MainService,
  
    ) {
  
    }
  
    ngOnInit() {
      // this.selectfromdate = new Date(new Date().setDate(new Date().getDate() - 1));
      // this.selecttodate = new Date();
      this.selectfromdate = new Date(new Date().setHours(0, 0, 0));
      this.selecttodate = new Date(new Date().setHours(23, 59, 59));
  
      this.selectfromtime = new Date(new Date().setHours(0, 0, 0, 0));
      this.selecttotime = new Date(new Date().setHours(23, 59, 0, 0));
  
      this.mainService.apis$.subscribe(resp => {
        this.GetBetHistory();
      })
      this.getlanguages();
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
    selectTab(input) {
      if (input == 'today') {
        this.selectfromdate = new Date(new Date().setHours(0, 0, 0));
      } else {
        this.selectfromdate = new Date(new Date().setDate(new Date().getDate() - 1));
      }
      this.GetBetHistory();
    }
  
    changeSport(stype) {
      this.stype = stype;
      this.GetBetHistory();
    }
  
    GetBetHistory() {
      this.bets = [];
  
      this.loader = true;
      let STYPE = this.stype;
      $('#loading').css('display', 'block');
  
      let betdates = {
        "fromdate": this.getFromDateAndTime(),
        "todate": this.getToDateAndTime()
      }
      this.reportService.SNCasinoBetHistory(betdates.fromdate, betdates.todate, this.BETSTATUS).subscribe(
        (resp: any) => {
          this.betstatus = this.BETSTATUS
          this.bettingHistory = resp.result;
          // console.log(this.bettingHistory);
          this.loader = false;
          $('#loading').css('display', 'none');
  
  
        },
  
  
      );
    }
  
    getFromDateAndTime() {
      return `${this.selectfromdate.getFullYear()}-${this.selectfromdate.getMonth() + 1}-${this.selectfromdate.getDate()} ${this.selectfromdate.getHours()}:${this.selectfromdate.getMinutes()}:${this.selectfromdate.getSeconds()}`;
  
    }
    getToDateAndTime() {
      return `${this.selecttodate.getFullYear()}-${this.selecttodate.getMonth() + 1}-${this.selecttodate.getDate()} ${this.selecttodate.getHours()}:${this.selecttodate.getMinutes()}:${this.selecttodate.getSeconds()}`;
    }
  
    getBetType(bet) {
      let betType = "";
      if (bet.type == "Lagai(B)") {
        betType = 'back';
        bet.betType = 'back';
  
      } else {
        betType = 'lay';
        bet.betType = 'lay';
      }
      return betType;
    }
  
    toggleTx(betId) {
      this.betId = betId;
  
    }
  
  
  }
