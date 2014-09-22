/**
 * Created by Alucard on 2014/9/22.
 */
angular.module("invoice1", ["finance1"]).controller("InvoiceController", ["convert",function (convert) {
    this.qty = 0;
    this.cost = 0;
    this.inCurr = "EUR";
    this.currencies = convert.currencies;
    this.currenciesMap = convert.currenciesMap;
    this.total = function total(outCurr) {
        return convert.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
    };

    this.pay = function pay() {

        console.dir(convert.currenciesMap.CNY);
    };
}]);