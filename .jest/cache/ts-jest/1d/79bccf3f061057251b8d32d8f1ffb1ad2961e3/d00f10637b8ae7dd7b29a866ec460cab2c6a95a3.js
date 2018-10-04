"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const prop_types_1 = __importDefault(require("prop-types"));
class DropZone extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.displayName = 'DropZone';
        this.state = {};
        this.reportMeasurements = this.reportMeasurements.bind(this);
        this.onEnter = this.onEnter.bind(this);
        this.onLeave = this.onLeave.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }
    reportMeasurements() {
        if (this.props.dragging)
            this.context.dragContext.removeZone(this.refs.wrapper);
        this.refs.wrapper.measure((_, __, width, height, x, y) => {
            if (!this.props.dragging)
                this.context.dragContext.updateZone({
                    width,
                    height,
                    x,
                    y,
                    ref: this.refs.wrapper,
                    onEnter: this.onEnter,
                    onLeave: this.onLeave,
                    onDrop: this.onDrop
                });
        });
    }
    componentDidMount() {
        this.reportMeasurements();
        this._timer = setInterval(this.reportMeasurements, 1000);
    }
    componentWillUnmount() {
        this.context.dragContext.removeZone(this.refs.wrapper);
        clearInterval(this._timer);
    }
    componentDidUpdate() {
        this.reportMeasurements();
    }
    onEnter({ x, y }) {
        if (this.props.disabled)
            return;
        if (!this.state.active) {
            if (this.props.onEnter)
                this.props.onEnter();
            this.setState({
                active: true
            });
        }
    }
    onLeave() {
        if (this.props.disabled)
            return;
        if (this.state.active) {
            if (this.props.onLeave)
                this.props.onLeave();
            this.setState({
                active: false
            });
        }
    }
    onDrop(data) {
        if (this.props.disabled)
            return;
        if (this.props.onDrop)
            this.props.onDrop(data);
        this.setState({
            active: false
        });
    }
    render() {
        return (react_1.default.createElement(react_native_1.View, { style: this.props.style, pointerEvents: this.props.pointerEvents, onLayout: this.reportMeasurements, ref: "wrapper" }, react_1.default.Children.map(this.props.children, child => {
            return react_1.default.cloneElement(child, Object.assign({}, this.props, { dragOver: this.state.active }));
        })));
    }
}
DropZone.propTypes = {
    onEnter: prop_types_1.default.func,
    onLeave: prop_types_1.default.func,
    onDrop: prop_types_1.default.func
};
DropZone.contextTypes = {
    dragContext: prop_types_1.default.any
};
exports.default = DropZone;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC91dGlscy9yZWFjdC1uYXRpdmUtZHJhZy1kcm9wL0Ryb3Bab25lLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUEwQjtBQUMxQiwrQ0FBc0Q7QUFDdEQsNERBQW1DO0FBRW5DLGNBQWUsU0FBUSxlQUFLLENBQUMsU0FBUztJQUNwQyxZQUFZLEtBQUs7UUFDZixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtnQkFDdEIs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O0FBbkVNLGtCQUFTLEdBQUc7SUFDakIsT0FBTyxFQUFFLG9CQUFTLENBQUMsSUFBSTtJQUN2QixPQUFPLEVBQUUsb0JBQVMsQ0FBQyxJQUFJO0lBQ3ZCLE1BQU0sRUFBRSxvQkFBUyxDQUFDLElBQUk7Q0FDdkIsQ0FBQztBQTJDSyxxQkFBWSxHQUFHO0lBQ3BCLFdBQVcsRUFBRSxvQkFBUyxDQUFDLEdBQUc7Q0FDM0IsQ0FBQztBQXFCSixrQkFBZSxRQUFRLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC91dGlscy9yZWFjdC1uYXRpdmUtZHJhZy1kcm9wL0Ryb3Bab25lLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVG91Y2hhYmxlT3BhY2l0eSB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBEcm9wWm9uZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZGlzcGxheU5hbWUgPSAnRHJvcFpvbmUnO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB0aGlzLnJlcG9ydE1lYXN1cmVtZW50cyA9IHRoaXMucmVwb3J0TWVhc3VyZW1lbnRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkVudGVyID0gdGhpcy5vbkVudGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkxlYXZlID0gdGhpcy5vbkxlYXZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRyb3AgPSB0aGlzLm9uRHJvcC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVwb3J0TWVhc3VyZW1lbnRzKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmRyYWdnaW5nKVxuICAgICAgdGhpcy5jb250ZXh0LmRyYWdDb250ZXh0LnJlbW92ZVpvbmUodGhpcy5yZWZzLndyYXBwZXIpO1xuICAgIHRoaXMucmVmcy53cmFwcGVyLm1lYXN1cmUoKF8sIF9fLCB3aWR0aCwgaGVpZ2h0LCB4LCB5KSA9PiB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuZHJhZ2dpbmcpXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmFnQ29udGV4dC51cGRhdGVab25lKHtcbiAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgeCxcbiAgICAgICAgICB5LFxuICAgICAgICAgIHJlZjogdGhpcy5yZWZzLndyYXBwZXIsXG4gICAgICAgICAgb25FbnRlcjogdGhpcy5vbkVudGVyLFxuICAgICAgICAgIG9uTGVhdmU6IHRoaXMub25MZWF2ZSxcbiAgICAgICAgICBvbkRyb3A6IHRoaXMub25Ecm9wXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkRyb3A6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZXBvcnRNZWFzdXJlbWVudHMoKTtcbiAgICB0aGlzLl90aW1lciA9IHNldEludGVydmFsKHRoaXMucmVwb3J0TWVhc3VyZW1lbnRzLCAxMDAwKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY29udGV4dC5kcmFnQ29udGV4dC5yZW1vdmVab25lKHRoaXMucmVmcy53cmFwcGVyKTtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX3RpbWVyKTtcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5yZXBvcnRNZWFzdXJlbWVudHMoKTtcbiAgfVxuXG4gIG9uRW50ZXIoeyB4LCB5IH0pIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkgcmV0dXJuO1xuICAgIGlmICghdGhpcy5zdGF0ZS5hY3RpdmUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uRW50ZXIpIHRoaXMucHJvcHMub25FbnRlcigpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25MZWF2ZSgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25MZWF2ZSkgdGhpcy5wcm9wcy5vbkxlYXZlKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25Ecm9wKGRhdGEpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLnByb3BzLm9uRHJvcCkgdGhpcy5wcm9wcy5vbkRyb3AoZGF0YSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmU6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIGRyYWdDb250ZXh0OiBQcm9wVHlwZXMuYW55XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Vmlld1xuICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cbiAgICAgICAgcG9pbnRlckV2ZW50cz17dGhpcy5wcm9wcy5wb2ludGVyRXZlbnRzfVxuICAgICAgICBvbkxheW91dD17dGhpcy5yZXBvcnRNZWFzdXJlbWVudHN9XG4gICAgICAgIHJlZj1cIndyYXBwZXJcIlxuICAgICAgPlxuICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KFxuICAgICAgICAgICAgY2hpbGQsXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLCB7IGRyYWdPdmVyOiB0aGlzLnN0YXRlLmFjdGl2ZSB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9WaWV3PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcFpvbmU7XG4iXSwidmVyc2lvbiI6M30=