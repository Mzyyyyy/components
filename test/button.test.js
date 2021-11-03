/**
 * @jest-environment jsdom
 */
import { mount } from '@vue/test-utils'
import Button from '../src/components/button'

describe('button',()=>{
    const wrapper = mount(Button)
    test('是一个vue实例',()=>{
        // const wrapper = mount(Button)
        // expect(wrapper.isVueInstance()).toBeTruthy()
        expect(wrapper.vm).toBeTruthy();
    })

    test('button click should increment the count', () => {
        expect(wrapper.vm.count).toBe(0)
        const button = wrapper.find('button')
        button.trigger('click')
        expect(wrapper.vm.count).toBe(1)
      })
})

