import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
    selector: '[alphabetValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: AlphabetValidatorDirective,
        multi: true
    }]
})
export class AlphabetValidatorDirective implements Validator {
    validate(control: AbstractControl):  {[key: string]: any} | null {
        return !(control.value && control.value.trim() && /^[a-zA-Z\s]+$/.test(control.value)) ? {
            invalid: true
        } : null
    }
}