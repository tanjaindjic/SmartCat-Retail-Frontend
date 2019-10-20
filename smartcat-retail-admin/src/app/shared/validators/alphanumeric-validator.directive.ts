import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
    selector: '[alphanumericValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: AlphanumericValidatorDirective,
        multi: true
    }]
})
export class AlphanumericValidatorDirective implements Validator {
    validate(control: AbstractControl):  {[key: string]: any} | null {
        return !(control.value && control.value.trim() && /^[a-zA-Z0-9]*$/.test(control.value)) ? {
            invalid: true
        } : null
    }
}