/**
 * Created by Alucard on 2014/9/22.
 */
angular.module("invoice1", []).controller("InvoiceController", function () {
    this.qty = 0;
    this.cost = 0;
    this.inCurr = "EUR";
    this.currencies = [
        "USD",
        "EUR",
        "CNY"
    ];
    this.usdToForeignRates = {
        USD: 1,
        EUR: 0.74,
        CNY: 6.09
    };

    this.total = function total(outCurr) {
        return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
    };
    this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
        return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
    };
    this.pay = function pay() {
        alert("thanks");
    };
});