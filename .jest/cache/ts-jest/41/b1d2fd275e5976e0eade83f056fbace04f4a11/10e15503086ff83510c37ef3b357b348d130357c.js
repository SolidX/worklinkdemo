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
// describe('Testing SupervisorQueueScreen', () => {
//   it('renders as expected', () => {
//     const wrapper = shallow(<SupervisorQueueScreen  />, {
//       context: { store: mockStore(initialState) }
//     });
//     expect(wrapper.dive()).toMatchSnapshot();
//   });
// });
//jest.mock('react-navigation', ({withNavigation: (component: SupervisorQueueScreen) => component}));
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
        const wrapper = enzyme_1.shallow(react_1.default.createElement(SupervisorQueueScreen_1.default
        //teamMembers={[]}
        //error={''}
        , { 
            //teamMembers={[]}
            //error={''}
            navigation: navigation }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9zY3JlZW5zL19fdGVzdHNfXy9zdXBlcnZpc29yLXF1ZXF1ZS10ZXN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBNEM7QUFDNUMsa0RBQTBCO0FBQzFCLHdFQUE4QztBQUM5QyxvRUFBb0M7QUFJcEMsd0NBQXdDO0FBQ3hDLHFGQUE2RDtBQUM3RCxzRkFBOEM7QUFFOUMsa0JBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLGlDQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFFdEMsNEVBQTRFO0FBQzVFLE1BQU0sU0FBUyxHQUFHLDBCQUFjLEVBQUUsQ0FBQztBQUVuQyxNQUFNLFlBQVksR0FBRztJQUNuQixXQUFXLEVBQUUsRUFBRTtJQUNmLEtBQUssRUFBRSxFQUFFO0NBQ1YsQ0FBQztBQUVGLG9EQUFvRDtBQUNwRCxzQ0FBc0M7QUFDdEMsNERBQTREO0FBQzVELG9EQUFvRDtBQUNwRCxVQUFVO0FBQ1YsZ0RBQWdEO0FBQ2hELFFBQVE7QUFDUixNQUFNO0FBQ04scUdBQXFHO0FBRXJHLFFBQVEsQ0FBQyxpQ0FBaUMsRUFBRSxHQUFHLEVBQUU7SUFDL0Msd0RBQXdEO0lBQ3hELGlEQUFpRDtJQUNqRCx5Q0FBeUM7SUFDekMsTUFBTTtJQUNOLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7UUFDM0Isc0VBQXNFO1FBQ3RFLG9DQUFvQztRQUVwQyxNQUFNLFVBQVUsR0FBRztZQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNuQixLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ2pCLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ2xCLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ3JCLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ3RCLFlBQVksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ3BCLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDbEIsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDZCxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNuQixTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtTQUNyQixDQUFDO1FBRUYsTUFBTSxPQUFPLEdBQUcsZ0JBQU8sQ0FDckIsOEJBQUMsK0JBQXFCO1FBQ3BCLGtCQUFrQjtRQUNsQixZQUFZOztZQURaLGtCQUFrQjtZQUNsQixZQUFZO1lBQ1osVUFBVSxFQUFFLFVBQVUsR0FFdEIsQ0FDSCxDQUFDO1FBQ0YsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyx3QkFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDOUMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILG9DQUFvQztBQUNwQyx5QkFBeUI7QUFDekIsMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQixpQkFBaUI7QUFDakIseUJBQXlCO0FBQ3pCLDBCQUEwQjtBQUMxQiw2QkFBNkI7QUFDN0IsOEJBQThCO0FBQzlCLCtCQUErQjtBQUMvQiwyQkFBMkI7QUFDM0IsNEJBQTRCO0FBQzVCLDhCQUE4QjtBQUM5Qix1QkFBdUI7QUFDdkIsMEJBQTBCO0FBQzFCLHNCQUFzQjtBQUN0QiwyQkFBMkI7QUFDM0IsMkJBQTJCO0FBQzNCLE9BQU87QUFDUCwwQkFBMEI7QUFDMUIsaUVBQWlFO0FBQ2pFLGlCQUFpQjtBQUNqQixvQ0FBb0M7QUFDcEMsTUFBTSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvYW82MC9EZXNrdG9wL1dvcmtGaWxlcy9Xb3JrbGlua0RlbW8vc3JjL1JlYWN0L3NjcmVlbnMvX190ZXN0c19fL3N1cGVydmlzb3ItcXVlcXVlLXRlc3RzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaGFsbG93LCBjb25maWd1cmUgfSBmcm9tICdlbnp5bWUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICdyZWR1eC1tb2NrLXN0b3JlJztcbmltcG9ydCB0b0pzb24gZnJvbSAnZW56eW1lLXRvLWpzb24nO1xuaW1wb3J0IHt9IGZyb20gJ3RzLWplc3QnO1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJ3JlYWN0LXRlc3QtcmVuZGVyZXInO1xuaW1wb3J0IFByb3BzIGZyb20gJy4uL1N1cGVydmlzb3JRdWV1ZVNjcmVlbic7XG4vLyBpbXBvcnRlZCBhcyBhbiB1bmNvbm5lY3RlZCBjb21wb25lbnQhXG5pbXBvcnQgU3VwZXJ2aXNvclF1ZXVlU2NyZWVuIGZyb20gJy4uL1N1cGVydmlzb3JRdWV1ZVNjcmVlbic7XG5pbXBvcnQgQWRhcHRlciBmcm9tICdlbnp5bWUtYWRhcHRlci1yZWFjdC0xNic7XG5cbmNvbmZpZ3VyZSh7IGFkYXB0ZXI6IG5ldyBBZGFwdGVyKCkgfSk7XG5cbi8vIGNvbnN0IG1pZGRsZXdhcmVzID0gW107IC8vIHlvdSBjYW4gbW9jayBhbnkgbWlkZGxld2FyZXMgaGVyZSBpZiBuZWNlc3NhcnlcbmNvbnN0IG1vY2tTdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdGVhbU1lbWJlcnM6IFtdLFxuICBlcnJvcjogJydcbn07XG5cbi8vIGRlc2NyaWJlKCdUZXN0aW5nIFN1cGVydmlzb3JRdWV1ZVNjcmVlbicsICgpID0+IHtcbi8vICAgaXQoJ3JlbmRlcnMgYXMgZXhwZWN0ZWQnLCAoKSA9PiB7XG4vLyAgICAgY29uc3Qgd3JhcHBlciA9IHNoYWxsb3coPFN1cGVydmlzb3JRdWV1ZVNjcmVlbiAgLz4sIHtcbi8vICAgICAgIGNvbnRleHQ6IHsgc3RvcmU6IG1vY2tTdG9yZShpbml0aWFsU3RhdGUpIH1cbi8vICAgICB9KTtcbi8vICAgICBleHBlY3Qod3JhcHBlci5kaXZlKCkpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuLy8gICB9KTtcbi8vIH0pO1xuLy9qZXN0Lm1vY2soJ3JlYWN0LW5hdmlnYXRpb24nLCAoe3dpdGhOYXZpZ2F0aW9uOiAoY29tcG9uZW50OiBTdXBlcnZpc29yUXVldWVTY3JlZW4pID0+IGNvbXBvbmVudH0pKTtcblxuZGVzY3JpYmUoJ1N1cGVydmlzb3JRdWV1ZVNjcmVlbiByZW5kZXJpbmcnLCAoKSA9PiB7XG4gIC8vIGNvbnN0IGNvbnRhaW5lciA9IHNoYWxsb3coPFN1cGVydmlzb3JRdWV1ZVNjcmVlbiAvPik7XG4gIC8vIGl0KCdzaG91bGQgcmVuZGVyIGEgPERyYWdDb250YWluZXIvPicsICgpID0+IHtcbiAgLy8gICBleHBlY3QoY29udGFpbmVyKS50b01hdGNoU25hcHNob3QoKTtcbiAgLy8gfSk7XG4gIGl0KCdyZW5kZXJzIGNvcnJlY3RseScsICgpID0+IHtcbiAgICAvLyAgIGNvbnN0IHRyZWUgPSByZW5kZXJlci5jcmVhdGUoPFN1cGVydmlzb3JRdWV1ZVNjcmVlbiAvPikudG9KU09OKCk7XG4gICAgLy8gICBleHBlY3QodHJlZSkudG9NYXRjaFNuYXBzaG90KCk7XG5cbiAgICBjb25zdCBuYXZpZ2F0aW9uID0ge1xuICAgICAgbmF2aWdhdGU6IGplc3QuZm4oKSxcbiAgICAgIGRpc3BhdGNoOiBqZXN0LmZuKCksXG4gICAgICBzdGF0ZToge30sXG4gICAgICBnb0JhY2s6IGplc3QuZm4oKSxcbiAgICAgIGRpc21pc3M6IGplc3QuZm4oKSxcbiAgICAgIG9wZW5EcmF3ZXI6IGplc3QuZm4oKSxcbiAgICAgIGNsb3NlRHJhd2VyOiBqZXN0LmZuKCksXG4gICAgICB0b2dnbGVEcmF3ZXI6IGplc3QuZm4oKSxcbiAgICAgIGdldFBhcmFtOiBqZXN0LmZuKCksXG4gICAgICBzZXRQYXJhbXM6IGplc3QuZm4oKSxcbiAgICAgIGFkZExpc3RlbmVyOiBqZXN0LmZuKCksXG4gICAgICBwdXNoOiBqZXN0LmZuKCksXG4gICAgICByZXBsYWNlOiBqZXN0LmZuKCksXG4gICAgICBwb3A6IGplc3QuZm4oKSxcbiAgICAgIHBvcFRvVG9wOiBqZXN0LmZuKCksXG4gICAgICBpc0ZvY3VzZWQ6IGplc3QuZm4oKVxuICAgIH07XG5cbiAgICBjb25zdCB3cmFwcGVyID0gc2hhbGxvdyhcbiAgICAgIDxTdXBlcnZpc29yUXVldWVTY3JlZW5cbiAgICAgICAgLy90ZWFtTWVtYmVycz17W119XG4gICAgICAgIC8vZXJyb3I9eycnfVxuICAgICAgICBuYXZpZ2F0aW9uPXtuYXZpZ2F0aW9ufVxuICAgICAgICAvLyB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgICk7XG4gICAgY29uc3QgY29tcG9uZW50ID0gd3JhcHBlci5kaXZlKCk7XG4gICAgZXhwZWN0KHRvSnNvbihjb21wb25lbnQpKS50b01hdGNoU25hcHNob3QoKTtcbiAgfSk7XG59KTtcblxuLy8gdGVzdCgncmVuZGVycyBjb3JyZWN0bHknLCAoKSA9PiB7XG4vLyAgIGNvbnN0IG5hdmlnYXRpb24gPSB7XG4vLyAgICAgbmF2aWdhdGU6IGplc3QuZm4oKSxcbi8vICAgICBkaXNwYXRjaDogamVzdC5mbigpLFxuLy8gICAgIHN0YXRlOiB7fSxcbi8vICAgICBnb0JhY2s6IGplc3QuZm4oKSxcbi8vICAgICBkaXNtaXNzOiBqZXN0LmZuKCksXG4vLyAgICAgb3BlbkRyYXdlcjogamVzdC5mbigpLFxuLy8gICAgIGNsb3NlRHJhd2VyOiBqZXN0LmZuKCksXG4vLyAgICAgdG9nZ2xlRHJhd2VyOiBqZXN0LmZuKCksXG4vLyAgICAgZ2V0UGFyYW06IGplc3QuZm4oKSxcbi8vICAgICBzZXRQYXJhbXM6IGplc3QuZm4oKSxcbi8vICAgICBhZGRMaXN0ZW5lcjogamVzdC5mbigpLFxuLy8gICAgIHB1c2g6IGplc3QuZm4oKSxcbi8vICAgICByZXBsYWNlOiBqZXN0LmZuKCksXG4vLyAgICAgcG9wOiBqZXN0LmZuKCksXG4vLyAgICAgcG9wVG9Ub3A6IGplc3QuZm4oKSxcbi8vICAgICBpc0ZvY3VzZWQ6IGplc3QuZm4oKVxuLy8gICB9O1xuLy8gICBjb25zdCB0cmVlID0gcmVuZGVyZXJcbi8vICAgICAuY3JlYXRlKDxTdXBlcnZpc29yUXVldWVTY3JlZW4gbmF2aWdhdGlvbj17bmF2aWdhdGlvbn0gLz4pXG4vLyAgICAgLnRvSlNPTigpO1xuLy8gICBleHBlY3QodHJlZSkudG9NYXRjaFNuYXBzaG90KCk7XG4vLyB9KTtcbiJdLCJ2ZXJzaW9uIjozfQ==