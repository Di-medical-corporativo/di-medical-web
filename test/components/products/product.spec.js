import product from '@/components/products/product.vue'
import { shallowMount } from '@vue/test-utils'

describe('product card', () => {
    const testProduct = {
        id: '123-abc',
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        photos: ['jpg', 'img2', 'img2',],
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        brand: 'Test brand for product',
        stock: true
    }

    test('should match snapshot', () => {
        const wrapper = shallowMount(product, {
            propsData: {
                product: testProduct
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    });

    test('should change stock icon depending on product stock propertie', () => {
        const wrapper = shallowMount(product, {
            propsData: {
                product: testProduct
            }
        })
        const stockIcon = wrapper.get('b-icon')
        expect(stockIcon.attributes('icon')).toBe('check2')
        expect(stockIcon.attributes('variant')).toBe('success')
    })

    test('should shorten name and title when length is greater than 120 and 40 respectively', () => {
        const wrapper = shallowMount(product, {
            propsData: {
                product: testProduct
            }
        })
        const shortenName = wrapper.vm.shortenName
        const shortenTitle = wrapper.vm.shortenTitle
        expect(shortenName.includes('...')).toBe(true)
        expect(shortenTitle.includes('...')).toBe(true)
    });
})
