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
class WorkCode extends react_1.Component {
    render() {
        return react_1.default.createElement(react_native_1.View, { style: styles.workCode }, this.props.children);
    }
}
exports.default = WorkCode;
const styles = react_native_1.StyleSheet.create({
    workCode: {
        flex: 1.5,
        justifyContent: 'center'
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vQXBwQm9keS9Xb3JrT3JkZXIvV29ya0NvZGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLCtDQUF5QztBQUN6QywrQ0FBZ0Q7QUFFaEQsY0FBOEIsU0FBUSxpQkFBbUI7SUFDdkQsTUFBTTtRQUNKLE9BQU8sOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBUSxDQUFDO0lBQ3BFLENBQUM7Q0FDRjtBQUpELDJCQUlDO0FBRUQsTUFBTSxNQUFNLEdBQUcseUJBQVUsQ0FBQyxNQUFNLENBQUM7SUFDL0IsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLEdBQUc7UUFDVCxjQUFjLEVBQUUsUUFBUTtLQUN6QjtDQUNGLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvYW82MC9EZXNrdG9wL1dvcmtGaWxlcy9Xb3JrbGlua0RlbW8vc3JjL1JlYWN0L2NvbW1vbi9BcHBCb2R5L1dvcmtPcmRlci9Xb3JrQ29kZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0eWxlU2hlZXQsIFZpZXcgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrQ29kZSBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxWaWV3IHN0eWxlPXtzdHlsZXMud29ya0NvZGV9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvVmlldz47XG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICB3b3JrQ29kZToge1xuICAgIGZsZXg6IDEuNSxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgfVxufSk7XG4iXSwidmVyc2lvbiI6M30=