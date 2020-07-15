import { Component } from '@angular/core';
import './<%= dasherize(name) %>.component.less';

@Component({
    selector: '<%= dasherize(name) %>',
    template: require('./<%= name %>.component.html')
})
export class <%= classify(name) %>Component {

}
