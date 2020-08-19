import { createNumberMask } from 'text-mask-addons/dist/textMaskAddons';

export default class NumberHelper {
    static getCurrencyMask( 
        prefix: string = '$', 
        suffix: string = '',
        includeThousandsSeparator: boolean = true,
        thousandsSeparatorSymbol: string = '.',
        allowDecimal: boolean = true,
    ): any {
        return createNumberMask({
            prefix,
            suffix,
            includeThousandsSeparator,
            thousandsSeparatorSymbol,
            allowDecimal
        });
    }
}