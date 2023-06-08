import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {


  private _sportData = new BehaviorSubject<any>(null);
  sportData$ = this._sportData.asObservable();

  private _listGamesData = new BehaviorSubject<any>(null);
  listGamesData$ = this._listGamesData.asObservable();

  // private _tpDataList = new BehaviorSubject<any>(null);
  // tpDataList$ = this._tpDataList.asObservable();

  private _oddsDataSub = new BehaviorSubject<any>(null);
  oddsData$ = this._oddsDataSub.asObservable();

  private _updateFundExpoSub = new BehaviorSubject<any>(null);
  updateFundExpo$ = this._updateFundExpoSub.asObservable();

  private _listBetsSub = new BehaviorSubject<any>(null);
  listBets$ = this._listBetsSub.asObservable();


  private _stakeButton = new BehaviorSubject<any>(null);
  stakeButton$ = this._stakeButton.asObservable();

  private _betSlipData = new BehaviorSubject<any>(null);
  betSlipData$ = this._betSlipData.asObservable();

  private _betExpoData = new BehaviorSubject<any>(null);
  betExpoData$ = this._betExpoData.asObservable();

  private _callTpExpo = new BehaviorSubject<any>(null);
  callTpExpo$ = this._callTpExpo.asObservable();
  
  private _lagugageSub = new BehaviorSubject<any>(null);
  _lagugageSub$ = this._lagugageSub.asObservable();

  showLiveTv = new EventEmitter<boolean>();

  constructor() { }



  shareSportData(data: any) {
    this._sportData.next(data);
  }

  shareListGamesData(data: any) {
    this._listGamesData.next(data);
  }

  // shareTpList(data: any) {
  //   this._tpDataList.next(data);
  // }

  shareOddsData(data: any) {
    this._oddsDataSub.next(data);
  }

  shareStakeButton(data: any) {
    this._stakeButton.next(data);
  }

  shareUpdateFundExpo(data: any) {
    this._updateFundExpoSub.next(data);
  }
  shareListBets(data: any) {
    this._listBetsSub.next(data);
  }

  shareBetSlipData(data: any) {
    this._betSlipData.next(data);
  }
  shareBetExpoData(data: any) {
    this._betExpoData.next(data);
  }
  shareCallTpExpoData(data: any) {
    this._callTpExpo.next(data);
  }
  sharelanguage(data: any) {
    this._lagugageSub.next(data);
  }

}
