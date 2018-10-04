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
const Draggable_1 = __importDefault(require("../../../utils/react-native-drag-drop/Draggable"));
const MaterialIcons_1 = __importDefault(require("react-native-vector-icons/MaterialIcons"));
class TeamMember extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            iconName: 'account-circle',
            iconColor: '#5eb8ec'
        };
        // change icon when teaMember selected or unselected
        this.changeIcon = (id) => {
            const memberIdPresent = this.props.teamArray.some(member => member.id === id);
            memberIdPresent
                ? this.setState({
                    iconName: 'check-circle',
                    iconColor: '#c6cacc'
                })
                : this.setState({
                    iconName: 'account-circle',
                    iconColor: '#5eb8ec'
                });
        };
    }
    render() {
        const { item, selectTeamMember, teamArray, addCurrentId, currentId } = this.props;
        return (react_1.default.createElement(Draggable_1.default, { style: [styles.teamMember], itemId: item.id, draggableSelectTeamMember: selectTeamMember, draggableChangeIcon: this.changeIcon, teamArray: teamArray, addCurrentId: addCurrentId },
            react_1.default.createElement(react_native_1.View, { style: styles.user },
                react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: () => {
                        selectTeamMember(item.id);
                        // use setState callback to make component run changeIcon synchronously
                        this.setState({}, () => {
                            this.changeIcon(item.id);
                        });
                    } },
                    react_1.default.createElement(MaterialIcons_1.default, { name: `${this.state.iconName}`, size: 30, color: `${this.state.iconColor}` })),
                react_1.default.createElement(react_native_1.Text, { style: styles.name }, item.client.name)),
            react_1.default.createElement(react_native_1.Text, { style: styles.countText }, "5")));
    }
}
exports.default = TeamMember;
const styles = react_native_1.StyleSheet.create({
    teamMember: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#c6cacc',
        paddingTop: '2%',
        paddingBottom: '10%'
    },
    user: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '5%'
    },
    name: {
        marginLeft: '3%'
    },
    countText: {
        flex: 0.5
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21wb25lbnRzL1JpZ2h0UGFuZWwvQm9keS9UZWFtTWVtYmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBeUM7QUFDekMsK0NBQXdFO0FBQ3hFLGdHQUF3RTtBQUN4RSw0RkFBMkQ7QUFFM0QsZ0JBQWdDLFNBQVEsaUJBQW1CO0lBQTNEOztRQUNFLFVBQUssR0FBRztZQUNOLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLFNBQVM7U0FDckIsQ0FBQztRQUNGLG9EQUFvRDtRQUNwRCxlQUFVLEdBQUcsQ0FBQyxFQUFVLEVBQUUsRUFBRTtZQUMxQixNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQy9DLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQzNCLENBQUM7WUFDRixlQUFlO2dCQUNiLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUNaLFFBQVEsRUFBRSxjQUFjO29CQUN4QixTQUFTLEVBQUUsU0FBUztpQkFDckIsQ0FBQztnQkFDSixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDWixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixTQUFTLEVBQUUsU0FBUztpQkFDckIsQ0FBQyxDQUFDO1FBQ1QsQ0FBQyxDQUFDO0lBd0NKLENBQUM7SUF2Q0MsTUFBTTtRQUNKLE1BQU0sRUFDSixJQUFJLEVBQ0osZ0JBQWdCLEVBQ2hCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNWLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sQ0FDTCw4QkFBQyxtQkFBUyxJQUNSLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFDMUIsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQ2YseUJBQXlCLEVBQUUsZ0JBQWdCLEVBQzNDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxVQUFVLEVBQ3BDLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLFlBQVksRUFBRSxZQUFZO1lBRTFCLDhCQUFDLG1CQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJO2dCQUN0Qiw4QkFBQywrQkFBZ0IsSUFDZixPQUFPLEVBQUUsR0FBRyxFQUFFO3dCQUNaLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDMUIsdUVBQXVFO3dCQUN2RSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUU7NEJBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUMzQixDQUFDLENBQUMsQ0FBQztvQkFDTCxDQUFDO29CQUVELDhCQUFDLHVCQUFJLElBQ0gsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFDOUIsSUFBSSxFQUFFLEVBQUUsRUFDUixLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxHQUNoQyxDQUNlO2dCQUNuQiw4QkFBQyxtQkFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFRLENBQzlDO1lBQ1AsOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVMsUUFBVSxDQUM3QixDQUNiLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUEzREQsNkJBMkRDO0FBRUQsTUFBTSxNQUFNLEdBQUcseUJBQVUsQ0FBQyxNQUFNLENBQUM7SUFDL0IsVUFBVSxFQUFFO1FBQ1YsVUFBVSxFQUFFLFFBQVE7UUFDcEIsY0FBYyxFQUFFLFFBQVE7UUFDeEIsYUFBYSxFQUFFLEtBQUs7UUFDcEIsaUJBQWlCLEVBQUUsQ0FBQztRQUNwQixXQUFXLEVBQUUsT0FBTztRQUNwQixXQUFXLEVBQUUsU0FBUztRQUN0QixVQUFVLEVBQUUsSUFBSTtRQUNoQixhQUFhLEVBQUUsS0FBSztLQUNyQjtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxDQUFDO1FBQ1AsYUFBYSxFQUFFLEtBQUs7UUFDcEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsV0FBVyxFQUFFLElBQUk7S0FDbEI7SUFDRCxJQUFJLEVBQUU7UUFDSixVQUFVLEVBQUUsSUFBSTtLQUNqQjtJQUNELFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxHQUFHO0tBQ1Y7Q0FDRixDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21wb25lbnRzL1JpZ2h0UGFuZWwvQm9keS9UZWFtTWVtYmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgVGV4dCwgVmlldywgVG91Y2hhYmxlT3BhY2l0eSB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4uLy4uLy4uL3V0aWxzL3JlYWN0LW5hdGl2ZS1kcmFnLWRyb3AvRHJhZ2dhYmxlJztcbmltcG9ydCBJY29uIGZyb20gJ3JlYWN0LW5hdGl2ZS12ZWN0b3ItaWNvbnMvTWF0ZXJpYWxJY29ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlYW1NZW1iZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgc3RhdGUgPSB7XG4gICAgaWNvbk5hbWU6ICdhY2NvdW50LWNpcmNsZScsXG4gICAgaWNvbkNvbG9yOiAnIzVlYjhlYydcbiAgfTtcbiAgLy8gY2hhbmdlIGljb24gd2hlbiB0ZWFNZW1iZXIgc2VsZWN0ZWQgb3IgdW5zZWxlY3RlZFxuICBjaGFuZ2VJY29uID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBtZW1iZXJJZFByZXNlbnQgPSB0aGlzLnByb3BzLnRlYW1BcnJheS5zb21lKFxuICAgICAgbWVtYmVyID0+IG1lbWJlci5pZCA9PT0gaWRcbiAgICApO1xuICAgIG1lbWJlcklkUHJlc2VudFxuICAgICAgPyB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpY29uTmFtZTogJ2NoZWNrLWNpcmNsZScsXG4gICAgICAgICAgaWNvbkNvbG9yOiAnI2M2Y2FjYydcbiAgICAgICAgfSlcbiAgICAgIDogdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaWNvbk5hbWU6ICdhY2NvdW50LWNpcmNsZScsXG4gICAgICAgICAgaWNvbkNvbG9yOiAnIzVlYjhlYydcbiAgICAgICAgfSk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpdGVtLFxuICAgICAgc2VsZWN0VGVhbU1lbWJlcixcbiAgICAgIHRlYW1BcnJheSxcbiAgICAgIGFkZEN1cnJlbnRJZCxcbiAgICAgIGN1cnJlbnRJZFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8RHJhZ2dhYmxlXG4gICAgICAgIHN0eWxlPXtbc3R5bGVzLnRlYW1NZW1iZXJdfVxuICAgICAgICBpdGVtSWQ9e2l0ZW0uaWR9XG4gICAgICAgIGRyYWdnYWJsZVNlbGVjdFRlYW1NZW1iZXI9e3NlbGVjdFRlYW1NZW1iZXJ9XG4gICAgICAgIGRyYWdnYWJsZUNoYW5nZUljb249e3RoaXMuY2hhbmdlSWNvbn1cbiAgICAgICAgdGVhbUFycmF5PXt0ZWFtQXJyYXl9XG4gICAgICAgIGFkZEN1cnJlbnRJZD17YWRkQ3VycmVudElkfVxuICAgICAgPlxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnVzZXJ9PlxuICAgICAgICAgIDxUb3VjaGFibGVPcGFjaXR5XG4gICAgICAgICAgICBvblByZXNzPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNlbGVjdFRlYW1NZW1iZXIoaXRlbS5pZCk7XG4gICAgICAgICAgICAgIC8vIHVzZSBzZXRTdGF0ZSBjYWxsYmFjayB0byBtYWtlIGNvbXBvbmVudCBydW4gY2hhbmdlSWNvbiBzeW5jaHJvbm91c2x5XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe30sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUljb24oaXRlbS5pZCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBuYW1lPXtgJHt0aGlzLnN0YXRlLmljb25OYW1lfWB9XG4gICAgICAgICAgICAgIHNpemU9ezMwfVxuICAgICAgICAgICAgICBjb2xvcj17YCR7dGhpcy5zdGF0ZS5pY29uQ29sb3J9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Ub3VjaGFibGVPcGFjaXR5PlxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMubmFtZX0+e2l0ZW0uY2xpZW50Lm5hbWV9PC9UZXh0PlxuICAgICAgICA8L1ZpZXc+XG4gICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuY291bnRUZXh0fT41PC9UZXh0PlxuICAgICAgPC9EcmFnZ2FibGU+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIHRlYW1NZW1iZXI6IHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYm9yZGVyQm90dG9tV2lkdGg6IDEsXG4gICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG4gICAgYm9yZGVyQ29sb3I6ICcjYzZjYWNjJyxcbiAgICBwYWRkaW5nVG9wOiAnMiUnLFxuICAgIHBhZGRpbmdCb3R0b206ICcxMCUnXG4gIH0sXG4gIHVzZXI6IHtcbiAgICBmbGV4OiA0LFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmdMZWZ0OiAnNSUnXG4gIH0sXG4gIG5hbWU6IHtcbiAgICBtYXJnaW5MZWZ0OiAnMyUnXG4gIH0sXG4gIGNvdW50VGV4dDoge1xuICAgIGZsZXg6IDAuNVxuICB9XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==