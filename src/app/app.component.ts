import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import NumberHelper from './../helpers/number.helper';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    nameCtrl: FormControl = new FormControl('');

    USTel: any = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    VNTel: any = ['(', ' ', '+', '8', '4', ' ', ')', ' ', /\d/, /\d/, /\d/, ' ', '-', ' ', /\d/, /\d/, /\d/, ' ', '-', ' ', /\d/, /\d/, /\d/];

    VNDMask: any;

    ngOnInit() {
        this.VNDMask = NumberHelper.getCurrencyMask('', ' VND', true, ',', true);
    }
}
