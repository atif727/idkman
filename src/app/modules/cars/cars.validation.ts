import { z } from 'zod';
const carValidationSchema = z.object({
  name: z.string({ required_error: 'Name is required' }),
  description: z.string({ required_error: 'Description is required' }),
  color: z.string({ required_error: 'Color is required' }),
  isElectric: z.boolean({ required_error: 'isElectric is required' }),
  features: z.array(z.string(), { required_error: 'Features are required' }),
  pricePerHour: z
    .number({ required_error: 'Price per hour is required' })
    .positive({ message: 'Price per hour must be a positive number' }),
});
export const carValidation = { carValidationSchema };