var art1 = 100;
var art2 = 110;
var art3 = 120;
var art4 = 130;
var art5 = 140;
var art6 = 150;
var art7 = 160;
var art8 = 170;
var art9 = 180;

function calculateInvoice(stage1, stage2, stage3,) {
    var invoice = stage1 + stage2 + stage3;
    return ("Your current invoice amounts to a total of: € " + invoice + ",--")
}
console.log(calculateInvoice(art1, art4, art7));
console.log(calculateInvoice(art2, art5, art8));
console.log(calculateInvoice(art3, art6, art9));


console.log("\n"+"\n"+"\n"+"\n");


function studentInvoice(stage1, stage2, stage3,) {
    var invoice = stage1 + stage2 + stage3;
    var invRed = invoice*0.9
    var invRound = invRed.toFixed(2);


    return ("Your current invoice amounts to a total of: € " + invoice + "."+"\n"+"\n"+"\n"+"However,"+"\n"+ "because you are a student..."+"\n"+"\n"+ "and we are nice people..." +"\n"+"\n"+"We grant you a 10% reduction!"+"\n"+"\n"+"Your reduced student invoice amounts to a total of: € " + invRound + ",--")
}
console.log(studentInvoice(art1, art4, art7));
console.log("\n"+"\n"+"\n"+"\n");
console.log(studentInvoice(art2, art5, art8));
console.log("\n"+"\n"+"\n"+"\n");
console.log(studentInvoice(art3, art6, art9));