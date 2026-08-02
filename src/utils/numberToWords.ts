export function numberToWords(num: number): string {
    const a = [
        '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
        'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
        'Seventeen', 'Eighteen', 'Nineteen'
    ];
    const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    const numStr = num.toString();
    if (numStr.length > 9) return 'Overflow';
    
    // pad to 9 digits
    const paddedNum = ('000000000' + numStr).slice(-9);
    const match = paddedNum.match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    
    if (!match) return '';

    let str = '';
    
    // crores
    const crores = parseInt(match[1], 10);
    if (crores > 0) {
        str += (a[crores] || b[Math.floor(crores/10)] + ' ' + a[crores%10]) + ' Crore ';
    }
    
    // lakhs
    const lakhs = parseInt(match[2], 10);
    if (lakhs > 0) {
        str += (a[lakhs] || b[Math.floor(lakhs/10)] + ' ' + a[lakhs%10]) + ' Lakh ';
    }
    
    // thousands
    const thousands = parseInt(match[3], 10);
    if (thousands > 0) {
        str += (a[thousands] || b[Math.floor(thousands/10)] + ' ' + a[thousands%10]) + ' Thousand ';
    }
    
    // hundreds
    const hundreds = parseInt(match[4], 10);
    if (hundreds > 0) {
        str += a[hundreds] + ' Hundred ';
    }
    
    // tens/units
    const tens = parseInt(match[5], 10);
    if (tens > 0) {
        if (str !== '') str += 'and ';
        str += (a[tens] || b[Math.floor(tens/10)] + ' ' + a[tens%10]);
    }
    
    return str.replace(/\s+/g, ' ').trim() + ' Rupees Only.';
}
