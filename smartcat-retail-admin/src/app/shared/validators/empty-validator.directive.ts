import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
    selector: '[emptyValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: EmptyValidatorDirective,
        multi: true
    }]
})
export class EmptyValidatorDirective implements Validator {
    validate(control: AbstractControl):  {[key: string]: any} | null {
        
            return !(control.value && control.value.trim()) ? {
                invalid: true
            } : null
    }
}