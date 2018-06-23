import HelloController from './hello.controller';

describe('HelloController', () => {
  let ctrl: HelloController;

  beforeEach(() => {
    ctrl = new HelloController();
    ctrl.$onInit();
  });

  it('should say hello', () => {
    expect(ctrl.message).toEqual('Hello World');
  });

  it('should include a style for the message', () => {
    expect(ctrl.styles.message).toEqual('message');
  });
});
