"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
class Avatar extends react_1.Component {
    render() {
        return (react_1.default.createElement(react_native_1.View, { style: styles.avatarContainer },
            react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.avatar }, this.props.children)));
    }
}
exports.default = Avatar;
const styles = react_native_1.StyleSheet.create({
    avatarContainer: {
        flex: 1,
        alignItems: 'center',
        padding: '1%'
    },
    avatar: {
        backgroundColor: '#BDBDBD',
        borderRadius: 30,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vQXBwQm9keS9Xb3JrT3JkZXIvQXZhdGFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwrQ0FBeUM7QUFDekMsK0NBQWtFO0FBRWxFLFlBQTRCLFNBQVEsaUJBQW1CO0lBQ3JELE1BQU07UUFDSixPQUFPLENBQ0wsOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGVBQWU7WUFDakMsOEJBQUMsK0JBQWdCLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLElBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNILENBQ2QsQ0FDUixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBVkQseUJBVUM7QUFFRCxNQUFNLE1BQU0sR0FBRyx5QkFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQixlQUFlLEVBQUU7UUFDZixJQUFJLEVBQUUsQ0FBQztRQUNQLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLE9BQU8sRUFBRSxJQUFJO0tBQ2Q7SUFDRCxNQUFNLEVBQUU7UUFDTixlQUFlLEVBQUUsU0FBUztRQUMxQixZQUFZLEVBQUUsRUFBRTtRQUNoQixLQUFLLEVBQUUsRUFBRTtRQUNULE1BQU0sRUFBRSxFQUFFO1FBQ1YsVUFBVSxFQUFFLFFBQVE7UUFDcEIsY0FBYyxFQUFFLFFBQVE7S0FDekI7Q0FDRixDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vQXBwQm9keS9Xb3JrT3JkZXIvQXZhdGFyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgVmlldywgVG91Y2hhYmxlT3BhY2l0eSB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF2YXRhciBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuYXZhdGFyQ29udGFpbmVyfT5cbiAgICAgICAgPFRvdWNoYWJsZU9wYWNpdHkgc3R5bGU9e3N0eWxlcy5hdmF0YXJ9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L1RvdWNoYWJsZU9wYWNpdHk+XG4gICAgICA8L1ZpZXc+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGF2YXRhckNvbnRhaW5lcjoge1xuICAgIGZsZXg6IDEsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcGFkZGluZzogJzElJ1xuICB9LFxuICBhdmF0YXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjQkRCREJEJyxcbiAgICBib3JkZXJSYWRpdXM6IDMwLFxuICAgIHdpZHRoOiA1MCxcbiAgICBoZWlnaHQ6IDUwLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICB9XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==