import React from 'react';
import { shallow } from 'enzyme';
import MyAccountInput from 'components/MyAccountInput/MyAccountInput';
import ProfileDetails from './ProfileDetails';
import { WrapStyled, MyAccountButtonStyled } from './ProfileDetailsStyled';

describe('<ProfileDetails/>', () => {
  describe('@renders', () => {
    it('should render initial state', () => {
      const wrapper = shallow(<ProfileDetails />);
      expect(wrapper.find(WrapStyled)).toHaveLength(1);
      expect(wrapper.find(MyAccountInput)).toHaveLength(3);
      expect(wrapper.find(MyAccountButtonStyled)).toHaveLength(1);
    });
  });
});
