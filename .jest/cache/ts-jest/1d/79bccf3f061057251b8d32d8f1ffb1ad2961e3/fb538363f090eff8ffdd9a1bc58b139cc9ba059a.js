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
class LeftContainer extends react_1.Component {
    render() {
        return react_1.default.createElement(react_native_1.View, { style: styles.container }, this.props.children);
    }
}
exports.default = LeftContainer;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#BDBDBD'
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vTGVmdEhlYWRlci9MZWZ0Q29udGFpbmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwrQ0FBeUM7QUFDekMsK0NBQWdEO0FBRWhELG1CQUFtQyxTQUFRLGlCQUFTO0lBQ2xELE1BQU07UUFDSixPQUFPLDhCQUFDLG1CQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxTQUFTLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQVEsQ0FBQztJQUNyRSxDQUFDO0NBQ0Y7QUFKRCxnQ0FJQztBQUVELE1BQU0sTUFBTSxHQUFHLHlCQUFVLENBQUMsTUFBTSxDQUFDO0lBQy9CLFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxDQUFDO1FBQ1AsYUFBYSxFQUFFLEtBQUs7UUFDcEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsV0FBVyxFQUFFLFNBQVM7S0FDdkI7Q0FDRixDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vTGVmdEhlYWRlci9MZWZ0Q29udGFpbmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgVmlldyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZnRDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L1ZpZXc+O1xuICB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgY29udGFpbmVyOiB7XG4gICAgZmxleDogMixcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBib3JkZXJDb2xvcjogJyNCREJEQkQnXG4gIH1cbn0pO1xuIl0sInZlcnNpb24iOjN9