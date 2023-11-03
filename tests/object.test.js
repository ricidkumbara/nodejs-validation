import Joi from 'joi'

describe('Joi', () => {
    it('should return validation error', () => {
        const loginSchema = Joi.object({
            username: Joi.string().min(3).email().required(),
            password: Joi.string().min(6).required()
        })

        const request = {
            username: "ricidkumbara@test.com",
            password: "password",
        }

        const result = loginSchema.validate(request, {
            abortEarly: false
        })

        console.log(result)
    })

    it('should be able to validate nested object', () => {
        const createUserSchema = Joi.object({
            id: Joi.string().required().max(100),
            name: Joi.string().required().max(100),
            address: Joi.object({
                street: Joi.string().required().max(200),
                city: Joi.string().required().max(100),
                country: Joi.string().required().max(100),
                zipCode: Joi.string().required().max(10),
            }).required(),
        })

        const request = {
            address: {
                
            }
        }

        const result = createUserSchema.validate(request, {
            abortEarly: false,
        })

        console.log(result)
    })
})