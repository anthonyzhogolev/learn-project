import { classNames } from 'shared/lib/classNames'

describe('classNames', () => {
    it('should return className as 1st param', () => {
        expect(classNames('classname')).toBe('classname')
    })

    it('should return additional className ', () => {
        expect(classNames('classname', {}, ['class1'])).toBe('classname class1')
    })

    it('should return conditional className ', () => {
        expect(classNames('classname', { class2: true, class3: false }, ['class1'])).toBe('classname class1 class2')
    })
})
