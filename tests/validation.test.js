import Joi from 'joi'

describe('Joi', () => {
    it('should can create schema', () => {
        const schema = Joi.string().min(3).max(100).required()
        const result = schema.validate("ricid")

        if (result.error) {
            console.log(result.error)
        }
    })

    it('should can validate basic data type', () => {
        const usernameSchema = Joi.string().email().required()
        const isAdminSchema = Joi.boolean().required()
        const priceSchema = Joi.number().required().min(1000).max(100000)

        const resultUsername = usernameSchema.validate("ricid@gmail.com")
        console.log(resultUsername)

        const resultIsAdmin = isAdminSchema.validate("true")
        console.log(resultIsAdmin)

        const resultPrice = priceSchema.validate("10000")
        console.log(resultPrice)
    })
})