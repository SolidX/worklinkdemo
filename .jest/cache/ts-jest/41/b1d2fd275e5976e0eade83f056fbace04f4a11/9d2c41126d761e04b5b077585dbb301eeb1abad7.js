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
const react_native_drag_drop_1 = require("./../../../utils/react-native-drag-drop");
class WorkOrderCard extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            zoneEntered: false
        };
    }
    render() {
        const shadowStyle = {
            backgroundColor: '#fff',
            shadowOpacity: 0.1,
            elevation: 4,
            shadowOffset: { width: -1, height: 3 },
            shadowRadius: 5
        };
        return (react_1.default.createElement(react_native_drag_drop_1.DropZone, { onEnter: () => this.setState({
                zoneEntered: true
            }), onLeave: () => {
                this.setState({
                    zoneEntered: false
                });
            }, onDrop: () => this.props.droppedInZone(true), style: styles.dropZone },
            react_1.default.createElement(react_native_1.View, { style: [
                    styles.wordCard,
                    shadowStyle,
                    this.state.zoneEntered && styles.active
                ] },
                react_1.default.createElement(react_native_1.View, null),
                this.props.children)));
    }
}
exports.default = WorkOrderCard;
const styles = react_native_1.StyleSheet.create({
    dropZone: {
        paddingBottom: '3%'
    },
    wordCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: '3%',
        paddingBottom: '8%',
        borderRadius: 3
    },
    active: {
        backgroundColor: '#FFD740'
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vQXBwQm9keS9Xb3JrT3JkZXIvV29ya09yZGVyQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsK0NBQXlDO0FBQ3pDLCtDQUFnRDtBQUNoRCxvRkFBbUU7QUFFbkUsbUJBQW1DLFNBQVEsaUJBQW1CO0lBQTlEOztRQUNFLFVBQUssR0FBRztZQUNOLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUM7SUFxQ0osQ0FBQztJQXBDQyxNQUFNO1FBQ0osTUFBTSxXQUFXLEdBQUc7WUFDbEIsZUFBZSxFQUFFLE1BQU07WUFDdkIsYUFBYSxFQUFFLEdBQUc7WUFDbEIsU0FBUyxFQUFFLENBQUM7WUFDWixZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTtZQUN0QyxZQUFZLEVBQUUsQ0FBQztTQUNoQixDQUFDO1FBQ0YsT0FBTyxDQUNMLDhCQUFDLGlDQUFRLElBQ1AsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUNaLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1osV0FBVyxFQUFFLElBQUk7YUFDbEIsQ0FBQyxFQUVKLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDWixXQUFXLEVBQUUsS0FBSztpQkFDbkIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUNELE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFDNUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBRXRCLDhCQUFDLG1CQUFJLElBQ0gsS0FBSyxFQUFFO29CQUNMLE1BQU0sQ0FBQyxRQUFRO29CQUNmLFdBQVc7b0JBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLE1BQU07aUJBQ3hDO2dCQUVELDhCQUFDLG1CQUFJLE9BQUc7Z0JBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2YsQ0FDRSxDQUNaLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUF4Q0QsZ0NBd0NDO0FBRUQsTUFBTSxNQUFNLEdBQUcseUJBQVUsQ0FBQyxNQUFNLENBQUM7SUFDL0IsUUFBUSxFQUFFO1FBQ1IsYUFBYSxFQUFFLElBQUk7S0FDcEI7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsQ0FBQztRQUNQLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLE9BQU8sRUFBRSxJQUFJO1FBQ2IsYUFBYSxFQUFFLElBQUk7UUFDbkIsWUFBWSxFQUFFLENBQUM7S0FDaEI7SUFDRCxNQUFNLEVBQUU7UUFDTixlQUFlLEVBQUUsU0FBUztLQUMzQjtDQUNGLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvYW82MC9EZXNrdG9wL1dvcmtGaWxlcy9Xb3JrbGlua0RlbW8vc3JjL1JlYWN0L2NvbW1vbi9BcHBCb2R5L1dvcmtPcmRlci9Xb3JrT3JkZXJDYXJkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgVmlldyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgeyBEcm9wWm9uZSB9IGZyb20gJy4vLi4vLi4vLi4vdXRpbHMvcmVhY3QtbmF0aXZlLWRyYWctZHJvcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmtPcmRlckNhcmQgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgc3RhdGUgPSB7XG4gICAgem9uZUVudGVyZWQ6IGZhbHNlXG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzaGFkb3dTdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgc2hhZG93T3BhY2l0eTogMC4xLFxuICAgICAgZWxldmF0aW9uOiA0LFxuICAgICAgc2hhZG93T2Zmc2V0OiB7IHdpZHRoOiAtMSwgaGVpZ2h0OiAzIH0sXG4gICAgICBzaGFkb3dSYWRpdXM6IDVcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8RHJvcFpvbmVcbiAgICAgICAgb25FbnRlcj17KCkgPT5cbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHpvbmVFbnRlcmVkOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBvbkxlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB6b25lRW50ZXJlZDogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfX1cbiAgICAgICAgb25Ecm9wPXsoKSA9PiB0aGlzLnByb3BzLmRyb3BwZWRJblpvbmUodHJ1ZSl9XG4gICAgICAgIHN0eWxlPXtzdHlsZXMuZHJvcFpvbmV9XG4gICAgICA+XG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgc3R5bGU9e1tcbiAgICAgICAgICAgIHN0eWxlcy53b3JkQ2FyZCxcbiAgICAgICAgICAgIHNoYWRvd1N0eWxlLFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS56b25lRW50ZXJlZCAmJiBzdHlsZXMuYWN0aXZlXG4gICAgICAgICAgXX1cbiAgICAgICAgPlxuICAgICAgICAgIDxWaWV3IC8+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvVmlldz5cbiAgICAgIDwvRHJvcFpvbmU+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGRyb3Bab25lOiB7XG4gICAgcGFkZGluZ0JvdHRvbTogJzMlJ1xuICB9LFxuICB3b3JkQ2FyZDoge1xuICAgIGZsZXg6IDEsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcGFkZGluZzogJzMlJyxcbiAgICBwYWRkaW5nQm90dG9tOiAnOCUnLFxuICAgIGJvcmRlclJhZGl1czogM1xuICB9LFxuICBhY3RpdmU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZENzQwJ1xuICB9XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==