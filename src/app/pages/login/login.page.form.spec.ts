import { Form, FormBuilder, FormGroup } from "@angular/forms";
import { LoginPageForm } from "./login.page.form";

describe('LoginPageForm', ()=> {

    let loginPageForm: LoginPageForm;
    let form: FormGroup;

    beforeEach( () => {
        
    });

    it('should create login form empty', () => {

        loginPageForm = new LoginPageForm(new FormBuilder());
        form = loginPageForm.createForm();

        expect(form).not.toBeNull();
        expect(form.get('email')).not.toBeNull();
        expect(form.get('email').value).not.toEqual("");
        expect(form.get('email').valid).toBeFalsy();

        expect(form.get('password')).not.toBeNull();
        expect(form.get('password').value).not.toEqual("");
        expect(form.get('password').valid).toBeFalsy();

    });

    it('Should have email invalid if email is not valid', () => {
        form.get('email').setValue('invalid email');

        expect(form.get('email').valid).toBeFalsy();
    })

    it('Should have email valid if email is valid', () => {
        form.get('email').setValue('valid@email.com');

        expect(form.get('email').valid).toBeTruthy();
    });

    it('Should have a valid form', () => {
        form.get('email').setValue('valid@email.com');
        form.get('password').setValue('anyPassword');

        expect(form.valid).toBeTruthy();
    });
});