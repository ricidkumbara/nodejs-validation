import Joi from 'joi'

describe('Joi', () => {
    it('should be able to create custom validation', () => {
        const registerSchema = Joi.object({
            username: Joi.string().required().min(3).max(100).email(),
            password: Joi.string().required().min(6).max(100).custom((value, helpers) => {
                if (value.startsWith("ricid")) {
                    return helpers.error("password.wrong")
                }

                return value
            }).messages({
                'password.wrong': `password cannot start with ricid`
            }),
            confirmPassword: Joi.string().required().min(6).max(100),
        }).custom((value, helpers) => {
            if (value.password !== value.confirmPassword) {
                return helpers.error("register.password.different")
            }

            return value
        }).messages({
            'register.password.different': 'password and confirmPassword is different'
        })

        const request = {
            username: "ricidkumbara@gmail.com",
            password: "salahxxxxxx",
            confirmPassword: "salahzzzzzz",
        }

        const result = registerSchema.validate(request, {
            abortEarly: false
        })

        console.log(result)
    })
})