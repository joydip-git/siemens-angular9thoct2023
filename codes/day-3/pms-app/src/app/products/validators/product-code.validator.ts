import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const productCodeValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const data = control.value

    if (data.length != 6)
        return {
            "codeerror": {
                "actual": data.length,
                "allowed": 6
            }
        }

    let status = false
    for (const ch of data) {
        if (ch > 'a' && ch < 'z') {
            status = true
            break;
        }
    }

    if (status == false)
        return {
            "codeerror": "no lowercase character"
        }

    return null
}