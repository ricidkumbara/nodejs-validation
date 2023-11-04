import Joi from "joi"

describe('Joi', () => {
    it('should be able to use custom message', () => {
        const schema = Joi.string().min(3).max(10).required().messages({
            'string.min': '{{#label}} panjang minimal {{#limit}} karakter',
            'string.max': '{{#label}} panjang maksimal {{#limit}} karakter',
        })

        const request = "aaaaaaaaaaaaaaaa"
        const result = schema.validate(request);
        
        console.log(result)
    })

    it('should be able to make custom message in object', () => {
        const schema = Joi.object({
            username: Joi.string().required().email().messages({
                'any.required': '{{#label}} harus diisi',
                'string.email': '{{#label}} harus valid email',
            }),
            password: Joi.string().required().min(6).max(10).messages({
                'any.required': '{{#label}} harus diisi',
                'string.min': '{{#label}} harus lebih dari {{#limit}} karakter',
                'string.max': '{{#label}} harus kurang dari {{#limit}} karakter',
            }),
        })

        const request = {
            username: "ricid@test.com",
            password: "x",
        }

        const result = schema.validate(request, {
            abortEarly: false,
        })

        console.log(result)
    })
})