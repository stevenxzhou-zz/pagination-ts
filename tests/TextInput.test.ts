import { expect } from "chai";
import { TextInput } from "../src/TextInput";
import { IAttributeField } from "../src/IAttributeField";

describe('Test Text Input Control', function() {

    before(function(){
        require('jsdom-global')();
    })

    it('should render a text input control', function() {
        let attributeField : IAttributeField = {
            controlType: 1,
            defaultValue: "test",
            predicates: {},
            placeHolder: "test",
            isEnabled: false,
            claimId: "username",
            template: "<input id='{{id}}' placeholder='{{placeholder}}'></input>"
        }

        let textInput = new TextInput(attributeField).element;
        expect(textInput.outerHTML).equal("<div><input id=\"username\" placeholder=\"test\" onclick=\"alert(123)\"></div>");
    }); 
});