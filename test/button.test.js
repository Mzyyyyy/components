/**
 * @jest-environment jsdom
 */
import { mount } from '@vue/test-utils'
import Button from '../src/components/button'

describe('button',()=>{
    test('是一个vue实例',()=>{
        const wrapper = mount(Button)
        // expect(wrapper.isVueInstance()).toBeTruthy()
        wrapper.find(Button).vm.toBeTruthy();
        expect(wrapper.vm).toBeTruthy();
    })

    test('button click should increment the count',(done) => {
        const wrapper = mount(Button)
        expect(wrapper.vm.count).toBe(0)
        const button = wrapper.find('button')
        button.trigger('click').then(()=>{
            expect(wrapper.vm.count).toBe(1)
            expect(wrapper.emitted().show).toBeTruthy()
            done()
        })
        
    })

})

