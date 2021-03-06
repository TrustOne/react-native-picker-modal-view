import * as React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { shallow, ShallowWrapper, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { SelectBoxComponent } from '../src/Components/SelectBox';

describe('SelectBoxComponent', () => {
	describe('rendering', () => {
		let wrapper: ShallowWrapper;
		let mounting;
		const spyOn = jest.fn(() => { });
		const data = {
			Id: 1,
			Name: 'John Doe',
			Value: 'John Doe',
		}
		let component = (
			<SelectBoxComponent
				selectedObject={data}
				openModal={spyOn}
				chooseText='Choose one'
				disabled={false}
			/>
		);
		beforeEach(() => {
			wrapper = shallow(component);
			mounting = mount(component);
		});

		test('should render a SelectBoxComponent', () => {
			const render = renderer.create(component).toJSON();
			expect(render).toMatchSnapshot();
		});

		test('should render a <TouchableOpacity />', () => {
			expect(wrapper.find(TouchableOpacity)).toHaveLength(1);
		});

		test('should render a <View />', () => {
			expect(wrapper.find(View)).toHaveLength(1);
		});

		test('should render a <Text />', () => {
			expect(wrapper.find(Text)).toHaveLength(1);
		});

		test('should render a <Image />', () => {
			expect(wrapper.find(Image)).toHaveLength(1);
		});

		test('should touchable opacity button fired openModal', () => {
			spyOn.mockReturnThis();
			wrapper.find(TouchableOpacity).last().simulate('press');
			expect(spyOn).toHaveBeenCalled();
		});

	});
});
