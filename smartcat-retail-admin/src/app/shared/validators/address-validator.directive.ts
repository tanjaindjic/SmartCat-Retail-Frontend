import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
    selector: '[addressValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: AddressValidatorDirective,
        multi: true
    }]
})
export class AddressValidatorDirective implements Validator {
    validate(control: AbstractControl):  {[key: string]: any} | null {
        if(control.value)
            return (control.value.trim() &&  /w+(\s\w+){2,}/.test(control.value)) ? {
                invalid: true
            } : null
    }
}