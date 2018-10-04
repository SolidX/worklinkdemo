"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const MaterialIcons_1 = __importDefault(require("react-native-vector-icons/MaterialIcons"));
class TeamModal extends react_1.Component {
    render() {
        const numberOfMembers = this.props.teamArray.length;
        return (react_1.default.createElement(react_native_1.View, Object.assign({ style: [styles.modal] }, this.props.style),
            react_1.default.createElement(react_native_1.View, { style: styles.containerStyle },
                react_1.default.createElement(MaterialIcons_1.default, { name: "account-circle", size: 30, color: "#BDBDBD" }),
                react_1.default.createElement(react_native_1.Text, null,
                    " ",
                    numberOfMembers,
                    " Member(s) Selected"))));
    }
}
exports.default = TeamModal;
const styles = react_native_1.StyleSheet.create({
    modal: {
        height: 50,
        width: 200,
        borderRadius: 10,
        backgroundColor: '#FFF'
    },
    containerStyle: {
        flexDirection: 'row'
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21wb25lbnRzL1JpZ2h0UGFuZWwvQm9keS9UZWFtTW9kYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLCtDQUF5QztBQUN6QywrQ0FBc0Q7QUFDdEQsNEZBQTJEO0FBRTNELGVBQStCLFNBQVEsaUJBQW1CO0lBQ3hELE1BQU07UUFDSixNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDcEQsT0FBTyxDQUNMLDhCQUFDLG1CQUFJLGtCQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7WUFDL0MsOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGNBQWM7Z0JBQ2hDLDhCQUFDLHVCQUFJLElBQUMsSUFBSSxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFDLFNBQVMsR0FBRztnQkFDeEQsOEJBQUMsbUJBQUk7O29CQUFHLGVBQWU7MENBQTJCLENBQzdDLENBQ0YsQ0FDUixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBWkQsNEJBWUM7QUFFRCxNQUFNLE1BQU0sR0FBRyx5QkFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQixLQUFLLEVBQUU7UUFDTCxNQUFNLEVBQUUsRUFBRTtRQUNWLEtBQUssRUFBRSxHQUFHO1FBQ1YsWUFBWSxFQUFFLEVBQUU7UUFDaEIsZUFBZSxFQUFFLE1BQU07S0FDeEI7SUFDRCxjQUFjLEVBQUU7UUFDZCxhQUFhLEVBQUUsS0FBSztLQUNyQjtDQUNGLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvYW82MC9EZXNrdG9wL1dvcmtGaWxlcy9Xb3JrbGlua0RlbW8vc3JjL1JlYWN0L2NvbXBvbmVudHMvUmlnaHRQYW5lbC9Cb2R5L1RlYW1Nb2RhbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZpZXcsIFN0eWxlU2hlZXQsIFRleHQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IEljb24gZnJvbSAncmVhY3QtbmF0aXZlLXZlY3Rvci1pY29ucy9NYXRlcmlhbEljb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVhbU1vZGFsIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBudW1iZXJPZk1lbWJlcnMgPSB0aGlzLnByb3BzLnRlYW1BcnJheS5sZW5ndGg7XG4gICAgcmV0dXJuIChcbiAgICAgIDxWaWV3IHN0eWxlPXtbc3R5bGVzLm1vZGFsXX0gey4uLnRoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRhaW5lclN0eWxlfT5cbiAgICAgICAgICA8SWNvbiBuYW1lPVwiYWNjb3VudC1jaXJjbGVcIiBzaXplPXszMH0gY29sb3I9XCIjQkRCREJEXCIgLz5cbiAgICAgICAgICA8VGV4dD4ge251bWJlck9mTWVtYmVyc30gTWVtYmVyKHMpIFNlbGVjdGVkPC9UZXh0PlxuICAgICAgICA8L1ZpZXc+XG4gICAgICA8L1ZpZXc+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIG1vZGFsOiB7XG4gICAgaGVpZ2h0OiA1MCxcbiAgICB3aWR0aDogMjAwLFxuICAgIGJvcmRlclJhZGl1czogMTAsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRidcbiAgfSxcbiAgY29udGFpbmVyU3R5bGU6IHtcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93J1xuICB9XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==