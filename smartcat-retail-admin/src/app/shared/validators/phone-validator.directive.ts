import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
    selector: '[phoneValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: PhoneValidatorDirective,
        multi: true
    }]
})
export class PhoneValidatorDirective implements Validator {
    validate(control: AbstractControl):  {[key: string]: any} | null {
        if(control.value)
        return !(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/.test(control.value.trim())) ? {
            invalid: true
        } : null
    }
}