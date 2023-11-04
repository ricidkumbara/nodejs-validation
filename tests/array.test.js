import Joi from "joi"

describe('Joi', () => {
    it('should can validate array', () => {
        const hobbiesSchema = Joi.array().items(
            Joi.string().required().min(3).max(100)
        ).min(1).unique()

        const hobbies = ["A", "Reading", "Coding", "Coding"]

        const result = hobbiesSchema.validate(hobbies, {
            abortEarly: false,
        })

        console.log(result)
    })

    it('should be able validate array of object', () => {
        const addressesSchema = Joi.array().min(1).items(
            Joi.object({
                street: Joi.string().required().max(200),
                city: Joi.string().required().max(100),
                country: Joi.string().required().max(100),
                zipCode: Joi.string().required().max(10),
            })
        )

        const addresses = [
            {
                street: "JL. Mawar",
            }
        ]

        const result = addressesSchema.validate(addresses, {
            abortEarly: false,
        })

        console.log(result)
    })
})