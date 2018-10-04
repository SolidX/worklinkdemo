"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enzyme_1 = require("enzyme");
const react_1 = __importDefault(require("react"));
const redux_mock_store_1 = __importDefault(require("redux-mock-store"));
const enzyme_to_json_1 = __importDefault(require("enzyme-to-json"));
// imported as an unconnected component!
const SupervisorQueueScreen_1 = __importDefault(require("../SupervisorQueueScreen"));
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
// const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = redux_mock_store_1.default();
const initialState = {
    teamMembers: [],
    error: ''
};
let wrapper;
let store;
// describe('Testing SupervisorQueueScreen', () => {
//   it('renders as expected', () => {
//     const wrapper = shallow(<SupervisorQueueScreen  />, {
//       context: { store: mockStore(initialState) }
//     });
//     expect(wrapper.dive()).toMatchSnapshot();
//   });
// });
//jest.mock('react-navigation', ({withNavigation: (component: SupervisorQueueScreen) => component}));
beforeEach(() => { });
describe('SupervisorQueueScreen rendering', () => {
    // const container = shallow(<SupervisorQueueScreen />);
    // it('should render a <DragContainer/>', () => {
    //   expect(container).toMatchSnapshot();
    // });
    it('renders correctly', () => {
        //   const tree = renderer.create(<SupervisorQueueScreen />).toJSON();
        //   expect(tree).toMatchSnapshot();
        const navigation = {
            navigate: jest.fn(),
            dispatch: jest.fn(),
            state: {},
            goBack: jest.fn(),
            dismiss: jest.fn(),
            openDrawer: jest.fn(),
            closeDrawer: jest.fn(),
            toggleDrawer: jest.fn(),
            getParam: jest.fn(),
            setParams: jest.fn(),
            addListener: jest.fn(),
            push: jest.fn(),
            replace: jest.fn(),
            pop: jest.fn(),
            popToTop: jest.fn(),
            isFocused: jest.fn()
        };
        beforeEach(() => { });
        const wrapper = enzyme_1.shallow(react_1.default.createElement(SupervisorQueueScreen_1.default
        // teamMembers={initialState.teamMembers}
        // error={''}
        , { 
            // teamMembers={initialState.teamMembers}
            // error={''}
            navigation: navigation }), { context: { mockStore } });
        const component = wrapper.dive();
        expect(enzyme_to_json_1.default(component)).toMatchSnapshot();
    });
});
// test('renders correctly', () => {
//   const navigation = {
//     navigate: jest.fn(),
//     dispatch: jest.fn(),
//     state: {},
//     goBack: jest.fn(),
//     dismiss: jest.fn(),
//     openDrawer: jest.fn(),
//     closeDrawer: jest.fn(),
//     toggleDrawer: jest.fn(),
//     getParam: jest.fn(),
//     setParams: jest.fn(),
//     addListener: jest.fn(),
//     push: jest.fn(),
//     replace: jest.fn(),
//     pop: jest.fn(),
//     popToTop: jest.fn(),
//     isFocused: jest.fn()
//   };
//   const tree = renderer
//     .create(<SupervisorQueueScreen navigation={navigation} />)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9zY3JlZW5zL19fdGVzdHNfXy9zdXBlcnZpc29yLXF1ZXF1ZS10ZXN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBNEM7QUFDNUMsa0RBQTBCO0FBQzFCLHdFQUE4QztBQUM5QyxvRUFBb0M7QUFJcEMsd0NBQXdDO0FBQ3hDLHFGQUE2RDtBQUM3RCxzRkFBOEM7QUFFOUMsa0JBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLGlDQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFFdEMsNEVBQTRFO0FBQzVFLE1BQU0sU0FBUyxHQUFHLDBCQUFjLEVBQUUsQ0FBQztBQUVuQyxNQUFNLFlBQVksR0FBRztJQUNuQixXQUFXLEVBQUUsRUFBRTtJQUNmLEtBQUssRUFBRSxFQUFFO0NBQ1YsQ0FBQztBQUNGLElBQUksT0FBTyxDQUFDO0FBQ1osSUFBSSxLQUFLLENBQUM7QUFFVixvREFBb0Q7QUFDcEQsc0NBQXNDO0FBQ3RDLDREQUE0RDtBQUM1RCxvREFBb0Q7QUFDcEQsVUFBVTtBQUNWLGdEQUFnRDtBQUNoRCxRQUFRO0FBQ1IsTUFBTTtBQUNOLHFHQUFxRztBQUNyRyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckIsUUFBUSxDQUFDLGlDQUFpQyxFQUFFLEdBQUcsRUFBRTtJQUMvQyx3REFBd0Q7SUFDeEQsaURBQWlEO0lBQ2pELHlDQUF5QztJQUN6QyxNQUFNO0lBQ04sRUFBRSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsRUFBRTtRQUMzQixzRUFBc0U7UUFDdEUsb0NBQW9DO1FBRXBDLE1BQU0sVUFBVSxHQUFHO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ25CLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ25CLEtBQUssRUFBRSxFQUFFO1lBQ1QsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDbEIsVUFBVSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDckIsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDdEIsWUFBWSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDcEIsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDdEIsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNsQixHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNkLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1NBQ3JCLENBQUM7UUFDRixVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckIsTUFBTSxPQUFPLEdBQUcsZ0JBQU8sQ0FDckIsOEJBQUMsK0JBQXFCO1FBQ3BCLHlDQUF5QztRQUN6QyxhQUFhOztZQURiLHlDQUF5QztZQUN6QyxhQUFhO1lBQ2IsVUFBVSxFQUFFLFVBQVUsR0FHdEIsRUFDRixFQUFFLE9BQU8sRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQzNCLENBQUM7UUFDRixNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakMsTUFBTSxDQUFDLHdCQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUM5QyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsb0NBQW9DO0FBQ3BDLHlCQUF5QjtBQUN6QiwyQkFBMkI7QUFDM0IsMkJBQTJCO0FBQzNCLGlCQUFpQjtBQUNqQix5QkFBeUI7QUFDekIsMEJBQTBCO0FBQzFCLDZCQUE2QjtBQUM3Qiw4QkFBOEI7QUFDOUIsK0JBQStCO0FBQy9CLDJCQUEyQjtBQUMzQiw0QkFBNEI7QUFDNUIsOEJBQThCO0FBQzlCLHVCQUF1QjtBQUN2QiwwQkFBMEI7QUFDMUIsc0JBQXNCO0FBQ3RCLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0IsT0FBTztBQUNQLDBCQUEwQjtBQUMxQixpRUFBaUU7QUFDakUsaUJBQWlCO0FBQ2pCLG9DQUFvQztBQUNwQyxNQUFNIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbzYwL0Rlc2t0b3AvV29ya0ZpbGVzL1dvcmtsaW5rRGVtby9zcmMvUmVhY3Qvc2NyZWVucy9fX3Rlc3RzX18vc3VwZXJ2aXNvci1xdWVxdWUtdGVzdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNoYWxsb3csIGNvbmZpZ3VyZSB9IGZyb20gJ2VuenltZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJ3JlZHV4LW1vY2stc3RvcmUnO1xuaW1wb3J0IHRvSnNvbiBmcm9tICdlbnp5bWUtdG8tanNvbic7XG5pbXBvcnQge30gZnJvbSAndHMtamVzdCc7XG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcic7XG5pbXBvcnQgUHJvcHMgZnJvbSAnLi4vU3VwZXJ2aXNvclF1ZXVlU2NyZWVuJztcbi8vIGltcG9ydGVkIGFzIGFuIHVuY29ubmVjdGVkIGNvbXBvbmVudCFcbmltcG9ydCBTdXBlcnZpc29yUXVldWVTY3JlZW4gZnJvbSAnLi4vU3VwZXJ2aXNvclF1ZXVlU2NyZWVuJztcbmltcG9ydCBBZGFwdGVyIGZyb20gJ2VuenltZS1hZGFwdGVyLXJlYWN0LTE2JztcblxuY29uZmlndXJlKHsgYWRhcHRlcjogbmV3IEFkYXB0ZXIoKSB9KTtcblxuLy8gY29uc3QgbWlkZGxld2FyZXMgPSBbXTsgLy8geW91IGNhbiBtb2NrIGFueSBtaWRkbGV3YXJlcyBoZXJlIGlmIG5lY2Vzc2FyeVxuY29uc3QgbW9ja1N0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB0ZWFtTWVtYmVyczogW10sXG4gIGVycm9yOiAnJ1xufTtcbmxldCB3cmFwcGVyO1xubGV0IHN0b3JlO1xuXG4vLyBkZXNjcmliZSgnVGVzdGluZyBTdXBlcnZpc29yUXVldWVTY3JlZW4nLCAoKSA9PiB7XG4vLyAgIGl0KCdyZW5kZXJzIGFzIGV4cGVjdGVkJywgKCkgPT4ge1xuLy8gICAgIGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93KDxTdXBlcnZpc29yUXVldWVTY3JlZW4gIC8+LCB7XG4vLyAgICAgICBjb250ZXh0OiB7IHN0b3JlOiBtb2NrU3RvcmUoaW5pdGlhbFN0YXRlKSB9XG4vLyAgICAgfSk7XG4vLyAgICAgZXhwZWN0KHdyYXBwZXIuZGl2ZSgpKS50b01hdGNoU25hcHNob3QoKTtcbi8vICAgfSk7XG4vLyB9KTtcbi8vamVzdC5tb2NrKCdyZWFjdC1uYXZpZ2F0aW9uJywgKHt3aXRoTmF2aWdhdGlvbjogKGNvbXBvbmVudDogU3VwZXJ2aXNvclF1ZXVlU2NyZWVuKSA9PiBjb21wb25lbnR9KSk7XG5iZWZvcmVFYWNoKCgpID0+IHt9KTtcbmRlc2NyaWJlKCdTdXBlcnZpc29yUXVldWVTY3JlZW4gcmVuZGVyaW5nJywgKCkgPT4ge1xuICAvLyBjb25zdCBjb250YWluZXIgPSBzaGFsbG93KDxTdXBlcnZpc29yUXVldWVTY3JlZW4gLz4pO1xuICAvLyBpdCgnc2hvdWxkIHJlbmRlciBhIDxEcmFnQ29udGFpbmVyLz4nLCAoKSA9PiB7XG4gIC8vICAgZXhwZWN0KGNvbnRhaW5lcikudG9NYXRjaFNuYXBzaG90KCk7XG4gIC8vIH0pO1xuICBpdCgncmVuZGVycyBjb3JyZWN0bHknLCAoKSA9PiB7XG4gICAgLy8gICBjb25zdCB0cmVlID0gcmVuZGVyZXIuY3JlYXRlKDxTdXBlcnZpc29yUXVldWVTY3JlZW4gLz4pLnRvSlNPTigpO1xuICAgIC8vICAgZXhwZWN0KHRyZWUpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG4gICAgY29uc3QgbmF2aWdhdGlvbiA9IHtcbiAgICAgIG5hdmlnYXRlOiBqZXN0LmZuKCksXG4gICAgICBkaXNwYXRjaDogamVzdC5mbigpLFxuICAgICAgc3RhdGU6IHt9LFxuICAgICAgZ29CYWNrOiBqZXN0LmZuKCksXG4gICAgICBkaXNtaXNzOiBqZXN0LmZuKCksXG4gICAgICBvcGVuRHJhd2VyOiBqZXN0LmZuKCksXG4gICAgICBjbG9zZURyYXdlcjogamVzdC5mbigpLFxuICAgICAgdG9nZ2xlRHJhd2VyOiBqZXN0LmZuKCksXG4gICAgICBnZXRQYXJhbTogamVzdC5mbigpLFxuICAgICAgc2V0UGFyYW1zOiBqZXN0LmZuKCksXG4gICAgICBhZGRMaXN0ZW5lcjogamVzdC5mbigpLFxuICAgICAgcHVzaDogamVzdC5mbigpLFxuICAgICAgcmVwbGFjZTogamVzdC5mbigpLFxuICAgICAgcG9wOiBqZXN0LmZuKCksXG4gICAgICBwb3BUb1RvcDogamVzdC5mbigpLFxuICAgICAgaXNGb2N1c2VkOiBqZXN0LmZuKClcbiAgICB9O1xuICAgIGJlZm9yZUVhY2goKCkgPT4ge30pO1xuICAgIGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93KFxuICAgICAgPFN1cGVydmlzb3JRdWV1ZVNjcmVlblxuICAgICAgICAvLyB0ZWFtTWVtYmVycz17aW5pdGlhbFN0YXRlLnRlYW1NZW1iZXJzfVxuICAgICAgICAvLyBlcnJvcj17Jyd9XG4gICAgICAgIG5hdmlnYXRpb249e25hdmlnYXRpb259XG4gICAgICAgIC8vIHN0b3JlPXttb2NrU3RvcmV9XG4gICAgICAgIC8vIHsuLi5wcm9wc31cbiAgICAgIC8+LFxuICAgICAgeyBjb250ZXh0OiB7IG1vY2tTdG9yZSB9IH1cbiAgICApO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHdyYXBwZXIuZGl2ZSgpO1xuICAgIGV4cGVjdCh0b0pzb24oY29tcG9uZW50KSkudG9NYXRjaFNuYXBzaG90KCk7XG4gIH0pO1xufSk7XG5cbi8vIHRlc3QoJ3JlbmRlcnMgY29ycmVjdGx5JywgKCkgPT4ge1xuLy8gICBjb25zdCBuYXZpZ2F0aW9uID0ge1xuLy8gICAgIG5hdmlnYXRlOiBqZXN0LmZuKCksXG4vLyAgICAgZGlzcGF0Y2g6IGplc3QuZm4oKSxcbi8vICAgICBzdGF0ZToge30sXG4vLyAgICAgZ29CYWNrOiBqZXN0LmZuKCksXG4vLyAgICAgZGlzbWlzczogamVzdC5mbigpLFxuLy8gICAgIG9wZW5EcmF3ZXI6IGplc3QuZm4oKSxcbi8vICAgICBjbG9zZURyYXdlcjogamVzdC5mbigpLFxuLy8gICAgIHRvZ2dsZURyYXdlcjogamVzdC5mbigpLFxuLy8gICAgIGdldFBhcmFtOiBqZXN0LmZuKCksXG4vLyAgICAgc2V0UGFyYW1zOiBqZXN0LmZuKCksXG4vLyAgICAgYWRkTGlzdGVuZXI6IGplc3QuZm4oKSxcbi8vICAgICBwdXNoOiBqZXN0LmZuKCksXG4vLyAgICAgcmVwbGFjZTogamVzdC5mbigpLFxuLy8gICAgIHBvcDogamVzdC5mbigpLFxuLy8gICAgIHBvcFRvVG9wOiBqZXN0LmZuKCksXG4vLyAgICAgaXNGb2N1c2VkOiBqZXN0LmZuKClcbi8vICAgfTtcbi8vICAgY29uc3QgdHJlZSA9IHJlbmRlcmVyXG4vLyAgICAgLmNyZWF0ZSg8U3VwZXJ2aXNvclF1ZXVlU2NyZWVuIG5hdmlnYXRpb249e25hdmlnYXRpb259IC8+KVxuLy8gICAgIC50b0pTT04oKTtcbi8vICAgZXhwZWN0KHRyZWUpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuLy8gfSk7XG4iXSwidmVyc2lvbiI6M30=