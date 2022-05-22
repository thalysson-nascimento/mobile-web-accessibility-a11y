/* tslint:disable:no-unused-variable */
import { FocusSwipeMobileDirective } from '@directives/focus-swipe-mobile.directive';

describe('Directive: FocusSwipeMobile', () => {
  it('should create an instance', () => {
    const directive = new FocusSwipeMobileDirective(
      HTMLElement.arguments,
      HTMLElement.arguments,
      HTMLElement.arguments,
      HTMLElement.arguments
    );
    expect(directive).toBeTruthy();
  });
});
