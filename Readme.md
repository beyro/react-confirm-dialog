# React Confirm Dialog
A React confirm component. It does not work like the native Window.confirm(), but instead takes an `action` argument, which is the function to execute if the user confirms.

The confirm dialog renders outside of your component appended to `body` using a portal.

## Usage
```
import ConfirmLink from 'react-confirm-dialog';

class App extends React.Component {
  alertSum(args) {
    alert(args.a + args.b);
  }
  render() {
    return (
      <ConfirmLink action={this.alertSum} actionArgs={{a:1, b:2}}>
        <a href="#">Click me to trigger the confirm popup</a>
      </ConfirmLink>
    );
  }
}
```

## Props
- `action`: The action to perform when the user clicks the confirm button.
- `actionArgs`: Arguments to be passed to the action.
- `confirmMessage`: The message to display to the user in the confirm dialog (defaults to "Are you sure that you want to do this?").
- `asHtml`: Indicate that `confirmMessage` is HTML.  __Unchecked content__, advise use of static information.
- `confirmText`: The text to display in the confirm button (defaults to "Yes please").
- `cancelText`: The text to display in the cancel button (defaults to "No thank you").
- `confirmClasses`: String of class names to apply to confirm button (see Styling)
- `cancelClasses`: String of class names to apply to cancel button (see Styling)

### Setting default props
You can change the default props globally for all confirms with ConfirmLink.defaultProps[prop_name].

Eg. `ConfirmLink.defaultProps.confirmMessage = 'Say this by default in all confirm messages';`

## Styling

There are two styles included in Confirm.css for the modal background and the confirm content:
```
.react-confirm-dialog-bg {
  ...
}
.react-confirm-dialog-content {
  ...
}
```
These have minimal properties to create a modal effect.

### Buttons
There are two methods for styling the buttons:

1. Add styles for the class combinations:
  * `react-confirm-dialog-button confirm`
  * `react-confirm-dialog-button cancel`
2. Pass class name string via the properties. `confirmClasses` and `cancelClasses`
  * This allows use of existing loaded css classes e.g. bootstrap
