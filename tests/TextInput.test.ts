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
            displayName: "User Name",
            template: "<label id='{{id}}_label'>{{displayName}}</label><div id='{{id}}_error'></div></div><input id='{{id}}' placeholder='{{placeholder}}'></input>"
        }

        let textInput = new TextInput(attributeField).element;
        expect(textInput.outerHTML).equal("<div><label id=\"username_label\">User Name</label><div id=\"username_error\"></div><input id=\"username\" placeholder=\"test\" onclick=\"alert('username')\"></div>");
    }); 
});