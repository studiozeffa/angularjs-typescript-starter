import styles from './button.css';

class ButtonController implements ng.IController {
  'class' = '';
}

const ButtonComponent: ng.IComponentOptions = {
  bindings: {
    title: '<',
    disabled: '<',
    class: '@',
    onClick: '&',
  },
  transclude: true,
  controller: ButtonController,
  template: `
    <button type="button" class="${styles.button} {{$ctrl.class}}" ng-click="$ctrl.onClick()" ng-disabled="$ctrl.disabled">
      <ng-transclude></ng-transclude>
    </button>
  `,
};

export default ButtonComponent;
